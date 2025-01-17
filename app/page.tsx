"use client";

import Image from "next/image";
import TerminalPrompt from "./components/TerminalPrompt";
import { useState } from "react";
import TerminalHistoryList from "./components/TerminalHistoryList";

export default function Home() {
  const [terminalHistory, setTerminalHistory] = useState<string[]>(["initial"]);

  const addToTerminalHistory = (line: string) => {
    setTerminalHistory((prevHistory) => [...prevHistory, line]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex-col justify-between font-mono text-sm lg:flex">
        <TerminalHistoryList inputs={terminalHistory} />
        <TerminalPrompt addToTerminalHistory={addToTerminalHistory} />
      </div>
    </main>
  );
}
