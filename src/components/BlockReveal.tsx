import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface BlockRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  blockColor?: string;
}

export default function BlockReveal({
  children,
  delay = 0,
  duration = 1.05,
  className = "",
  blockColor = "#df2531",
}: BlockRevealProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  
  // once: false allows bidirectional triggers when scrolling down and back up
  const isInView = useInView(ref, {
    once: false,
    margin: "-6% 0px -6% 0px",
  });

  const textDelay = delay + duration * 0.42;

  return (
    <span
      ref={ref}
      className={`relative inline-block overflow-hidden align-top ${className}`}
    >
      {/* Underlying Text: reveals smoothly on enter, reverses out on exit */}
      <motion.span
        initial={{ opacity: 0, x: -6 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: -6 }
        }
        transition={{
          duration: 0.45,
          delay: isInView ? textDelay : 0,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="inline-block"
      >
        {children}
      </motion.span>

      {/* Signature Red Curtain Wipe Block:
          When scrolling down / entering view: wipes from left to right covering then clearing the text.
          When scrolling up / exiting view: wipes back from right to left, reversing the reveal.
      */}
      <motion.span
        initial={{ left: "0%", right: "100%", opacity: 0 }}
        animate={
          isInView
            ? {
                left: ["0%", "0%", "100%"],
                right: ["100%", "0%", "0%"],
                opacity: [1, 1, 0],
              }
            : {
                left: ["100%", "0%", "0%"],
                right: ["0%", "0%", "100%"],
                opacity: [0, 1, 1],
              }
        }
        transition={{
          duration,
          times: [0, 0.48, 1],
          ease: [0.76, 0, 0.24, 1],
          delay: isInView ? delay : 0,
        }}
        style={{ backgroundColor: blockColor }}
        className="absolute inset-y-0 z-10 pointer-events-none"
      />
    </span>
  );
}
