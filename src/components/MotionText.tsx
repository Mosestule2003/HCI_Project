"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

export const MotionContainer = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionItem = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
