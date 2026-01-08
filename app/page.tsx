"use client";

import TerminalPrompt from "./components/TerminalPrompt";
import TerminalHeader from "./components/TerminalHeader";
import TerminalFooter from "./components/TerminalFooter";
import { useState, useEffect, useRef, useCallback } from "react";
import TerminalHistoryList from "./components/TerminalHistoryList";
import { PortfolioCommands } from "./helpers/Commands";
import { useTerminalLoading } from "./hooks/useTerminalLoading";
import { useTheme } from "./hooks/useTheme";
import { useAutoScroll } from "./hooks/useAutoScroll";
import { useUrlCommand } from "./hooks/useUrlCommand";
import { useKonamiCode } from "./hooks/useKonamiCode";
import CommandChips from "./components/CommandChips";
import SolarpunkBackground from "./components/SolarpunkBackground";

export default function Home() {
  const [terminalHistory, setTerminalHistory] = useState<string[]>(["initial"]);
  const [lastInputTime, setLastInputTime] = useState<number>(Date.now());
  const terminalPromptRef = useRef<{ focusInput: () => void } | null>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  // Custom hooks
  const { isLoading, loadingText } = useTerminalLoading();
  useTheme();
  useAutoScroll(terminalContentRef, [terminalHistory, isLoading]);

  const addToTerminalHistory = useCallback((line: string) => {
    setTerminalHistory((prev) => [...prev, line]);
    setLastInputTime(Date.now());
  }, []);

  // Handle URL command parameter (e.g., ?cmd=about)
  useUrlCommand(addToTerminalHistory, isLoading);

  // Konami code easter egg - triggers matrix effect
  useKonamiCode(
    useCallback(() => {
      addToTerminalHistory("matrix");
    }, [addToTerminalHistory])
  );

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
                  <div className="h-2 w-2 bg-turquoise-teal rounded-full pulse-dot"></div>
                  <div className="h-2 w-2 bg-turquoise-teal rounded-full pulse-dot pulse-dot-2"></div>
                  <div className="h-2 w-2 bg-turquoise-teal rounded-full pulse-dot pulse-dot-3"></div>
                </div>
                <div className="text-turquoise-teal">{loadingText}</div>
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
                {/* Mobile command chips */}
                <CommandChips onCommand={addToTerminalHistory} />
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
      <SolarpunkBackground />
    </main>
  );
}
