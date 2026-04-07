"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Counter = ({ to, suffix = "", prefix = "" }: { to: number, suffix?: string, prefix?: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px 0px" });
  const [hasTriggered, setHasTriggered] = useState(false);
  
  const springValue = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(springValue, (current) => Math.round(current));
  
  useEffect(() => {
    if (inView && !hasTriggered) {
      springValue.set(to);
      setHasTriggered(true);
    }
  }, [inView, hasTriggered, springValue, to]);

  return (
    <span ref={ref} className="text-4xl font-mono font-semibold text-primary">
      {prefix}<motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
};
