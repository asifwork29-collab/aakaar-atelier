import { useEffect } from "react";

export function useEscapeKey(handler, isActive) {
  useEffect(() => {
    if (!isActive) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        handler();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handler, isActive]);
}
