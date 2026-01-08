"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "terminal-command-history";
const MAX_HISTORY = 50;

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch {
        // Invalid JSON, reset history
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const addCommand = (cmd: string) => {
    setHistory((prev) => {
      // Remove duplicate if exists, add to front, limit size
      const newHistory = [cmd, ...prev.filter((h) => h !== cmd)].slice(
        0,
        MAX_HISTORY
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { history, addCommand, clearHistory };
}
