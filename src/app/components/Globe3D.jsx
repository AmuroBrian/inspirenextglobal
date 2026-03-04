"use client";
import React from "react";

export default function Globe3D({ texture = "day" }) {
  const textureUrl =
    texture === "night"
      ? "/textures/earth-night.png"
      : "/textures/earth-day.jpg";

  return (
    <div
      className="relative w-full max-w-[420px] aspect-square"
      style={{ perspective: "900px" }}
      aria-hidden="true"
    >
      <div className="absolute -inset-8 rounded-full bg-sky-400/25 blur-3xl" />

      <div className="absolute inset-0 rounded-full shadow-2xl overflow-hidden">
        <div
          className="globeSurface absolute inset-0 rounded-full"
          style={{ backgroundImage: `url(${textureUrl})` }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 28% 25%, rgba(255,255,255,0.35), transparent 55%), radial-gradient(circle at 70% 78%, rgba(0,0,0,0.45), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, transparent 55%, rgba(0,0,0,0.5) 95%)",
        }}
      />

      <style jsx>{`
        .globeSurface {
          background-repeat: repeat-x;
          background-size: 200% 100%;
          background-position: 0% 50%;
          animation: globeTexture 18s linear infinite;
          filter: saturate(1.05) contrast(1.05);
        }

        @keyframes globeTexture {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </div>
  );
}

