"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
  layer: number;
  pulsePhase: number;
}

interface Pulse {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
}

export default function HeroNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    const mouse = { x: -1000, y: -1000, radius: 120 };

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Create layered nodes representing neural architecture
    const layers = 5;
    const nodes: Node[] = [];
    const pulses: Pulse[] = [];

    const initNodes = () => {
      nodes.length = 0;
      pulses.length = 0;
      const nodesPerLayer = [3, 5, 6, 5, 3];

      for (let l = 0; l < layers; l++) {
        const count = nodesPerLayer[l];
        const layerX = (width * (l + 1)) / (layers + 1);

        for (let i = 0; i < count; i++) {
          const layerY = (height * (i + 1)) / (count + 1);
          const jitterX = (Math.random() - 0.5) * 20;
          const jitterY = (Math.random() - 0.5) * 20;

          nodes.push({
            x: layerX + jitterX,
            y: layerY + jitterY,
            baseX: layerX,
            baseY: layerY,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: l === 2 ? 3.5 : 2.5,
            layer: l,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }

      // Generate initial connection pulses
      for (let i = 0; i < 8; i++) {
        spawnPulse();
      }
    };

    const spawnPulse = () => {
      if (nodes.length === 0) return;
      const validSources = nodes
        .map((n, idx) => ({ n, idx }))
        .filter((item) => item.n.layer < layers - 1);
      if (validSources.length === 0) return;

      const source = validSources[Math.floor(Math.random() * validSources.length)];
      const targetCandidates = nodes
        .map((n, idx) => ({ n, idx }))
        .filter((item) => item.n.layer === source.n.layer + 1);

      if (targetCandidates.length > 0) {
        const target = targetCandidates[Math.floor(Math.random() * targetCandidates.length)];
        pulses.push({
          sourceIndex: source.idx,
          targetIndex: target.idx,
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
        });
      }
    };

    initNodes();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Visibility observer to pause animation when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const isDarkMode = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, width, height);

      // Node movement & mouse repulsion
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Soft boundary attraction back to base
        node.vx += (node.baseX - node.x) * 0.002;
        node.vy += (node.baseY - node.y) * 0.002;

        // Friction
        node.vx *= 0.98;
        node.vy *= 0.98;

        // Mouse interaction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.vx -= (dx / dist) * force * 0.8;
          node.vy -= (dy / dist) * force * 0.8;
        }

        node.pulsePhase += 0.03;
      });

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          // Connect adjacent layers or nearby intra-layer nodes
          if (n2.layer === n1.layer + 1 || (n1.layer === n2.layer && Math.abs(n1.y - n2.y) < 70)) {
            const dx = n2.x - n1.x;
            const dy = n2.y - n1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 180) {
              const alpha = Math.max(0.04, (1 - dist / 180) * (isDarkMode ? 0.22 : 0.15));
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = isDarkMode
                ? `rgba(34, 211, 238, ${alpha})`
                : `rgba(6, 182, 212, ${alpha * 0.8})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      // Draw pulses traveling on edges
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          if (Math.random() > 0.3) spawnPulse();
          continue;
        }

        const source = nodes[pulse.sourceIndex];
        const target = nodes[pulse.targetIndex];
        if (source && target) {
          const px = source.x + (target.x - source.x) * pulse.progress;
          const py = source.y + (target.y - source.y) * pulse.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = isDarkMode ? "rgba(129, 140, 248, 0.9)" : "rgba(79, 70, 229, 0.85)";
          ctx.shadowColor = isDarkMode ? "rgba(34, 211, 238, 0.8)" : "rgba(6, 182, 212, 0.6)";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      if (pulses.length < 5 && Math.random() < 0.05) {
        spawnPulse();
      }

      // Draw nodes
      nodes.forEach((node) => {
        const pulseScale = 1 + Math.sin(node.pulsePhase) * 0.15;
        const currentRadius = node.radius * pulseScale;

        // Node glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius + 2, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode ? "rgba(34, 211, 238, 0.15)" : "rgba(6, 182, 212, 0.12)";
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode ? "#22d3ee" : "#0891b2";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[460px] flex items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-[#0b0d14]/70 dark:bg-[#0b0d14]/70 shadow-2xl backdrop-blur-md">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
        style={{ display: "block" }}
        aria-label="Interactive AI neural network and vector retrieval pipeline visualization"
      />

      {/* Subtle overlay badges describing pipeline stages */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none text-[10px] font-mono text-slate-400 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Embedding Vector Space
        </span>
        <span className="hidden sm:inline">Similarity Top-K Search</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          LLM Token Generation
        </span>
      </div>
    </div>
  );
}
