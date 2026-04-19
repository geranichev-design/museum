import { useState, useEffect } from "react";
import { withHeaderMenu } from "./withHeaderMenu";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const DesktopWithMenu = withHeaderMenu(DesktopHeader);
const MobileWithMenu = withHeaderMenu(MobileHeader);

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobileWithMenu /> : <DesktopWithMenu />;
}
