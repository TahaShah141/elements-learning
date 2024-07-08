import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to the top when the component mounts
    if (!pathname.includes("#")) window.scrollTo(0, 0);
  }, [pathname]);
}