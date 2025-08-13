import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToTarget = () => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          const offset = 120; // Adjust this value to match your header's height
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      };

      // Run after a slight delay to ensure the DOM is fully rendered
      setTimeout(scrollToTarget, 100);
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
