'use client';

import { useEffect, useRef } from 'react';

export default function SpiderField({ spiderCount = 1, className = '' }) {
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

    // background stars
    const STAR_COUNT = 220;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 1.5,
      lit: 0,
    }));

    // pointer tracking
    const pointer = { x: width / 2, y: height / 2 };
    function onPointerMove(e) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    }
    function onTouchMove(e) {
      if (e.touches[0]) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
      }
    }
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    function nearestStar(px, py, maxDist) {
      let best = null;
      let bestDist = maxDist;
      for (const s of stars) {
        const d = Math.hypot(s.x - px, s.y - py);
        if (d < bestDist) {
          bestDist = d;
          best = s;
        }
      }
      return best;
    }

    // spiders
    const LEG_COUNT = 7;
    const REACH = 46;
    const SNAP_RADIUS = 60;
    const LEAN_STRENGTH = 0.35; // how far the body tilts toward the mouse (0 = none, 1 = full)

    const spiders = Array.from({ length: spiderCount }, (_, i) => ({
      x: width / 2,
      y: height / 2,
      lag: 0.05 + i * 0.025,
      offsetX: (Math.random() - 0.5) * 140,
      offsetY: (Math.random() - 0.5) * 140,
      seed: Math.random() * 1000,
      angle: 0, // smoothed facing direction
      legs: Array.from({ length: LEG_COUNT }, () => ({ endX: 0, endY: 0 })),
      particles: Array.from({ length: 36 }, () => ({
        a: Math.random() * Math.PI * 2,
        d: Math.random() * 55 + 12,
        speed: Math.random() * 0.5 + 0.2,
        r: Math.random() * 1.3 + 0.3,
      })),
    }));

    let raf;
    function tick(t) {
      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.7
      );
      grad.addColorStop(0, '#0a0a16');
      grad.addColorStop(1, '#000000');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (const s of stars) {
        s.lit *= 0.92;
        const twinkle = 0.35 + 0.65 * Math.abs(Math.sin(t * 0.001 * s.speed + s.phase));
        const brightness = Math.min(1, twinkle + s.lit);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${brightness})`;
        ctx.arc(s.x, s.y, s.r + s.lit * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const sp of spiders) {
        const targetX = pointer.x + sp.offsetX;
        const targetY = pointer.y + sp.offsetY;

        // direction from the mouse to the spider — used for the lean
        const dx = pointer.x - sp.x;
        const dy = pointer.y - sp.y;
        const desiredAngle = Math.atan2(dy, dx);

        // shortest-path angle smoothing so it doesn't spin the long way round
        let diff = desiredAngle - sp.angle;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        sp.angle += diff * 0.08;

        sp.x += (targetX - sp.x) * sp.lag;
        sp.y += (targetY - sp.y) * sp.lag;

        ctx.save();
        ctx.translate(sp.x, sp.y);
        ctx.rotate(sp.angle * LEAN_STRENGTH);
        ctx.shadowBlur = 18;
        ctx.shadowColor = '#ffffff';
        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.fillStyle = '#ffffff';
        ctx.lineWidth = 1.4;

        for (let i = 0; i < LEG_COUNT; i++) {
          const leg = sp.legs[i];
          const baseAngle = (i / LEG_COUNT) * Math.PI * 2;
          const wiggle = Math.sin(t * 0.002 + sp.seed + i) * 0.35;
          const angle = baseAngle + wiggle;

          const freeX = Math.cos(angle) * REACH;
          const freeY = Math.sin(angle) * REACH;

          // leg targets are found in world space, so we un-rotate the reach point first
          const cosA = Math.cos(sp.angle * LEAN_STRENGTH);
          const sinA = Math.sin(sp.angle * LEAN_STRENGTH);
          const worldReachX = sp.x + (freeX * cosA - freeY * sinA);
          const worldReachY = sp.y + (freeX * sinA + freeY * cosA);

          const star = nearestStar(worldReachX, worldReachY, SNAP_RADIUS);

          let targetX, targetY;
          if (star) {
            // convert the star's world position back into this rotated local frame
            const wx = star.x - sp.x;
            const wy = star.y - sp.y;
            targetX = wx * cosA + wy * sinA;
            targetY = -wx * sinA + wy * cosA;
            star.lit = 1;
          } else {
            targetX = freeX;
            targetY = freeY;
          }

          leg.endX += (targetX - leg.endX) * 0.15;
          leg.endY += (targetY - leg.endY) * 0.15;

          const dist = Math.hypot(leg.endX, leg.endY) || 1;
          const nx = -leg.endY / dist;
          const ny = leg.endX / dist;
          const bend = Math.sin(t * 0.002 + sp.seed + i) * 6;
          const midX = leg.endX * 0.55 + nx * bend;
          const midY = leg.endY * 0.55 + ny * bend;

          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(midX, midY);
          ctx.lineTo(leg.endX, leg.endY);
          ctx.stroke();
        }

        // core, stretched slightly forward in its facing direction
        ctx.beginPath();
        ctx.ellipse(0, 0, 5.5, 3.5, 0, 0, Math.PI * 2);
        ctx.fill();

        for (const p of sp.particles) {
          const d = p.d + Math.sin(t * 0.001 * p.speed + p.a) * 8;
          const px = Math.cos(p.a + t * 0.0003) * d;
          const py = Math.sin(p.a + t * 0.0003) * d;
          ctx.globalAlpha = 0.5;
          ctx.beginPath();
          ctx.arc(px, py, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        ctx.restore();
      }

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [spiderCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 h-screen w-screen touch-none bg-black ${className}`}
    />
  );
}