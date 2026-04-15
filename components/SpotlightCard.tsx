"use client";

import { useState } from "react";

export default function SpotlightCard({ children }: any) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      className="relative rounded-2xl overflow-hidden"
    >
      {/* SPOTLIGHT */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(
            300px circle at ${pos.x}px ${pos.y}px,
            rgba(168,85,247,0.25),
            transparent 70%
          )`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}