"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
}

export const ScrollReveal = ({
  children,
  width = "fit-content",
  className,
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.6,
}: ScrollRevealProps) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <div
      className={className}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            ...directions[direction],
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for "smooth" feel
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
