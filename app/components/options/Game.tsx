import React, { useState, useEffect } from "react";

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<
    "start" | "playing" | "won" | "lost"
  >("start");
  const [secretNumber, setSecretNumber] = useState<number>(0);
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(0);
  const maxAttempts = 5;

  useEffect(() => {
    if (gameState === "playing") {
      setSecretNumber(Math.floor(Math.random() * 100) + 1);
      setAttempts(0);
      setMessage(
        `I'm thinking of a number between 1 and 100. You have ${maxAttempts} attempts.`
      );
    }
  }, [gameState]);

  const startGame = () => {
    setGameState("playing");
  };

  const handleGuess = () => {
    const guessNumber = parseInt(guess);

    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      setMessage("Please enter a valid number between 1 and 100.");
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (guessNumber === secretNumber) {
      setMessage(
        `Congratulations! You guessed the number in ${newAttempts} attempts.`
      );
      setGameState("won");
    } else if (newAttempts >= maxAttempts) {
      setMessage(`Game over! The number was ${secretNumber}.`);
      setGameState("lost");
    } else {
      const hint = guessNumber < secretNumber ? "higher" : "lower";
      setMessage(
        `Try a ${hint} number. You have ${
          maxAttempts - newAttempts
        } attempts left.`
      );
    }

    setGuess("");
  };

  const resetGame = () => {
    setGameState("start");
    setGuess("");
    setMessage("");
  };

  return (
    <div
      className="p-4 rounded-md output-text"
      style={{ backgroundColor: "var(--code-bg)" }}
    >
      <h2
        className="text-xl font-bold mb-4"
        style={{ color: "var(--terminal-green)" }}
      >
        Number Guessing Game
      </h2>

      {gameState === "start" && (
        <div>
          <p className="mb-4">Try to guess a number between 1 and 100.</p>
          <button
            onClick={startGame}
            className="px-4 py-2 text-white rounded-md hover:bg-green-700 transition-colors"
            style={{ backgroundColor: "var(--terminal-green)" }}
          >
            Start Game
          </button>
        </div>
      )}

      {gameState === "playing" && (
        <div>
          <p className="mb-4">{message}</p>
          <div className="flex">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              min="1"
              max="100"
              className="px-3 py-2 border rounded-l-md focus:outline-none ring-terminal-green focus:ring-2 command-text game-input"
              style={{
                backgroundColor: "var(--terminal-bg)",
                borderColor: "var(--terminal-border)",
              }}
              placeholder="Enter your guess"
            />
            <button
              onClick={handleGuess}
              className="px-4 py-2 text-white rounded-r-md transition-colors"
              style={{ backgroundColor: "var(--terminal-blue)" }}
            >
              Guess
            </button>
          </div>
        </div>
      )}

      {(gameState === "won" || gameState === "lost") && (
        <div>
          <p className="mb-4">{message}</p>
          <button
            onClick={resetGame}
            className="px-4 py-2 text-white rounded-md transition-colors"
            style={{ backgroundColor: "var(--terminal-green)" }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
