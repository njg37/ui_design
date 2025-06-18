import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (target: string, delay = 0) => {
  gsap.fromTo(
    target,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      delay,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
      },
    }
  );
};

export const staggerReveal = (target: string) => {
  gsap.fromTo(
    `${target} > *`,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
      },
    }
  );
};
