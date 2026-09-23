"use client";

import { useEffect, useRef, useState } from "react";

const SPRITE_SIZE = 32;
const SPRITE_SCALE = 2;
const CONSTANT_SPEED = 2;

const animations = {
  sit: { row: 31, frames: 3, speed: 100 },
  
  // Cardinal Directions
  runRight: { row: 6, frames: 8, speed: 100 },
  runLeft:  { row: 7, frames: 8, speed: 100 },
  runUp:    { row: 5, frames: 4, speed: 100 },
  runDown:  { row: 4, frames: 4, speed: 100 },

  // Diagonal Directions
  runUpRight:   { row: 10, frames: 6, speed: 100 },
  runUpLeft:    { row: 11, frames: 6, speed: 100 },
  runDownRight: { row: 9, frames: 6, speed: 100 },
  runDownLeft:  { row: 8, frames: 6, speed: 100 },
};

export default function MouseSprite() {
  // Toggle state to enable or disable the cat entirely
  const [isEnabled, setIsEnabled] = useState(true);

  const spriteRef = useRef(null);
  
  // Set both starting coordinates to 0 so it stays put at top-left on refresh
  const mouse = useRef({ x: 50, y: 50 });
  const position = useRef({ x: 50, y: 50 });
  
  const currentAnimation = useRef("sit");
  const frame = useRef(0);

  /*
   * ==========================
   * TRACK MOUSE
   * ==========================
   */
  useEffect(() => {
    if (!isEnabled) return; // Don't bind listeners if disabled

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isEnabled]);

  /*
   * ==========================
   * MOVE TOWARD MOUSE
   * ==========================
   */
  useEffect(() => {
    if (!isEnabled) return; // Stop physical physics tracking when disabled

    let animationFrame;

    const move = () => {
      const dx = mouse.current.x - position.current.x;
      const dy = mouse.current.y - position.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let newAnimation;

      if (distance > CONSTANT_SPEED) {
        position.current.x += (dx / distance) * CONSTANT_SPEED;
        position.current.y += (dy / distance) * CONSTANT_SPEED;

        const angle = Math.atan2(dy, dx);
        let degrees = angle * (180 / Math.PI);
        if (degrees < 0) degrees += 360;

        const zone = Math.floor(((degrees + 22.5) % 360) / 45);

        const directions = [
          "runRight", "runDownRight", "runDown", "runDownLeft",
          "runLeft", "runUpLeft", "runUp", "runUpRight"
        ];

        newAnimation = directions[zone];
      } else {
        position.current.x = mouse.current.x;
        position.current.y = mouse.current.y;
        newAnimation = "sit";
      }

      if (newAnimation !== currentAnimation.current) {
        currentAnimation.current = newAnimation;
        frame.current = 0;

        const animation = animations[newAnimation];
        if (spriteRef.current) {
          spriteRef.current.style.backgroundPosition = `
            0px
            -${animation.row * SPRITE_SIZE}px
          `;
        }
      }

      if (spriteRef.current) {
        const offset = (SPRITE_SIZE * SPRITE_SCALE) / 2;
        const drawX = position.current.x - offset;
        const drawY = position.current.y - offset;

        spriteRef.current.style.transform = `
          translate3d(${drawX}px, ${drawY}px, 0)
          scale(${SPRITE_SCALE})
        `;
      }

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [isEnabled]);

  /*
   * ==========================
   * ANIMATE FRAMES
   * ==========================
   */
  useEffect(() => {
    if (!isEnabled) return; // Stop frame iteration changes if disabled

    const interval = setInterval(() => {
      if (!spriteRef.current) return;

      const animation = animations[currentAnimation.current];
      frame.current = (frame.current + 1) % animation.frames;

      spriteRef.current.style.backgroundPosition = `
        -${frame.current * SPRITE_SIZE}px
        -${animation.row * SPRITE_SIZE}px
      `;
    }, 100);

    return () => clearInterval(interval);
  }, [isEnabled]);

  return (
    <>
      {/* 
        Action Trigger Button
        Positioned exactly at X: 50px (left) and Y: 70px (top)
      */}
      <button
        onClick={() => {
          setIsEnabled(!isEnabled);
          // Optional: Reset position parameters back to 0 upon waking back up
          if (!isEnabled) {
            position.current = { x: 50, y: 50 };
            mouse.current = { x: 50, y: 50 };
          }
        }}
        className="fixed z-50 rounded bg-taupe-800 px-3 py-1.5 text-xs text-ctp-green shadow-md transition-colors hover:bg-ctp-green hover:text-taupe-900 active:scale-95"
        style={{
          left: "10px",
          top: "70px",
        }}
      >
        {isEnabled ? "Disable Cat" : "Enable Cat"}
      </button>

      {/* Render the Sprite asset elements only when isEnabled validates to true */}
      {isEnabled && (
        <div
          ref={spriteRef}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-9999"
          style={{
            width: `${SPRITE_SIZE}px`,
            height: `${SPRITE_SIZE}px`,
            backgroundImage: "url('/actions.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0px -896px",
            backgroundSize: "352px 1696px",
            imageRendering: "pixelated",
            transformOrigin: "top left",
            transform: `translate3d(0, 0, 0) scale(${SPRITE_SCALE})`,
          }}
        />
      )}
    </>
  );
}
