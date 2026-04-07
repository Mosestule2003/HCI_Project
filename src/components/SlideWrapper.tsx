"use client";

import { ReactNode } from "react";

export const SlideWrapper = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <section className={`relative h-screen w-full flex flex-col justify-center snap-always snap-center px-6 md:px-12 ${className}`}>
      <div className="max-w-6xl mx-auto w-full z-10">
        {children}
      </div>
    </section>
  );
};
