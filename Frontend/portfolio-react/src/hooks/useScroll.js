import { useEffect } from "react";

const useScroll = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      elements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);
};

export default useScroll;