"use client";

import { useEffect, useRef } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(callback: () => void) {
  const indexRef = useRef(0);
  const callbackRef = useRef(callback);

  // Keep callback ref updated
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Normalize key to lowercase for letter comparison
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = KONAMI_CODE[indexRef.current];

      if (key === expectedKey) {
        indexRef.current += 1;

        if (indexRef.current === KONAMI_CODE.length) {
          callbackRef.current();
          indexRef.current = 0;
        }
      } else if (key !== expectedKey) {
        // Check if this key starts a new sequence
        if (key === KONAMI_CODE[0]) {
          indexRef.current = 1;
        } else {
          indexRef.current = 0;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
