'use client';

import { useEffect, useRef } from 'react';

export default function StarField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // stars
    const STAR_COUNT = 800;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 1.5,
    }));

    // pointer tracking
    const pointer = { x: -9999, y: -9999 }; // off-screen until first move
    function onPointerMove(e) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    }
    function onPointerLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }
    function onTouchMove(e) {
      if (e.touches[0]) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
      }
    }
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    const GLOW_RADIUS = 160; // how far the light-up effect reaches from the cursor

    let raf;
    function tick(t) {
      ctx.clearRect(0, 0, width, height);

      // background wash
      const grad = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.7
      );
      grad.addColorStop(0, '#0a0a16');
      grad.addColorStop(1, '#000000');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (const s of stars) {
        // base twinkle
        const twinkle = 0.35 + 0.65 * Math.abs(Math.sin(t * 0.001 * s.speed + s.phase));

        // proximity boost: 1 right under the cursor, fading to 0 at GLOW_RADIUS
        const dist = Math.hypot(s.x - pointer.x, s.y - pointer.y);
        const proximity = Math.max(0, 1 - dist / GLOW_RADIUS);

        const brightness = Math.min(1, twinkle + proximity * 1.2);
        const size = s.r + proximity * 2.5;

        ctx.beginPath();
        if (proximity > 0.05) {
          ctx.shadowBlur = proximity * 12;
          ctx.shadowColor = '#ffffff';
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fillStyle = `rgba(255,255,255,${brightness})`;
        ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 h-screen w-screen touch-none bg-black ${className}`}
    />
  );
}