"use client";

import { useEffect, useRef, useState } from "react";

const SPRITE_SIZE = 32;
const SPRITE_SCALE = 2;
const CONSTANT_SPEED = 2;

const animations = {
  sit: { row: 28, frames: 3, speed: 300 },
  stroke: { row: 20, frames: 6, speed: 150 },
  runRight: { row: 6, frames: 8, speed: 100 },
  runLeft: { row: 7, frames: 8, speed: 100 },
  runUp: { row: 5, frames: 4, speed: 100 },
  runDown: { row: 4, frames: 4, speed: 100 },
  runUpRight: { row: 10, frames: 6, speed: 100 },
  runUpLeft: { row: 11, frames: 6, speed: 100 },
  runDownRight: { row: 9, frames: 6, speed: 100 },
  runDownLeft: { row: 8, frames: 6, speed: 100 },
};

export default function MouseSprite() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  
  const spriteRef = useRef(null);
  const mouse = useRef({ x: 50, y: 50 });
  const position = useRef({ x: 50, y: 50 });
  const currentAnimation = useRef("sit");
  const frame = useRef(0);

  // --- UPDATED HYDRATION HOOK (MOBILE CHECK ADDED) ---
  useEffect(() => {
    requestAnimationFrame(() => {
      setHasMounted(true);
      
      // Disable automatically if the screen width is less than 768px (mobile)
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        setIsEnabled(false);
      } else {
        const savedPreference = localStorage.getItem("catSpriteEnabled");
        if (savedPreference !== null) {
          setIsEnabled(JSON.parse(savedPreference));
        }
      }
    });
  }, []);

  const handleToggle = () => {
    setIsEnabled((prev) => {
      const nextState = !prev;
      localStorage.setItem("catSpriteEnabled", JSON.stringify(nextState));
      if (nextState) {
        position.current = { x: 50, y: 50 };
        mouse.current = { x: 50, y: 50 };
        currentAnimation.current = "sit";
      }
      return nextState;
    });
  };

  /* * ========================== * TRACK MOUSE * ========================== */
  useEffect(() => {
    if (!hasMounted || !isEnabled) return;

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isEnabled, hasMounted]);

  /* * ========================== * MOVE TOWARD MOUSE * ========================== */
  useEffect(() => {
    if (!hasMounted || !isEnabled) return;

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
          "runRight",
          "runDownRight",
          "runDown",
          "runDownLeft",
          "runLeft",
          "runUpLeft",
          "runUp",
          "runUpRight"
        ];
        newAnimation = directions[zone];
      } else {
        position.current.x = mouse.current.x;
        position.current.y = mouse.current.y;
        if (currentAnimation.current === "sit") {
          newAnimation = "sit";
        } else {
          newAnimation = "stroke";
        }
      }

      if (newAnimation !== currentAnimation.current) {
        currentAnimation.current = newAnimation;
        frame.current = 0;
        const animation = animations[newAnimation];
        if (spriteRef.current) {
          spriteRef.current.style.backgroundPosition = `
            0px -${animation.row * SPRITE_SIZE}px
          `;
        }
      }

      if (spriteRef.current) {
        const offset = (SPRITE_SIZE * SPRITE_SCALE) / 2;
        const drawX = position.current.x - offset;
        const drawY = position.current.y - offset;
        spriteRef.current.style.transform = `
          translate3d(${drawX}px, ${drawY}px, 0) scale(${SPRITE_SCALE})
        `;
      }

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [isEnabled, hasMounted]);

  /* * ========================== * ANIMATE FRAMES * ========================== */
  useEffect(() => {
    if (!hasMounted || !isEnabled) return;

    const interval = setInterval(() => {
      if (!spriteRef.current) return;
      const animation = animations[currentAnimation.current];
      frame.current = (frame.current + 1) % animation.frames;
      spriteRef.current.style.backgroundPosition = `
        -${frame.current * SPRITE_SIZE}px -${animation.row * SPRITE_SIZE}px
      `;
    }, 100);

    return () => clearInterval(interval);
  }, [isEnabled, hasMounted]);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* Added 'hidden md:block' to hide the control button completely on mobile devices */}
      <button
        onClick={handleToggle}
        className="fixed z-50 hidden rounded bg-taupe-900 px-3 py-1.5 text-xs text-ctp-green shadow-md transition-colors hover:bg-ctp-green hover:text-taupe-900 active:scale-95 md:block"
        style={{
          left: "10px",
          top: "70px",
        }}
      >
        {isEnabled ? "Disable Cat" : "Enable Cat"}
      </button>

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
