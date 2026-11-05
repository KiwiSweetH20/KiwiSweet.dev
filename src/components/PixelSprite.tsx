"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

const SPRITE_SIZE = 32;
const SPRITE_SCALE = 2;
const CONSTANT_SPEED = 2;
const HOME_SIZE = SPRITE_SIZE * SPRITE_SCALE; // 64px box the cat "lives" in

//  PLACE YOUR BOWL IMAGES HERE

const BOWL_IMAGES = {
  full: "/images/FullBowl.png", 
  empty: "/images/EmptyBowl.png", 
};

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

  interface MouseSpriteProps {
  bgImage?: string | {
    light: string;
    dark: string;
  };
}

export default function MouseSprite({ bgImage = "" }: MouseSpriteProps) {
  const [isEnabled, setIsEnabled] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const position = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentAnimation = useRef<keyof typeof animations>("sit");
  const frame = useRef<number>(0);

  // Handle initialization and theme changes
  useEffect(() => {
    requestAnimationFrame(() => {
      setHasMounted(true);
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

    const checkTheme = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    setIsEnabled((prev) => {
      const nextState = !prev;
      localStorage.setItem("catSpriteEnabled", JSON.stringify(nextState));
      return nextState;
    });
  };

  /* PLACE CAT AT HOME (above the button) */
  useEffect(() => {
    if (!hasMounted || !isEnabled || !homeRef.current) return;
    const home = homeRef.current.getBoundingClientRect();
    const centerX = home.left + home.width / 2;
    const centerY = home.top + home.height / 2;
    position.current = { x: centerX, y: centerY };
    mouse.current = { x: centerX, y: centerY };
    currentAnimation.current = "sit";
    frame.current = 0;
  }, [isEnabled, hasMounted]);

  /* TRACK MOUSE */
  useEffect(() => {
    if (!hasMounted || !isEnabled) return;
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isEnabled, hasMounted]);

  /* MOVE TOWARD MOUSE */
  useEffect(() => {
    if (!hasMounted || !isEnabled) return;

    let animationFrame: number;
    const move = () => {
      const dx = mouse.current.x - position.current.x;
      const dy = mouse.current.y - position.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      let newAnimation: keyof typeof animations;

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
          "runUpRight",
        ] as const;
        newAnimation = directions[zone];
      } else {
        position.current.x = mouse.current.x;
        position.current.y = mouse.current.y;
        newAnimation = currentAnimation.current === "sit" ? "sit" : "stroke";
      }

      if (newAnimation !== currentAnimation.current) {
        currentAnimation.current = newAnimation;
        frame.current = 0;
        const animation = animations[newAnimation];
        if (spriteRef.current) {
          spriteRef.current.style.backgroundPosition = `0px -${animation.row * SPRITE_SIZE}px`;
        }
      }

      if (spriteRef.current && homeRef.current) {
        const home = homeRef.current.getBoundingClientRect();
        const offset = HOME_SIZE / 2;
        const moveX = position.current.x - offset - home.left;
        const moveY = position.current.y - offset - home.top;
        spriteRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${SPRITE_SCALE})`;
      }

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [isEnabled, hasMounted]);

  /* ANIMATE FRAMES */
  useEffect(() => {
    if (!hasMounted || !isEnabled) return;
    const interval = setInterval(() => {
      if (!spriteRef.current) return;
      const animation = animations[currentAnimation.current];
      frame.current = (frame.current + 1) % animation.frames;
      spriteRef.current.style.backgroundPosition = `-${frame.current * SPRITE_SIZE}px -${animation.row * SPRITE_SIZE}px`;
    }, 100);
    return () => clearInterval(interval);
  }, [isEnabled, hasMounted]);

  if (!hasMounted) {
    return null;
  }

  let currentBgString = bgImage;
  if (bgImage && typeof bgImage === "object") {
    currentBgString = isDarkMode ? bgImage.dark : bgImage.light;
  }

  const customBackground = currentBgString
    ? {
        backgroundImage: `url(${currentBgString})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundImage: "radial-gradient(#d5cdc4 1px, transparent 1px)",
        backgroundSize: "8px 8px",
      };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 1. Cat Home Area */}
      <div
        className="relative flex shrink-0 items-center justify-center rounded-xl bg-taupe-50/50 dark:bg-zinc-800/50 border border-dashed border-taupe-300 dark:border-zinc-700 shadow-inner overflow-visible"
        style={{
          width: `${HOME_SIZE + 16}px`,
          height: `${HOME_SIZE + 16}px`,
          ...customBackground,
        }}
      >
        {!currentBgString && (
          <div className="absolute w-12 h-6 bg-amber-700/20 dark:bg-amber-500/10 rounded-full blur-[2px] bottom-2 pointer-events-none" />
        )}

        <div
          ref={homeRef}
          className="flex shrink-0"
          style={{ width: `${HOME_SIZE}px`, height: `${HOME_SIZE}px` }}
        >
          {isEnabled && (
            <div
              ref={spriteRef}
              aria-hidden="true"
              className="pointer-events-none z-50 shrink-0"
              style={{
                width: `${SPRITE_SIZE}px`,
                height: `${SPRITE_SIZE}px`,
                backgroundImage: "url('/images/actions.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0px -896px",
                backgroundSize: "352px 1696px",
                imageRendering: "pixelated",
                transformOrigin: "top left",
                transform: `scale(${SPRITE_SCALE})`,
              }}
            />
          )}
        </div>
      </div>

      {/* 2. Graphical Cat Bowl Button */}
      <button
        onClick={handleToggle}
        className="group relative z-10 flex items-center justify-center w-16 h-12 transition-transform active:scale-95 focus:outline-hidden"
        aria-label={isEnabled ? "Empty the cat bowl" : "Fill the cat bowl"}
      >
        <Image
          src={isEnabled ? BOWL_IMAGES.full : BOWL_IMAGES.empty}
          alt={isEnabled ? "Full Bowl" : "Empty Bowl"}
          width="100"
          height="80"
          className="w-full h-full object-contain filter drop-shadow-md group-hover:brightness-105 transition-all"
        />
      </button>
    </div>
  );
}
