"use client";

import { useEffect, useRef } from "react";

export function useUrlCommand(
  addToHistory: (cmd: string) => void,
  isLoading: boolean
) {
  const hasProcessed = useRef(false);

  useEffect(() => {
    // Only run once after loading completes
    if (isLoading || hasProcessed.current) return;

    const params = new URLSearchParams(window.location.search);
    const cmd = params.get("cmd");

    if (cmd) {
      hasProcessed.current = true;
      addToHistory(cmd);
      // Clean URL without reload
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [isLoading, addToHistory]);
}
