"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./surprise.module.scss";

// ============ CONFETTI EFFECT ============
const ConfettiEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#95e1d3", "#f38181", "#aa96da", "#fcbad3"];
    const confetti: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      rotation: number;
      rotationSpeed: number;
      shape: "rect" | "circle";
    }> = [];

    // Create confetti pieces
    for (let i = 0; i < 150; i++) {
      confetti.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 100,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 15,
        vy: -Math.random() * 20 - 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        shape: Math.random() > 0.5 ? "rect" : "circle",
      });
    }

    let animationId: number;
    const gravity = 0.3;
    const friction = 0.99;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach((p) => {
        p.vy += gravity;
        p.vx *= friction;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative h-40 overflow-hidden rounded bg-black/20">
      <canvas ref={canvasRef} className="w-full h-full" />
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm opacity-70">
        Confetti cannon! 🎉
      </p>
    </div>
  );
};

// ============ PARTY MODE ============
const PartyModeEffect: React.FC = () => {
  const emojis = ["🎉", "🎊", "🪩", "✨", "🎈", "🎁", "🥳", "💃", "🕺", "🌟"];
  const [floatingEmojis] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }))
  );

  return (
    <div className={`${styles.partyMode} relative h-40 overflow-hidden rounded`}>
      <div className={styles.rainbowBg} />
      <div className={styles.discoBall}>🪩</div>
      {floatingEmojis.map((e) => (
        <span
          key={e.id}
          className={styles.floatingEmoji}
          style={{
            left: `${e.left}%`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
          }}
        >
          {e.emoji}
        </span>
      ))}
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-bold text-white drop-shadow-lg z-10">
        Party Mode Activated! 🪩
      </p>
    </div>
  );
};

// ============ SLOT MACHINE ============
const SLOT_SYMBOLS = ["🍒", "🍋", "🍊", "🍇", "⭐", "💎", "7️⃣", "🎰"];

