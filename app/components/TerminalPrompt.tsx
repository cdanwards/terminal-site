import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { PortfolioCommands } from "../helpers/Commands";

type TerminalPromptProps = {
  addToTerminalHistory: (line: string) => void;
};

export type TerminalPromptHandle = {
  focusInput: () => void;
};

const TerminalPrompt = forwardRef<TerminalPromptHandle, TerminalPromptProps>(
  ({ addToTerminalHistory }, ref) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Expose the focusInput method to parent components
    useImperativeHandle(ref, () => ({
      focusInput: () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
    }));

    // Get all available commands from the enum
    const availableCommands = Object.values(PortfolioCommands).filter(
      (cmd) => cmd !== "initial"
    );
    // Add 'clear' command
    const allCommands = [...availableCommands, "clear"];

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    const updateSuggestions = (value: string) => {
      if (value.trim() === "") {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      const filtered = allCommands.filter((cmd) =>
        cmd.startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        if (inputValue.trim()) {
          addToTerminalHistory(inputValue);
          // Add to history only if not duplicate of last command
          if (commandHistory.length === 0 || commandHistory[0] !== inputValue) {
            setCommandHistory([inputValue, ...commandHistory].slice(0, 10));
          }
          setInputValue("");
          setHistoryIndex(-1);
          setShowSuggestions(false);
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        if (suggestions.length > 0) {
          setInputValue(suggestions[0]);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
          setShowSuggestions(false);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);
          setInputValue("");
        }
        setShowSuggestions(false);
      } else if (e.key === "Escape") {
        setShowSuggestions(false);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      updateSuggestions(value);
    };

    return (
      <div className="relative">
        <div className="flex items-center">
          <span className="prompt-sign mr-2">$</span>
          <div className="relative flex-grow">
            <div className="flex items-center bg-transparent w-full command-text px-2 py-1 relative">
              <input
                ref={inputRef}
                className="bg-transparent w-full command-text focus:outline-none focus:ring-4 focus:ring-turquoise-teal focus:ring-opacity-50 caret-transparent pl-0"
                type="text"
                placeholder=""
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                autoFocus
                style={{ paddingRight: "4px" }}
              />
              <div
                className="absolute inline-flex items-center pointer-events-none"
                style={{
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <span className="opacity-0">{inputValue}</span>
                {suggestions.length > 0 && inputValue ? (
                  <span className="autocomplete-suggestion">
                    {suggestions[0].slice(inputValue.length)}
                  </span>
                ) : inputValue === "" ? (
                  <span className="opacity-50">Enter command...</span>
                ) : null}
                <span
                  className="h-4 w-2 ml-0.5 animate-blink"
                  style={{
                    backgroundColor: "var(--terminal-green)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

TerminalPrompt.displayName = "TerminalPrompt";

export default TerminalPrompt;
