"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ParallaxImage } from "@/components/ParallaxImage";
import { SlideWrapper } from "@/components/SlideWrapper";
import { BlurReveal, StaggerContainer, StaggerItem, InteractiveCard, TextTypingEffect } from "@/components/AdvancedAnimations";
import { Counter } from "@/components/Counter";

export default function Presentation() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-background text-foreground">
      {/* Global Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" 
        style={{ scaleX: scrollYProgress }} 
      />

      {/* Slide 1: Title Slide */}
      <SlideWrapper className="bg-white relative">
        <StaggerContainer className="text-center max-w-5xl mx-auto z-10 relative">
          <StaggerItem>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Phase 6 Final Presentation</p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6 text-foreground">
              Snapcheck
            </h1>
          </StaggerItem>
          <StaggerItem>
            <TextTypingEffect 
              text="Standardizing Property Intelligence for the Modern Rental Market" 
              className="text-2xl text-muted-foreground font-medium mb-16 inline-block font-serif italic" 
              delay={0.8}
            />
          </StaggerItem>
          
          <StaggerItem className="mt-12 pt-12 border-t border-border inline-block min-w-[60%]">
            <p className="text-sm uppercase tracking-widest text-primary font-bold mb-6">Group 4</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Project Lead</p>
                <h3 className="text-lg font-bold text-foreground">Moses</h3>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Team Member</p>
                <h3 className="text-lg font-bold text-foreground">Nnamdi</h3>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Team Member</p>
                <h3 className="text-lg font-bold text-foreground">Abdul</h3>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* CDN-style SVG network outline at the bottom, 20% opacity */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-20 text-accent">
          <svg viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M-100 150 L150 100 L300 180 L450 80 L600 140 L750 90 L900 160 L1050 60 L1300 120" stroke="currentColor" strokeWidth="2" />
            <circle cx="150" cy="100" r="4" fill="currentColor" />
            <circle cx="300" cy="180" r="4" fill="currentColor" />
            <circle cx="450" cy="80" r="4" fill="currentColor" />
            <circle cx="600" cy="140" r="4" fill="currentColor" />
            <circle cx="750" cy="90" r="4" fill="currentColor" />
            <circle cx="900" cy="160" r="4" fill="currentColor" />
            <circle cx="1050" cy="60" r="4" fill="currentColor" />
            {/* Connecting subtle vertical lines */}
            <path d="M150 200 L150 100 M300 200 L300 180 M450 200 L450 80 M600 200 L600 140 M750 200 L750 90 M900 200 L900 160 M1050 200 L1050 60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </SlideWrapper>

      {/* Slide 2: Team Information */}
      <SlideWrapper className="bg-white">
        <BlurReveal className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif">Team Information</h2>
        </BlurReveal>

        <div className="flex flex-col space-y-6 w-full max-w-5xl mx-auto">
          {/* Member 1: Moses */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full overflow-hidden bg-muted rounded-full border border-border shadow-md flex items-center p-4 pr-12"
          >
            {/* Left: Hero Image (Circle) */}
            <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 bg-primary/20 mr-8 relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-primary/30 animate-pulse" />
                {/* Once you have an image, insert it here: <img src="..." className="absolute inset-0 w-full h-full object-cover" /> */}
            </div>

            {/* Right: Member Details */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-foreground">Kpughur-Tule Tertsegha Moses (Project Lead)</h3>
              <p className="text-muted-foreground text-sm max-w-2xl">Lead for technical strategy and project management. He bridges the gap between complex software requirements and user needs.</p>
            </div>
          </motion.div>

          {/* Member 2: Nnamdi */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full overflow-hidden bg-muted rounded-full border border-border shadow-md flex items-center p-4 pr-12"
          >
             {/* Left: Hero Image (Circle) */}
             <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-secondary/20 bg-secondary/20 mr-8 relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-secondary/30 animate-pulse" />
                {/* Once you have an image, insert it here: <img src="..." className="absolute inset-0 w-full h-full object-cover" /> */}
            </div>

            {/* Right: Member Details */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-foreground">Nwosu Nnamdi (Market Research)</h3>
              <p className="text-muted-foreground text-sm max-w-2xl">Focused on researching the short-term rental market and understanding how our design implements AR technology.</p>
            </div>
          </motion.div>

          {/* Member 3: Abdul */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full overflow-hidden bg-muted rounded-full border border-border shadow-md flex items-center p-4 pr-12"
          >
             {/* Left: Hero Image (Circle) */}
             <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-accent/20 bg-accent/20 mr-8 relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-accent/30 animate-pulse" />
                {/* Once you have an image, insert it here: <img src="..." className="absolute inset-0 w-full h-full object-cover" /> */}
            </div>

            {/* Right: Member Details */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-foreground">Abdul Adigun (Technical Design)</h3>
              <p className="text-muted-foreground text-sm max-w-2xl">Managed system architecture, feasibility analysis, and identified the target user base.</p>
            </div>
          </motion.div>
        </div>
      </SlideWrapper>

      {/* Slide 3: Project Overview */}
      {/* Slide 3: Project Overview */}
      <SlideWrapper className="bg-white">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          <BlurReveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-serif leading-tight mb-2">
              Project Overview
            </h2>
          </BlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <StaggerContainer className="col-span-1 space-y-6 md:space-y-10">
              <StaggerItem>
                <div className="space-y-2 md:space-y-4">
                  <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-black text-foreground border-b border-foreground/20 pb-1 md:pb-2">Core Purpose</h4>
                  <p className="text-lg md:text-xl font-medium text-muted-foreground leading-snug md:leading-relaxed">
                    A professional-grade mobile ecosystem that utilizes Augmented Reality to create 
                    verifiable, objective records of property conditions.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-2 md:space-y-4">
                  <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-black text-foreground border-b border-foreground/20 pb-1 md:pb-2">Target Audience</h4>
                  <p className="text-base md:text-lg text-muted-foreground font-medium leading-tight">
                    Property Managers, Landlords, Professional Inspectors, and Maintenance Teams.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer className="col-span-1 md:col-span-2 space-y-8 md:space-y-10">
               <StaggerItem>
                 <div className="bg-muted p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-4">
                    <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-black text-foreground">The Problem</h4>
                    <p className="text-xl md:text-2xl font-bold text-foreground font-serif leading-tight">
                      Manual inspections are slow and fundamentally subjective. 
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Human inspectors frequently suffer from <span className="text-foreground font-bold underline decoration-primary decoration-2 underline-offset-4 italic whitespace-nowrap">"Change Blindness"</span>—a cognitive limitation 
                      where subtle changes in property state are overlooked when transitioning between physical observation and traditional documentation tools.
                    </p>
                 </div>
               </StaggerItem>

               <StaggerItem>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="p-6 md:p-8 border border-border rounded-xl space-y-2 md:space-y-4">
                      <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-black text-foreground">Performance Targets</h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl md:text-4xl font-black text-foreground whitespace-nowrap">75%</span>
                        <span className="text-[10px] md:text-xs text-muted-foreground font-medium">Faster Setup</span>
                      </div>
                      <div className="flex items-baseline gap-2 pt-1 md:pt-2">
                        <span className="text-3xl md:text-4xl font-black text-foreground whitespace-nowrap">95%</span>
                        <span className="text-[10px] md:text-xs text-muted-foreground font-medium">Detection Accuracy</span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 border border-border rounded-xl space-y-2 md:space-y-4">
                      <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-black text-foreground">UX Objectives</h4>
                      <ul className="space-y-2">
                        <li className="text-xs md:text-sm font-bold text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 flex-shrink-0"></span>
                          Legally credible documentation.
                        </li>
                        <li className="text-xs md:text-sm font-bold text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 flex-shrink-0"></span>
                          Enhanced field confidence using haptic and visual cues.
                        </li>
                      </ul>
                    </div>
                 </div>
               </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 4: Requirements & User Research */}
      {/* Slide 4: Requirements & User Research */}
      <SlideWrapper className="bg-white">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center py-2 md:py-4">
          <BlurReveal>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground font-serif">Requirements & User Research</h2>
            <div className="w-12 md:w-16 h-1 bg-primary mt-1 md:mt-2 mb-4 md:mb-6"></div>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
            <StaggerItem>
              <InteractiveCard className="p-3 md:p-5 bg-muted/50 border-none h-full">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] md:text-xs">01</span>
                  Personas
                </h3>
                <p className="text-[10px] md:text-sm text-muted-foreground leading-tight">
                  <span className="font-bold text-foreground">Sarah (34):</span> Manager in Kamloops. Oversees 50 units with a <span className="text-primary font-bold">4-hour window</span> for turnovers.
                </p>
              </InteractiveCard>
            </StaggerItem>

            <StaggerItem>
              <InteractiveCard className="p-3 md:p-5 bg-muted/50 border-none h-full">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-secondary text-white flex items-center justify-center text-[10px] md:text-xs">02</span>
                  Data Gathering
                </h3>
                <p className="text-[10px] md:text-sm text-muted-foreground leading-tight">
                  We conducted qualitative research using <span className="font-bold text-foreground">Reddit and industry data sources</span>, analyzing discussions from hosts, guests, and maintenance professionals in short-term rentals.
                </p>
              </InteractiveCard>
            </StaggerItem>

            <StaggerItem>
              <InteractiveCard className="p-3 md:p-5 bg-muted/50 border-none h-full">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent text-white flex items-center justify-center text-[10px] md:text-xs">03</span>
                  Key Insights
                </h3>
                <p className="text-[9px] md:text-[11px] text-muted-foreground leading-tight italic">
                  "Courts rule in favor of the party that provides clearer, more credible documentation..."
                  <span className="block mt-1 not-italic font-bold text-foreground">— CCS Risk Services, n.d.</span>
                </p>
              </InteractiveCard>
            </StaggerItem>
          </StaggerContainer>

          <div className="space-y-2 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold font-serif text-foreground">Storyboard</h3>
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full overflow-hidden rounded-lg border border-border shadow-lg bg-white"
            >
              <img 
                src="/storyboard.png" 
                alt="Snapcheck Storyboard" 
                className="w-full h-auto object-contain max-h-[40vh] md:max-h-[55vh]" 
              />
            </motion.div>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 5: Design Process */}
      <SlideWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center py-8">
          <BlurReveal>
            <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Architectural Evolution</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-serif">Design Process</h2>
            <div className="w-20 h-1 md:h-1.5 bg-primary mt-4 mb-8 md:mb-12"></div>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <StaggerItem>
              <InteractiveCard className="p-6 md:p-8 bg-white h-full border-none shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">Design Choices</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We compared split-screens and blinking images but chose a <span className="font-bold text-foreground">"Transparent Overlay" (Ghost Image)</span>. This approach makes discrepancies visually "pop" in real-time.
                </p>
              </InteractiveCard>
            </StaggerItem>

            <StaggerItem>
              <InteractiveCard className="p-6 md:p-8 bg-white h-full border-none shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-secondary">Prototyping Iterations</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs md:text-sm uppercase font-black tracking-widest text-muted-foreground">Low-Fidelity</span>
                    <p className="text-xs md:text-sm text-foreground mt-1">Simple wireframes tested if the "Ghost Image" metaphor was intuitive for users.</p>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm uppercase font-black tracking-widest text-muted-foreground">High-Fidelity</span>
                    <p className="text-xs md:text-sm text-foreground mt-1">Developed a polished Figma prototype using a <span className="text-primary font-bold">"Pulse Neon"</span> design system for high visual consistency.</p>
                  </div>
                </div>
              </InteractiveCard>
            </StaggerItem>

            <StaggerItem className="md:col-span-2">
              <InteractiveCard className="p-6 bg-primary text-white border-none shadow-xl">
                <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-3">
                  <span className="p-2 bg-white/20 rounded-lg">⚠️</span>
                  Challenges
                </h3>
                <p className="text-white/90 italic text-base md:text-lg">
                  "Ensuring the AR overlay stayed perfectly anchored to the room as the user moves."
                </p>
              </InteractiveCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SlideWrapper>

      {/* Slide 7: Demo Onboarding */}
      <SlideWrapper className="bg-white">
        <BlurReveal className="mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">System Demonstration</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif text-foreground">Onboarding and Role Selection</h2>
        </BlurReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-4">
            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Secure login interface</h4>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Role-based access</h4>
                <p className="text-muted-foreground text-sm mt-1">Inspector, Manager, Owner workflows</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Permission-based navigation</h4>
              </StaggerItem>
            </StaggerContainer>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-8">
            <BlurReveal delay={0.2} className="flex justify-center">
              <img src="/Onboarding_01.png" alt="Login Interface" className="max-h-[60vh] w-auto rounded-xl shadow-xl border border-border" />
            </BlurReveal>
            <BlurReveal delay={0.4} className="flex justify-center">
              <img src="/Onboarding_02.png" alt="Role Selection" className="max-h-[60vh] w-auto rounded-xl shadow-xl border border-border" />
            </BlurReveal>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 8: Demo Maintenance Crew */}
      <SlideWrapper className="bg-muted">
        <BlurReveal className="mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">System Demonstration</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif text-foreground">Maintenance Crew Workflow</h2>
        </BlurReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           <div className="col-span-12 lg:col-span-4">
            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Camera alignment</h4>
                <p className="text-muted-foreground text-sm mt-1">Locks strictly into historic baseline position</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">AR Discrepancy Overlay</h4>
                <p className="text-muted-foreground text-sm mt-1">Highlights deviations in real time</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Transparency Tools</h4>
                <p className="text-muted-foreground text-sm mt-1">Adjustable slider for immediate visual comparison</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Voice Annotations</h4>
                <p className="text-muted-foreground text-sm mt-1">Linked directly to localized spatial tags</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-8">
            <BlurReveal delay={0.2} className="flex justify-center">
              <img src="/Maintenance_Crew_01.jpg" alt="Task View" className="max-h-[60vh] w-full object-cover object-top rounded-xl shadow-xl border border-border" />
            </BlurReveal>
            <BlurReveal delay={0.4} className="flex justify-center">
              <img src="/Maintenance_Crew_02.jpg" alt="AR Overlay Alignment" className="max-h-[60vh] w-full object-cover object-top rounded-xl shadow-xl border border-border" />
            </BlurReveal>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 9: Demo Property Manager */}
      <SlideWrapper className="bg-white">
        <BlurReveal className="mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">System Demonstration</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif text-foreground">Manager Dashboard</h2>
        </BlurReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-4">
            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Overview of active inspections</h4>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Discrepancy tracking</h4>
                <p className="text-muted-foreground text-sm mt-1">Direct escalation workflow management</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Centralized coordination</h4>
                <p className="text-muted-foreground text-sm mt-1">Portfolio-wide access across properties</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-8">
            <BlurReveal delay={0.2} className="flex justify-center">
               <img src="/Property_Manager_01.jpg" alt="Dashboard Overview" className="max-h-[60vh] w-full object-cover object-top rounded-xl shadow-xl border border-border" />
            </BlurReveal>
            <BlurReveal delay={0.4} className="flex justify-center">
               <img src="/Property_Manager_02.png" alt="Inspection Detail View" className="max-h-[60vh] w-full object-cover object-top rounded-xl shadow-xl border border-border" />
            </BlurReveal>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 10: Demo Property Owner */}
      <SlideWrapper className="bg-muted">
         <BlurReveal className="mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">System Demonstration</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif text-foreground">Owner Oversight</h2>
        </BlurReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-4">
            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Portfolio-level monitoring</h4>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Status indicators</h4>
                <p className="text-muted-foreground text-sm mt-1">Live health indices across units</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Finalized reporting</h4>
                <p className="text-muted-foreground text-sm mt-1">Instant access to post-inspection documentation</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-xl font-bold border-b border-border pb-2">Financial visibility</h4>
                <p className="text-muted-foreground text-sm mt-1">Impact forecasting and damage recovery mapping</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-8">
             <BlurReveal delay={0.2} className="flex justify-center">
               <img src="/Property_Owner_01.jpg" alt="Portfolio View" className="max-h-[60vh] w-full object-cover object-top rounded-xl shadow-xl border border-border" />
            </BlurReveal>
            <BlurReveal delay={0.4} className="flex justify-center">
               <img src="/Property_Owner_02.jpg" alt="Summary Report Screen" className="max-h-[60vh] w-full object-cover object-top rounded-xl shadow-xl border border-border" />
            </BlurReveal>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 11: Evaluation Results */}
      <SlideWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <BlurReveal>
              <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Empirical Validation</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 font-serif">Usability Evaluation</h2>
            </BlurReveal>
            
            <StaggerContainer className="space-y-8">
              <StaggerItem>
                 <div>
                   <h3 className="font-bold text-xl mb-2 text-foreground">Participants</h3>
                   <p className="text-muted-foreground bg-muted p-4 rounded-lg">5 moderated testers (professional inspectors and property owners)</p>
                 </div>
              </StaggerItem>
              <StaggerItem>
                 <div>
                   <h3 className="font-bold text-xl mb-3 text-foreground">Results</h3>
                   <ul className="space-y-3 pl-4">
                     <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> 100% task completion rate</li>
                     <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Average inspection time: ~85 seconds</li>
                     <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Users adapted quickly to inspection workflow</li>
                     <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full"></span> Minor hesitation noted in advanced feature access</li>
                   </ul>
                 </div>
              </StaggerItem>
              <StaggerItem>
                 <div className="border-l-4 border-secondary pl-6 py-2 mt-4">
                   <h3 className="font-bold text-lg text-secondary mb-1">Key Insight & Action</h3>
                   <p className="text-muted-foreground italic">Entry points for advanced diagnostic tools were immediately refined for enhanced visual clarity.</p>
                 </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
          
          <BlurReveal delay={0.4} className="h-full flex flex-col justify-end">
            <InteractiveCard className="p-8 h-80 flex items-end justify-around pb-12 pt-8 relative">
              <div className="absolute top-4 left-8 right-8 flex justify-between text-xs text-muted-foreground font-mono uppercase">
                <span>Task Time Variance</span>
                <span>Target: &lt;120s</span>
              </div>
               {/* Bar Chart Simulation */}
               {[72, 88, 80, 95, 90].map((height, i) => (
                 <div key={i} className="flex flex-col items-center gap-4 w-12 group">
                   <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">{height}s</span>
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: `${height}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, ease: "easeOut", delay: 0.5 + (i * 0.1) }}
                     className="w-full bg-primary rounded-t-sm"
                   />
                   <span className="text-xs text-muted-foreground">P{i+1}</span>
                 </div>
               ))}
               {/* Goal Line */}
               <div className="absolute top-1/4 left-8 right-8 border-t border-dashed border-accent"></div>
            </InteractiveCard>
          </BlurReveal>
        </div>
      </SlideWrapper>

      {/* Slide 12: Business Model */}
      <SlideWrapper className="bg-muted">
        <BlurReveal className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-serif">How Snapcheck Generates Revenue</h2>
          <p className="text-xl text-muted-foreground">Designed exclusively for scalability across multi-property operations.</p>
        </BlurReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <StaggerContainer className="space-y-6">
             <StaggerItem>
               <InteractiveCard className="p-6 border-l-4 border-l-primary hover:border-l-secondary transition-colors">
                 <h3 className="text-xl font-bold text-foreground mb-2">SaaS Subscription</h3>
                 <p className="text-muted-foreground">Tiered pricing architecture scaled by the total number of managed units.</p>
               </InteractiveCard>
             </StaggerItem>
             <StaggerItem>
               <InteractiveCard className="p-6 border-l-4 border-l-accent hover:border-l-primary transition-colors">
                 <h3 className="text-xl font-bold text-foreground mb-2">Success-Based Fees</h3>
                 <p className="text-muted-foreground">Commission percentage charged on verified, successfully recovered damage claims.</p>
               </InteractiveCard>
             </StaggerItem>
             <StaggerItem>
               <InteractiveCard className="p-6 border-l-4 border-l-secondary hover:border-l-accent transition-colors">
                 <h3 className="text-xl font-bold text-foreground mb-2">Enterprise Licensing</h3>
                 <p className="text-muted-foreground">White-label and API contracts with 3rd-party maintenance and cleaning providers.</p>
               </InteractiveCard>
             </StaggerItem>
          </StaggerContainer>

          <BlurReveal delay={0.4}>
             <div className="bg-white p-12 rounded-2xl shadow-xl flex flex-col items-center justify-between h-full space-y-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Value Capture Flow</span>
                
                <div className="w-full text-center p-4 bg-muted rounded-lg border border-border">Manager Initiation</div>
                <div className="h-6 w-px bg-border"></div>
                <div className="w-full text-center p-4 bg-primary text-white rounded-lg font-bold shadow-md">Snapcheck Inspection</div>
                <div className="h-6 w-px bg-border"></div>
                <div className="w-full text-center p-4 bg-accent/10 border border-accent/20 rounded-lg text-accent font-bold">Irrefutable Claim</div>
                <div className="h-6 w-px bg-border"></div>
                <div className="w-full text-center p-4 bg-secondary/10 border border-secondary/20 rounded-lg text-secondary font-bold">Revenue Recovery</div>
             </div>
          </BlurReveal>
        </div>
      </SlideWrapper>

      {/* Slide 13: Conclusion */}
      <SlideWrapper className="bg-primary text-white relative">
        <BlurReveal className="text-center max-w-4xl mx-auto flex flex-col justify-center h-full pt-12 pb-24">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-12 font-serif">
            Conclusion
          </h2>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
            <StaggerItem>
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 h-full backdrop-blur-sm">
                <p className="text-lg text-white">Reduces inspection setup time significantly</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 h-full backdrop-blur-sm">
                <p className="text-lg text-white">Improves detection accuracy through visual verification</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 h-full backdrop-blur-sm">
                <p className="text-lg text-white">Standardizes documentation strictly across all stakeholders</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 h-full backdrop-blur-sm">
                <p className="text-lg text-white">Eliminates ambiguity in ongoing dispute resolution</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <p className="text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed border-t border-white/20 pt-12">
            Snapcheck establishes a consistent and verifiable <span className="text-secondary italic">standard</span> for property inspections.
          </p>
        </BlurReveal>

        {/* Footer block pinned to bottom */}
        <div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/10 bg-black/20 backdrop-blur-md">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm uppercase tracking-widest text-white/70">
            <span>Questions?</span>
            <a href="mailto:mosestule02@gmail.com" className="hover:text-white transition-colors duration-200">mosestule02@gmail.com</a>
          </div>
        </div>
      </SlideWrapper>

    </main>
  );
}
