"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoaded(true),
    });

    tl.fromTo(
      loaderRef.current,
      { y: "0%" },
      {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
        delay: 1.5,
      }
    );
  }, []);

  if (loaded) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-full bg-green-600 z-[9999] flex items-center justify-center text-white text-3xl font-bold"
    >
      Loading...
    </div>
  );
}
