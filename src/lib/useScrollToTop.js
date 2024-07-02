import { useEffect } from "react";

export const useScrollToTop = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
}