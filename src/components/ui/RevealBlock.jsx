import { useEffect, useRef, useState } from "react";

export function RevealBlock({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -25% 0px" },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-[opacity,transform]
        duration-1000
        ease-[cubic-bezier(0.22,1,0.36,1)]
        motion-reduce:transition-none
        ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[45px]"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
