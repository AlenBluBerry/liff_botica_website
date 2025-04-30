import { useEffect, useCallback } from "react";

export default function CallToAction() {
  const handleSmoothScroll = useCallback((event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const href = target.getAttribute("href");
    
    if (!href?.startsWith("#")) return;
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (!targetElement) return;
    
    const headerHeight = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    const allLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    
    allLinks.forEach(link => {
      link.addEventListener("click", handleSmoothScroll, { passive: false });
    });

    return () => {
      allLinks.forEach(link => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, [handleSmoothScroll]);

  return null; // Component doesn't render any UI
}