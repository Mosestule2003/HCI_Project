"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ParallaxImage = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  if (!src) {
    return (
      <div ref={ref} className={`overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-muted flex items-center justify-center p-12 ${className}`}>
        <motion.div style={{ y, scale }} className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
          {alt}
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`overflow-hidden rounded-2xl shadow-2xl relative bg-muted/20 ${className}`}>
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ y, scale }} 
        className="w-full h-auto object-cover" 
      />
    </div>
  );
};
