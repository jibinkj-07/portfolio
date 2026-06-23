"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
};

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number | null>(null);

  const createStars = (width: number, height: number) => {
    const stars: Star[] = [];
    const count = Math.floor((width * height) / 2000); // density control

    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.35 + 0.05,
      });
    }

    starsRef.current = stars;
  };

  const draw = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) => {
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#60a5fa";

    for (const star of starsRef.current) {
      // slight twinkle
      star.alpha += (Math.random() - 0.5) * 0.02;
      star.alpha = Math.max(0.2, Math.min(1, star.alpha));

      // optional drift
      star.y -= star.speed;
      if (star.y < 0) star.y = height;

      ctx.globalAlpha = star.alpha;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight / 2; // 🔥 half screen

      canvas.width = width;
      canvas.height = height;

      createStars(width, height);
    };

    const animate = () => {
      draw(ctx, canvas.width, canvas.height);
      rafRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={"absolute top-0 left-0 w-full h-1/2 bg-transparent -z-10"}
    />
  );
}
