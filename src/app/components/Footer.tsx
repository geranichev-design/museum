import { useState, useEffect } from "react";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
}
