"use client";

import { useState, useEffect } from "react";

const loadingMessages = [
  "Initializing terminal...",
  "Loading configuration...",
  "Establishing connection...",
  "Mounting file systems...",
  "Starting shell services...",
  "Terminal ready.",
];

export function useTerminalLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState(loadingMessages[0]);

  useEffect(() => {
    let messageIndex = 0;
    const loadingInterval = setInterval(() => {
      if (messageIndex < loadingMessages.length - 1) {
        setLoadingText(loadingMessages[messageIndex]);
        messageIndex++;
      } else {
        setLoadingText(loadingMessages[messageIndex]);
        clearInterval(loadingInterval);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    }, 600);

    return () => clearInterval(loadingInterval);
  }, []);

  return { isLoading, loadingText };
}
