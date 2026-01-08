"use client";

import { useEffect, RefObject } from "react";

export function useAutoScroll(
  ref: RefObject<HTMLDivElement | null>,
  deps: unknown[]
) {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
