"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NeuralBackgroundProps {
  className?: string;
  /**
   * Color of the particles. 
   * Defaults to a soft slate/ink mix if not specified.
   */
  color?: string;
  /**
   * The opacity of the trails (0.0 to 1.0).
   * Lower = longer trails. Higher = shorter trails.
   * Default: 0.1
   */
  trailOpacity?: number;
  /**
   * Number of particles. Default: 600
   */
  particleCount?: number;
  /**
   * Speed multiplier. Default: 1
   */
  speed?: number;
}

export default function NeuralBackground({
  className,
  color = "#8A8883", // Slate for Zen feeling
  trailOpacity = 0.05,
  particleCount = 700,
  speed = 0.4,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- CONFIGURATION ---
    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 }; // Start off-screen

    // --- PARTICLE CLASS ---
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      age: number;
      life: number;
      baseSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        // Random lifespan to create natural recycling
        this.life = Math.random() * 300 + 100; 
        this.baseSpeed = speed * (Math.random() * 0.5 + 0.5);
      }

      update() {
        // 1. Flow Field Math (Simplex-ish noise)
        // We calculate an angle based on position to create the "flow"
        const angle = (Math.cos(this.x * 0.003) + Math.sin(this.y * 0.003)) * Math.PI * 1.5;
        
        // 2. Add force from flow field
        this.vx += Math.cos(angle) * 0.15 * this.baseSpeed;
        this.vy += Math.sin(angle) * 0.15 * this.baseSpeed;

        // 3. Mouse Repulsion/Attraction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 200;

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          // Gentle push away for zen feel
          this.vx -= dx * force * 0.02;
          this.vy -= dy * force * 0.02;
        }

        // 4. Apply Velocity & Friction
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.96; // Friction to stop infinite acceleration
        this.vy *= 0.96;

        // 5. Aging
        this.age++;
        if (this.age > this.life) {
          this.reset();
        }

        // 6. Wrap around screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 300 + 100;
        this.baseSpeed = speed * (Math.random() * 0.5 + 0.5);
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = color;
        // Fade in and out based on age
        const alpha = (1 - Math.abs((this.age / this.life) - 0.5) * 2) * 0.7; // softer alpha for zen look
        context.globalAlpha = alpha;
        context.fillRect(this.x, this.y, 1.2, 1.2); // Tiny dots are faster than arcs
      }
    }

    // --- INITIALIZATION ---
    const init = () => {
      // Handle High-DPI screens (Retina)
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // --- ANIMATION LOOP ---
    const animate = () => {
      // "Fade" effect: Instead of clearing the canvas, we draw a semi-transparent rect
      // This creates the "Trails" look.
      // Zen sand background (Paper #F5F4F0 -> rgb 245, 244, 240)
      ctx.fillStyle = `rgba(245, 244, 240, ${trailOpacity})`; 
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // --- EVENT LISTENERS ---
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    // Start
    init();
    // Fill the canvas initially so it isn't black
    ctx.fillStyle = "#F5F4F0";
    ctx.fillRect(0, 0, width, height);
    
    animate();

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, trailOpacity, particleCount, speed]);

  return (
    <div ref={containerRef} className={cn("fixed inset-0 z-[-1] w-full h-full bg-paper overflow-hidden", className)}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
