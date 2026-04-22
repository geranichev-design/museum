import { useEffect } from "react";
import { useLocation } from "react-router";

const HEADER_OFFSET = 96;

export function scrollToHashTarget(hash: string, behavior: ScrollBehavior = "smooth") {
  const cleanHash = hash.replace(/^#/, "");
  if (!cleanHash) return;

  const element = document.getElementById(cleanHash);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), left: 0, behavior });
}

export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const timer = window.setTimeout(() => {
      scrollToHashTarget(hash);
    }, 80);

    return () => window.clearTimeout(timer);
  }, [hash]);
}
