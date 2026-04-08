"use client";

import { motion } from "framer-motion";

const skylinePath = "M0 100 Q 10 95 20 100 L 20 80 L 50 80 L 50 100 Q 60 95 70 100 L 70 30 L 110 30 L 110 100 L 130 100 L 130 60 L 140 40 L 150 60 L 160 100 Q 170 95 180 100 L 180 10 L 220 10 L 220 100 L 240 100 L 240 70 L 280 70 L 280 100 Q 290 95 300 100 L 300 40 L 340 40 L 340 100 L 360 100 L 360 85 L 380 85 L 380 100 L 400 100 L 400 20 L 440 20 L 440 100 Q 450 95 460 100 L 460 60 L 500 60 L 500 100 L 520 100 L 520 50 L 560 50 L 560 100 Q 570 95 580 100 L 580 80 L 620 80 L 620 100 L 640 100 L 640 10 L 680 10 L 680 100 L 700 100 L 700 40 L 740 40 L 740 100 Q 750 95 760 100 L 760 70 L 800 70 L 800 100 L 820 100 L 820 30 L 860 30 L 860 100 Q 870 95 880 100 L 880 60 L 920 60 L920 100 L 940 100 L 940 85 L 980 85 L 980 100 Q 990 95 1000 100";

const Skyline = ({ color }: { color: string }) => (
  <svg 
    viewBox="0 0 1000 100" 
    preserveAspectRatio="none" 
    className="w-1/2 h-full flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={skylinePath} fill={color} />
  </svg>
);

export const SkylineAnimation = () => {
  // Use the brand primary color: #1e3a8a
  const color = "#1e3a8a";

  return (
    <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden pointer-events-none z-0">
      {/* Back Layer */}
      <motion.div 
        className="absolute bottom-0 left-[-100%] w-[200%] h-full flex opacity-60"
        animate={{ x: ["0%", "50%"] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <Skyline color={color} />
        <Skyline color={color} />
      </motion.div>

      {/* Front Layer */}
      <motion.div 
        className="absolute bottom-0 left-[-100%] w-[200%] h-full flex opacity-40"
        animate={{ x: ["0%", "50%"] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <Skyline color={color} />
        <Skyline color={color} />
      </motion.div>
    </div>
  );
};
