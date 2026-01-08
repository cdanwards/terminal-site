"use client";

import React, { useRef, useEffect } from "react";

// Animation configuration - coordinates are percentages of image dimensions
const CONFIG = {
  // Wind turbine centers (x%, y%)
  turbines: [
    { x: 72, y: 12, size: 8 },  // Top right turbine
    { x: 78, y: 15, size: 7 },  // Second turbine
    { x: 18, y: 42, size: 5 },  // Left turbine
  ],
  // Water stream areas for shimmer
  streams: [
    { x: 40, y: 78, width: 25, height: 8 },
    { x: 55, y: 85, width: 20, height: 6 },
  ],
  // Cloud spawn area
  cloudArea: { y: 5, height: 35 },
  // Particle spawn area
  particleArea: { x: 20, y: 30, width: 60, height: 50 },
};

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: "leaf" | "pollen" | "firefly";
  wobble: number;
}

interface Bird {
  x: number;
  y: number;
  vx: number;
  wingPhase: number;
  size: number;
}

interface Drone {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  size: number;
}

const SolarpunkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);

  // Animation state refs
  const particlesRef = useRef<Particle[]>([]);
  const birdsRef = useRef<Bird[]>([]);
  const dronesRef = useRef<Drone[]>([]);
  const turbineAnglesRef = useRef<number[]>([0, 0, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load background image
    const img = new Image();
    img.src = "/solarpunk-bg.png";
    imageRef.current = img;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize floating particles
    const initParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < 40; i++) {
        const type = Math.random() > 0.7 ? "firefly" : Math.random() > 0.5 ? "leaf" : "pollen";
        particles.push({
          x: CONFIG.particleArea.x + Math.random() * CONFIG.particleArea.width,
          y: CONFIG.particleArea.y + Math.random() * CONFIG.particleArea.height,
          vx: (Math.random() - 0.5) * 0.1,
          vy: type === "leaf" ? 0.02 + Math.random() * 0.03 : (Math.random() - 0.5) * 0.05,
          size: type === "leaf" ? 2 + Math.random() * 2 : 1 + Math.random(),
          opacity: 0.3 + Math.random() * 0.5,
          type,
          wobble: Math.random() * Math.PI * 2,
        });
      }
      particlesRef.current = particles;
    };

    // Initialize birds
    const initBirds = () => {
      const birds: Bird[] = [];
      for (let i = 0; i < 5; i++) {
        birds.push({
          x: Math.random() * 100,
          y: 10 + Math.random() * 25,
          vx: 0.02 + Math.random() * 0.03,
          wingPhase: Math.random() * Math.PI * 2,
          size: 1 + Math.random() * 1.5,
        });
      }
      birdsRef.current = birds;
    };

    // Initialize drones
    const initDrones = () => {
      dronesRef.current = [
        { x: 30, y: 45, targetX: 35, targetY: 43, speed: 0.02, size: 2 },
        { x: 65, y: 55, targetX: 62, targetY: 58, speed: 0.015, size: 1.5 },
      ];
    };

    initParticles();
    initBirds();
    initDrones();

    // Animation loop
    const animate = () => {
      if (!imageRef.current?.complete) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const width = canvas.width;
      const height = canvas.height;
      timeRef.current += 0.016;

      // Clear and draw background image
      ctx.clearRect(0, 0, width, height);

      // Draw image to cover the canvas while maintaining aspect ratio
      const imgRatio = imageRef.current.width / imageRef.current.height;
      const canvasRatio = width / height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = width;
        drawHeight = width / imgRatio;
        offsetX = 0;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawHeight = height;
        drawWidth = height * imgRatio;
        offsetX = (width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(imageRef.current, offsetX, offsetY, drawWidth, drawHeight);

      // Helper to convert percentage to canvas coordinates
      const toX = (pct: number) => offsetX + (pct / 100) * drawWidth;
      const toY = (pct: number) => offsetY + (pct / 100) * drawHeight;
      const toSize = (pct: number) => (pct / 100) * Math.min(drawWidth, drawHeight);

      // Draw water shimmer on streams
      CONFIG.streams.forEach((stream) => {
        for (let i = 0; i < 8; i++) {
          const shimmerX = stream.x + Math.random() * stream.width;
          const shimmerY = stream.y + Math.random() * stream.height;
          ctx.globalAlpha = 0.2 + Math.sin(timeRef.current * 3 + i) * 0.15;
          ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
          ctx.fillRect(toX(shimmerX), toY(shimmerY), toSize(0.3), toSize(0.15));
        }
      });

      // Draw rotating turbine blades overlay
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 2;

      CONFIG.turbines.forEach((turbine, idx) => {
        turbineAnglesRef.current[idx] += 0.02 + idx * 0.005;
        const angle = turbineAnglesRef.current[idx];
        const cx = toX(turbine.x);
        const cy = toY(turbine.y);
        const radius = toSize(turbine.size * 0.4);

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        // Draw 3 blade lines
        for (let i = 0; i < 3; i++) {
          ctx.rotate((Math.PI * 2) / 3);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -radius);
          ctx.stroke();
        }
        ctx.restore();
      });

      // Draw floating particles
      particlesRef.current.forEach((p) => {
        p.wobble += 0.05;
        p.x += p.vx + Math.sin(p.wobble) * 0.02;
        p.y += p.vy;

        // Wrap around
        if (p.x < CONFIG.particleArea.x - 5) p.x = CONFIG.particleArea.x + CONFIG.particleArea.width;
        if (p.x > CONFIG.particleArea.x + CONFIG.particleArea.width + 5) p.x = CONFIG.particleArea.x;
        if (p.y > CONFIG.particleArea.y + CONFIG.particleArea.height + 5) {
          p.y = CONFIG.particleArea.y;
          p.x = CONFIG.particleArea.x + Math.random() * CONFIG.particleArea.width;
        }

        ctx.globalAlpha = p.opacity;

        if (p.type === "firefly") {
          // Glowing firefly
          const glow = 0.5 + Math.sin(timeRef.current * 5 + p.wobble) * 0.5;
          ctx.globalAlpha = p.opacity * glow;
          ctx.fillStyle = "#ffffaa";
          ctx.beginPath();
          ctx.arc(toX(p.x), toY(p.y), toSize(p.size * 0.15), 0, Math.PI * 2);
          ctx.fill();

          // Glow effect
          const glowGradient = ctx.createRadialGradient(
            toX(p.x), toY(p.y), 0,
            toX(p.x), toY(p.y), toSize(p.size * 0.5)
          );
          glowGradient.addColorStop(0, "rgba(255, 255, 150, 0.3)");
          glowGradient.addColorStop(1, "rgba(255, 255, 150, 0)");
          ctx.fillStyle = glowGradient;
          ctx.fillRect(
            toX(p.x) - toSize(p.size * 0.5),
            toY(p.y) - toSize(p.size * 0.5),
            toSize(p.size),
            toSize(p.size)
          );
        } else if (p.type === "leaf") {
          ctx.fillStyle = "#8bc34a";
          ctx.save();
          ctx.translate(toX(p.x), toY(p.y));
          ctx.rotate(Math.sin(p.wobble) * 0.5);
          ctx.fillRect(-toSize(p.size * 0.1), -toSize(p.size * 0.05), toSize(p.size * 0.2), toSize(p.size * 0.1));
          ctx.restore();
        } else {
          ctx.fillStyle = "#ffffee";
          ctx.beginPath();
          ctx.arc(toX(p.x), toY(p.y), toSize(p.size * 0.08), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw birds
      ctx.fillStyle = "#333";
      birdsRef.current.forEach((bird) => {
        bird.x += bird.vx;
        bird.wingPhase += 0.15;

        if (bird.x > 105) {
          bird.x = -5;
          bird.y = 10 + Math.random() * 25;
        }

        const wingOffset = Math.sin(bird.wingPhase) * toSize(bird.size * 0.3);
        ctx.globalAlpha = 0.6;

        // Simple bird shape (V)
        ctx.beginPath();
        ctx.moveTo(toX(bird.x) - toSize(bird.size * 0.3), toY(bird.y) - wingOffset);
        ctx.lineTo(toX(bird.x), toY(bird.y));
        ctx.lineTo(toX(bird.x) + toSize(bird.size * 0.3), toY(bird.y) - wingOffset);
        ctx.strokeStyle = "#444";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Draw drones with subtle hover
      dronesRef.current.forEach((drone) => {
        // Hover movement
        const hoverX = Math.sin(timeRef.current * 0.5) * 0.5;
        const hoverY = Math.cos(timeRef.current * 0.7) * 0.3;
        const dx = drone.x + hoverX;
        const dy = drone.y + hoverY;

        ctx.globalAlpha = 0.7;
        ctx.fillStyle = "#555";

        // Drone body
        ctx.fillRect(
          toX(dx) - toSize(drone.size * 0.15),
          toY(dy) - toSize(drone.size * 0.08),
          toSize(drone.size * 0.3),
          toSize(drone.size * 0.16)
        );

        // Propellers (spinning)
        ctx.strokeStyle = "#888";
        ctx.lineWidth = 1;
        const propAngle = timeRef.current * 20;
        [-1, 1].forEach((side) => {
          ctx.save();
          ctx.translate(toX(dx + side * drone.size * 0.2), toY(dy));
          ctx.rotate(propAngle);
          ctx.beginPath();
          ctx.moveTo(-toSize(drone.size * 0.1), 0);
          ctx.lineTo(toSize(drone.size * 0.1), 0);
          ctx.stroke();
          ctx.restore();
        });
      });

      // Subtle vignette overlay
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, height * 0.3,
        width / 2, height / 2, height * 0.9
      );
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.15)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationRef.current = requestAnimationFrame(animate);
    };

    img.onload = () => {
      animate();
    };

    // Start animation even before image loads (will skip drawing until ready)
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ imageRendering: "auto" }}
    />
  );
};

export default SolarpunkBackground;
