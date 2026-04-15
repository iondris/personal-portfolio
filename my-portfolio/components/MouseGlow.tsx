"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1]">
      
      {/* KARANLIK KATMAN */}
      <div className="absolute inset-0 bg-black" />

      {/* RENKLİ ARKA PLAN */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(168,85,247,0.4), transparent 40%),
            radial-gradient(circle at 70% 70%, rgba(59,130,246,0.4), transparent 40%)
          `,
          
          maskImage: `radial-gradient(
            250px at ${position.x}px ${position.y}px,
            white,
            transparent
          )`,
          WebkitMaskImage: `radial-gradient(
            250px at ${position.x}px ${position.y}px,
            white,
            transparent
          )`,
        }}
      />

    </div>
  );
}