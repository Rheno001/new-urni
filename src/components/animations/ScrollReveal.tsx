import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const getTransformStyle = () => {
    if (isVisible) {
      return "opacity-100 translate-x-0 translate-y-0 scale-100";
    }

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-12 scale-[0.98]";
      case "down":
        return "opacity-0 -translate-y-12 scale-[0.98]";
      case "left":
        return "opacity-0 -translate-x-12";
      case "right":
        return "opacity-0 translate-x-12";
      case "zoom":
        return "opacity-0 scale-90";
      case "fade":
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${getTransformStyle()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // e.g. -0.2 to 0.2
  className?: string;
  horizontal?: boolean;
}

export function Parallax({
  children,
  speed = 0.15,
  className = "",
  horizontal = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only calculate when element is near the viewport
      if (rect.top < viewportHeight + 200 && rect.bottom > -200) {
        const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
        const movement = centerOffset * speed;

        if (horizontal) {
          ref.current.style.transform = `translate3d(${movement}px, 0, 0)`;
        } else {
          ref.current.style.transform = `translate3d(0, ${movement}px, 0)`;
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, [speed, horizontal]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
