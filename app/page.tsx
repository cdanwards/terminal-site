"use client";

import TerminalPrompt from "./components/TerminalPrompt";
import TerminalHeader from "./components/TerminalHeader";
import TerminalFooter from "./components/TerminalFooter";
import { useState, useEffect, useRef } from "react";
import TerminalHistoryList from "./components/TerminalHistoryList";
import { PortfolioCommands } from "./helpers/Commands";

export default function Home() {
  const [terminalHistory, setTerminalHistory] = useState<string[]>(["initial"]);
  const [lastInputTime, setLastInputTime] = useState<number>(Date.now());
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Initializing terminal...");
  const terminalPromptRef = useRef<{ focusInput: () => void } | null>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  // Terminal startup simulation
  useEffect(() => {
    const loadingMessages = [
      "Initializing terminal...",
      "Loading configuration...",
      "Establishing connection...",
      "Mounting file systems...",
      "Starting shell services...",
      "Terminal ready.",
    ];

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

  // Set theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("terminal-theme") as
      | "light"
      | "dark"
      | null;
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // Scroll to bottom when content changes
  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop =
        terminalContentRef.current.scrollHeight;
    }
  }, [terminalHistory, isLoading]);

  const addToTerminalHistory = (line: string) => {
    setTerminalHistory((prev) => [...prev, line]);
    setLastInputTime(Date.now());
  };

  useEffect(() => {
    if (
      terminalHistory.length === 1 &&
      terminalHistory[0] === "initial" &&
      !isLoading
    ) {
      const timer = setTimeout(() => {
        if (Date.now() - lastInputTime >= 3000) {
          setTerminalHistory(["help"]);
        }
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [lastInputTime, terminalHistory, isLoading]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      {/* <div className="galaxy-background">
        <div className="galaxy"></div>
        <div className="galaxy-spiral"></div>
        <div className="galaxy-center"></div>
        <div className="pixel-dust"></div>
        <div className="pixelate-effect"></div>
      </div> */}
      <div className="z-10 w-full max-w-5xl h-[90vh] flex flex-col font-mono text-sm border rounded-md shadow-lg overflow-hidden terminal-window">
        <TerminalHeader />

        <div className="flex-grow flex flex-col overflow-hidden relative">
          {isLoading ? (
            <div className="p-4 absolute inset-0 flex flex-col loading-content">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 bg-green-400 rounded-full pulse-dot"></div>
                  <div className="h-2 w-2 bg-green-400 rounded-full pulse-dot pulse-dot-2"></div>
                  <div className="h-2 w-2 bg-green-400 rounded-full pulse-dot pulse-dot-3"></div>
                </div>
                <div className="text-green-400">{loadingText}</div>
              </div>
            </div>
          ) : (
            <div className="terminal-content-wrapper flex flex-col h-full flex-grow">
              {/* Scrollable history area */}
              <div
                ref={terminalContentRef}
                className="flex-grow overflow-y-auto terminal-content px-4 pt-4"
              >
                <TerminalHistoryList
                  inputs={terminalHistory}
                  clearHistory={() =>
                    setTerminalHistory([PortfolioCommands.Initial])
                  }
                />
              </div>

              {/* Fixed input area */}
              <div className="px-4 py-2 border-t terminal-input-area">
                <TerminalPrompt
                  ref={terminalPromptRef}
                  addToTerminalHistory={addToTerminalHistory}
                />
              </div>
            </div>
          )}
        </div>

        <TerminalFooter />
      </div>
      <div className="fixed inset-0 -z-10 flex">
        <div className="w-1/6 bg-deep-teal"></div>
        <div className="w-1/6 bg-turquoise-teal"></div>
        <div className="w-1/6 bg-light-gray-blue"></div>
        <div className="w-1/6 bg-muted-magenta"></div>
        <div className="w-1/6 bg-dusty-brown"></div>
        <div className="w-1/6 bg-mustard-gold"></div>
      </div>
    </main>
  );
}
