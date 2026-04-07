"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Blur Reveal for text or sections
const blurRevealVariants: Variants = {
  hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
  visible: { 
    filter: "blur(0px)", 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const BlurReveal = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.div 
      variants={{
        hidden: blurRevealVariants.hidden,
        visible: {
          ...blurRevealVariants.visible,
          transition: { ...((blurRevealVariants.visible as any).transition), delay }
        }
      }}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered Container for Lists or Grid Items
const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const StaggerContainer = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div 
      variants={staggerContainerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
};

// Hover Card micro-interaction
export const InteractiveCard = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-white border border-border rounded-xl shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const TextTypingEffect = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const characters = text.split("");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.03, delayChildren: delay }
        }
      }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 5 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
