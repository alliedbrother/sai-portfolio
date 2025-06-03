"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: false }, resize: true },
          },
          particles: {
            color: { value: "#60a5fa" },
            links: { enable: true, color: "#60a5fa", distance: 100, opacity: 0.5 },
            move: { enable: true, speed: 0.7 },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: 3 },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
} 