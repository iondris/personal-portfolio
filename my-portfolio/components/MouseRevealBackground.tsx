"use client";

import { useEffect, useState } from "react";

export default function MouseRevealBackground() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">

      {/* 🔥 ARKA GÖRSEL */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/bg-tech.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 🖤 KARARTMA + MOUSE MASK */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          maskImage: `radial-gradient(
            550px at ${pos.x}px ${pos.y}px,
            transparent,
            black
          )`,
          WebkitMaskImage: `radial-gradient(
            550px at ${pos.x}px ${pos.y}px,
            transparent,
            black
          )`,
        }}
      />

    </div>
  );
}   