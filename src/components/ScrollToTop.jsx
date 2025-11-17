import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Get the current location object from react-router-dom
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the window whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Depend on pathname, so it runs on every route change

  // This component doesn't render anything visible, it's just for the side effect
  return null;
};

export default ScrollToTop;
