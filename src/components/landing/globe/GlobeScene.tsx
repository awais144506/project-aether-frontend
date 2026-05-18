"use client";

import { useEffect, useRef } from "react";

interface Node {
  id: string;
  x: number; // percentage of width
  y: number; // percentage of height
  label: string;
}

interface Packet {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  color: string;
}

interface Ping {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export function GlobeScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Fixed node positions (normalized percentages to simulate a world network layout)
    const nodes: Node[] = [
      { id: "us-west", x: 0.2, y: 0.35, label: "SFO" },
      { id: "us-east", x: 0.35, y: 0.4, label: "IAD" },
      { id: "europe", x: 0.52, y: 0.3, label: "FRA" },
      { id: "asia-east", x: 0.78, y: 0.42, label: "NRT" },
      { id: "asia-south", x: 0.72, y: 0.58, label: "SIN" },
      { id: "australia", x: 0.85, y: 0.78, label: "SYD" },
      { id: "sa", x: 0.4, y: 0.75, label: "GRU" },
    ];

    const packets: Packet[] = [];
    const pings: Ping[] = [];

    // Scale canvas properly for high-DPI/Retina mobile screens
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Helper to pick random connection targets
    const spawnPacket = () => {
      if (packets.length > 8) return; // Cap maximum active packets for performance
      
      const startNode = nodes[Math.floor(Math.random() * nodes.length)];
      let endNode = nodes[Math.floor(Math.random() * nodes.length)];
      
      while (endNode.id === startNode.id) {
        endNode = nodes[Math.floor(Math.random() * nodes.length)];
      }

      // 85% chance of green (healthy ping), 15% chance of red (failed/high latency)
      const isHealthy = Math.random() > 0.15;
      const color = isHealthy ? "#22c55e" : "#ef4444"; 

      packets.push({
        startX: startNode.x,
        startY: startNode.y,
        endX: endNode.x,
        endY: endNode.y,
        progress: 0,
        speed: 0.006 + Math.random() * 0.008, // Random variable speeds
        color: color,
      });
    };

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Network Connections (Subtle Vercel Dark Lines)
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(39, 39, 42, 0.4)"; // zinc-800 accent
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
          ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
        }
      }
      ctx.stroke();

      // 2. Draw Network Nodes
      nodes.forEach((node) => {
        const nx = node.x * width;
        const ny = node.y * height;

        // Core node dot
        ctx.fillStyle = "#27272a"; // zinc-800
        ctx.beginPath();
        ctx.arc(nx, ny, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Node center pin
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(nx, ny, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Update & Draw Active Packets (Traveling Dots)
      packets.forEach((packet, index) => {
        packet.progress += packet.speed;

        // Linear interpolation for smooth trajectory
        const currentX = (packet.startX + (packet.endX - packet.startX) * packet.progress) * width;
        const currentY = (packet.startY + (packet.endY - packet.startY) * packet.progress) * height;

        // Packet Glow Tail
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fill();

        // Core White Traveling Packet
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(currentX, currentY, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Handle Packet Destination Arrival
        if (packet.progress >= 1) {
          pings.push({
            x: packet.endX * width,
            y: packet.endY * height,
            radius: 2,
            maxRadius: 24,
            alpha: 1,
            color: packet.color,
          });
          packets.splice(index, 1);
        }
      });

      // 4. Update & Draw Arrival Ping Wavefronts (Red/Green Status)
      pings.forEach((ping, index) => {
        ping.radius += 0.6;
        ping.alpha = 1 - (ping.radius / ping.maxRadius);

        if (ping.alpha <= 0) {
          pings.splice(index, 1);
          return;
        }

        ctx.strokeStyle = ping.color;
        ctx.globalAlpha = ping.alpha;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ping.x, ping.y, ping.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1.0; // Reset alpha template context
      });

      // Control dynamic spawning pace
      if (Math.random() < 0.03) {
        spawnPacket();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-transparent" aria-hidden>
      <canvas
        ref={canvasRef}
        className="h-full w-full max-w-5xl opacity-80"
        style={{ contentVisibility: "auto" }}
      />
    </div>
  );
}