const SlotMachineEffect: React.FC = () => {
  const [spinning, setSpinning] = useState(true);
  const [results, setResults] = useState(["❓", "❓", "❓"]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const spinInterval = setInterval(() => {
      setResults([
        SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
        SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
        SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
      ]);
    }, 100);

    const stopTimeout = setTimeout(() => {
      clearInterval(spinInterval);
      setSpinning(false);
      const final = [
        SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
        SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
        SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
      ];
      setResults(final);

      if (final[0] === final[1] && final[1] === final[2]) {
        setMessage("JACKPOT! You're a winner! 🎉");
      } else if (final[0] === final[1] || final[1] === final[2] || final[0] === final[2]) {
        setMessage("Two of a kind! Nice! 🎲");
      } else {
        setMessage("Better luck next time! 🍀");
      }
    }, 2000);

    return () => {
      clearInterval(spinInterval);
      clearTimeout(stopTimeout);
    };
  }, []);

  return (
    <div className="relative h-40 flex flex-col items-center justify-center rounded bg-gradient-to-b from-purple-900 to-purple-700">
      <div className="text-xs mb-2 text-yellow-300">🎰 LUCKY TERMINAL 🎰</div>
      <div className="flex gap-2 bg-black/30 p-4 rounded-lg border-2 border-yellow-500">
        {results.map((symbol, i) => (
          <div
            key={i}
            className={`text-4xl w-12 h-12 flex items-center justify-center bg-white rounded ${spinning ? styles.slotSpin : ""}`}
          >
            {symbol}
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-yellow-200">{spinning ? "Spinning..." : message}</p>
    </div>
  );
};

// ============ GLITCH EFFECT ============
const GlitchEffect: React.FC = () => {
  const glitchTexts = [
    "SYSTEM OVERRIDE",
    "ACCESS GRANTED",
    "WELCOME HACKER",
    "MATRIX LOADED",
    "REALITY.EXE",
  ];
  const [text] = useState(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);

  return (
    <div className={`${styles.glitchContainer} relative h-40 flex items-center justify-center rounded bg-black overflow-hidden`}>
      <div className={styles.scanlines} />
      <div className={styles.glitchText} data-text={text}>
        {text}
      </div>
      <div className={styles.glitchOverlay} />
    </div>
  );
};

// ============ RETRO GAME (PAC-MAN GHOST) ============
const RetroGameEffect: React.FC = () => {
  const [position, setPosition] = useState(-50);
  const characters = [
    { emoji: "👻", name: "Ghost", color: "#ff0000" },
    { emoji: "🛸", name: "UFO", color: "#00ff00" },
    { emoji: "🚀", name: "Rocket", color: "#00ffff" },
    { emoji: "🎮", name: "Game", color: "#ff00ff" },
  ];
  const [character] = useState(characters[Math.floor(Math.random() * characters.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev > 110) return -10;
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-40 flex items-center overflow-hidden rounded bg-gray-900">
      <div className="absolute inset-0 flex items-center">
        {/* Dots */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-yellow-400 mx-3"
            style={{ opacity: position > (i * 5) ? 0.2 : 1 }}
          />
        ))}
      </div>
      <div
        className="absolute text-5xl transition-none"
        style={{
          left: `${position}%`,
          filter: `drop-shadow(0 0 10px ${character.color})`,
        }}
      >
        {character.emoji}
      </div>
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-400">
        {character.name} crossing... 🕹️
      </p>
    </div>
  );
};

// ============ MAGIC 8-BALL ============
const FORTUNES = [
  "It is certain.",
  "Without a doubt.",
  "You may rely on it.",
  "Yes, definitely.",
  "As I see it, yes.",
  "Most likely.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Cannot predict now.",
  "Don't count on it.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
  "The code will compile.",
  "Bugs in your future.",
  "Deploy on Friday? No.",
  "git push --force it.",
];

const Magic8BallEffect: React.FC = () => {
  const [shaking, setShaking] = useState(true);
  const [fortune, setFortune] = useState("...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShaking(false);
      setFortune(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-40 flex flex-col items-center justify-center rounded bg-gradient-to-b from-indigo-900 to-black">
      <div className={`${styles.magic8Ball} ${shaking ? styles.shaking : ""}`}>
        <div className={styles.ball8Window}>
          <span className={styles.ball8Text}>{shaking ? "🎱" : fortune}</span>
        </div>
      </div>
      <p className="mt-2 text-xs text-indigo-300">
        {shaking ? "Consulting the spirits..." : "The 8-ball has spoken!"}
      </p>
    </div>
  );
};

// ============ FIREWORKS (ORIGINAL) ============
const FireworksEffect: React.FC = () => {
  return (
    <div className="relative h-40 overflow-hidden rounded bg-gray-900">
      <div className={styles.pyro}>
        <div className={styles.before}></div>
        <div className={styles.after}></div>
      </div>
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-gray-300">
        Fireworks! 🎆
      </p>
    </div>
  );
};

// ============ MAIN SURPRISE COMPONENT ============
const EFFECTS = [
  { name: "Confetti Cannon", component: ConfettiEffect },
  { name: "Party Mode", component: PartyModeEffect },
  { name: "Slot Machine", component: SlotMachineEffect },
  { name: "Glitch Effect", component: GlitchEffect },
  { name: "Retro Game", component: RetroGameEffect },
  { name: "Magic 8-Ball", component: Magic8BallEffect },
  { name: "Fireworks", component: FireworksEffect },
];

const Surprise: React.FC = () => {
  const [isActive, setIsActive] = useState(true);
  const selectedEffect = useMemo(
    () => EFFECTS[Math.floor(Math.random() * EFFECTS.length)],
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!isActive) {
    return (
      <div className="text-center py-4">
        <p className="text-sm opacity-70">
          That was: <span className="font-bold">{selectedEffect.name}</span>
        </p>
        <p className="text-xs opacity-50 mt-1">
          Run surprise again for a different effect! ({EFFECTS.length} total)
        </p>
      </div>
    );
  }

  const EffectComponent = selectedEffect.component;
  return <EffectComponent />;
};

export default Surprise;
