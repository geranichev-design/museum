import { useEffect, useState, ComponentType } from "react";
import { createPortal } from "react-dom";
import HeaderMenuContent from "./HeaderMenuContent";
import MenuOpen from "../../imports/MenuOpen";

export function withHeaderMenu<P extends object>(Component: ComponentType<P>) {
  return function ComponentWithMenu(props: P) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuContainer, setMenuContainer] = useState<HTMLElement | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
      // Find or create menu container in header
      const headerEl = document.querySelector('[data-name="header menu"]');
      if (headerEl) {
        let container = headerEl.querySelector('[data-menu-portal="true"]') as HTMLElement;
        if (!container) {
          container = document.createElement('div');
          container.setAttribute('data-menu-portal', 'true');

          if (isMobile) {
            container.className = 'fixed bg-black left-0 right-0 top-[73px] z-[3] h-[calc(100vh-73px)] overflow-y-auto';
          } else {
            container.className = 'absolute bg-black content-stretch flex flex-col items-center left-0 right-0 top-[73px] z-[3]';
          }

          // Hide container by default
          container.style.display = 'none';

          headerEl.appendChild(container);
        }
        setMenuContainer(container);
      }

      return () => {
        // Cleanup portal container when component unmounts
        const container = document.querySelector('[data-menu-portal="true"]');
        if (container) {
          container.remove();
        }
      };
    }, [isMobile]);

    useEffect(() => {
      const handleMenuToggle = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const menuButton = target.closest('[data-menu-toggle="true"]');
        const headerEl = document.querySelector('[data-name="header menu"]');

        if (menuButton && headerEl) {
          e.stopPropagation();
          setIsMenuOpen(prev => !prev);
        }
      };

      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const menuPortal = document.querySelector('[data-menu-portal="true"]');
        const menuButton = target.closest('[data-menu-toggle="true"]');

        if (isMenuOpen && menuPortal && !menuPortal.contains(target) && !menuButton) {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener("click", handleMenuToggle);
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleMenuToggle);
        document.removeEventListener("click", handleClickOutside);
      };
    }, [isMenuOpen, isMobile]);

    useEffect(() => {
      // Update burger icon to X when menu is open
      const iconButton = document.querySelector('[data-menu-toggle="true"]') as HTMLElement;
      if (iconButton && iconButton.tagName === 'BUTTON') {
        if (isMenuOpen) {
          iconButton.innerHTML = `
            <div class="h-[20.299px] relative shrink-0 w-[19.799px]">
              <svg class="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.799 20.299">
                <g>
                  <path d="M19.799 2.121L17.678 0L9.9 7.778L2.121 0L0 2.121L7.778 9.9L0 17.678L2.121 19.799L9.9 12.021L17.678 19.799L19.799 17.678L12.021 9.9L19.799 2.121Z" fill="#F5F3EA" />
                </g>
              </svg>
            </div>
          `;
        } else {
          iconButton.innerHTML = `
            <div class="h-[4px] relative shrink-0 w-full" data-name="Line 60 (Stroke)">
              <svg class="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
                <path d="M24 0V4H0V0H24Z" fill="#F5F3EA" />
              </svg>
            </div>
            <div class="h-[4px] relative shrink-0 w-full" data-name="Line 61 (Stroke)">
              <svg class="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
                <path d="M24 0V4H0V0H24Z" fill="#F5F3EA" />
              </svg>
            </div>
            <div class="h-[4px] relative shrink-0 w-full" data-name="Line 62 (Stroke)">
              <svg class="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
                <path d="M24 0V4H0V0H24Z" fill="#F5F3EA" />
              </svg>
            </div>
          `;
        }
      }
    }, [isMenuOpen]);

    useEffect(() => {
      // Close menu when clicking on menu items
      const handleMenuItemClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        // Check if clicked on a menu link
        const isMenuLink = target.tagName === 'A' || target.closest('a');

        // Check if clicked on "Придбати квиток" button
        const ticketButton = target.closest('[data-name="button"]');
        const isTicketButton = ticketButton && ticketButton.textContent?.includes("Придбати квиток");

        if (isMenuOpen && (isMenuLink || isTicketButton)) {
          setIsMenuOpen(false);

          // Navigate to tickets page if ticket button clicked
          if (isTicketButton) {
            e.preventDefault();
            window.location.href = "/tickets";
          }
        }
      };

      if (isMenuOpen) {
        document.addEventListener("click", handleMenuItemClick);
      }

      return () => {
        document.removeEventListener("click", handleMenuItemClick);
      };
    }, [isMenuOpen]);

    useEffect(() => {
      // Show/hide menu container based on isMenuOpen state
      const container = document.querySelector('[data-menu-portal="true"]') as HTMLElement;
      if (container) {
        if (isMenuOpen) {
          container.style.display = isMobile ? 'block' : 'flex';
        } else {
          container.style.display = 'none';
        }
      }
    }, [isMenuOpen, isMobile]);

    useEffect(() => {
      // Prevent body scroll when mobile menu is open
      if (isMobile && isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [isMobile, isMenuOpen]);

    const MenuComponent = isMobile ? MenuOpen : HeaderMenuContent;

    return (
      <>
        <Component {...props} />
        {isMenuOpen && menuContainer && createPortal(<MenuComponent />, menuContainer)}
      </>
    );
  };
}
