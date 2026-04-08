"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ParallaxImage } from "@/components/ParallaxImage";
import { SlideWrapper } from "@/components/SlideWrapper";
import { BlurReveal, StaggerContainer, StaggerItem, InteractiveCard, TextTypingEffect } from "@/components/AdvancedAnimations";
import { Counter } from "@/components/Counter";

import { RedditFeed } from "@/components/RedditFeed";
import { SkylineAnimation } from "@/components/SkylineAnimation";


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

        <SkylineAnimation />

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
                <p className="text-[10px] md:text-sm text-muted-foreground leading-tight font-bold">
                  <span className="font-black text-foreground">Sarah (34):</span> Manager in Kamloops. Oversees 50 units with a <span className="text-primary font-black">4-hour window</span> for turnovers.
                </p>
              </InteractiveCard>
            </StaggerItem>

            <StaggerItem>
              <InteractiveCard className="p-3 md:p-5 bg-muted/50 border-none h-full">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-secondary text-white flex items-center justify-center text-[10px] md:text-xs">02</span>
                  Data Gathering
                </h3>
                <p className="text-[10px] md:text-sm text-muted-foreground leading-tight font-bold">
                  We conducted qualitative research using <span className="font-black text-foreground">Reddit and industry data sources</span>, analyzing discussions from hosts, guests, and maintenance professionals.
                </p>
              </InteractiveCard>
            </StaggerItem>

            <StaggerItem>
              <InteractiveCard className="p-3 md:p-5 bg-muted/50 border-none h-full">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent text-white flex items-center justify-center text-[10px] md:text-xs">03</span>
                  Key Insights
                </h3>
                <p className="text-[9px] md:text-[11px] text-muted-foreground leading-tight italic font-bold">
                  "Courts rule in favor of the party that provides clearer, more credible documentation..."
                  <span className="block mt-1 not-italic font-black text-foreground">— CCS Risk Services, n.d.</span>
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
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-bold">
                  We compared split-screens and blinking images but chose a <span className="font-black text-foreground">"Transparent Overlay" (Ghost Image)</span>. This approach makes discrepancies visually "pop" in real-time.
                </p>
              </InteractiveCard>
            </StaggerItem>

            <StaggerItem>
              <InteractiveCard className="p-6 md:p-8 bg-white h-full border-none shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-secondary">Prototyping Iterations</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs md:text-sm uppercase font-black tracking-widest text-muted-foreground">Low-Fidelity</span>
                    <p className="text-xs md:text-sm text-foreground mt-1 font-bold">Simple wireframes tested if the "Ghost Image" metaphor was intuitive for users.</p>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm uppercase font-black tracking-widest text-muted-foreground">High-Fidelity</span>
                    <p className="text-xs md:text-sm text-foreground mt-1 font-bold">Developed a polished Figma prototype representing Snapcheck's trajectory toward <span className="text-primary font-black">production-level software</span> and a fully implemented mobile application.</p>
                  </div>
                </div>
              </InteractiveCard>
            </StaggerItem>

            <StaggerItem className="md:col-span-2">
              <InteractiveCard className="p-6 bg-white text-foreground border border-border shadow-xl">
                <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-3">
                  <span className="p-2 bg-muted rounded-lg text-foreground">⚠️</span>
                  Timeline & Accuracy Challenges
                </h3>
                <p className="text-muted-foreground italic text-base md:text-lg font-bold">
                  "The primary challenge involved ensuring generated reports offered <span className="text-foreground font-black">irrefutable accuracy</span> and <span className="text-foreground font-black">precise time-stamping</span> for legal admissibility. Balancing this rigorous documentation requirement with the operational need for <span className="text-foreground font-black">rapid-turnover efficiency</span> remained a critical research hurdle."
                </p>
              </InteractiveCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SlideWrapper>

      {/* Slide 7: Demo Onboarding */}
      <SlideWrapper className="bg-white">
        <div className="w-full h-full flex flex-row overflow-hidden">

          {/* LEFT: Text Block */}
          <div className="w-[28%] flex-shrink-0 flex flex-col justify-center pl-10 pr-8 py-12 border-r border-border/40">
            <BlurReveal>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight font-serif text-foreground leading-tight">Prototype Demo: How it Works</h2>
              <p className="text-base md:text-lg text-primary font-extrabold mt-2 mb-10">Onboarding &amp; Role Selection</p>
            </BlurReveal>

            <StaggerContainer className="space-y-8">
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Secure Gateway</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Standardized login for all user tiers.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Role Intelligence</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Dedicated Inspector, Manager, and Owner workflows.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Adaptive UI</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Interface morphs based on permission sets.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* RIGHT: Vertical stack — 2 images only, no duplication */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 py-8 px-10 overflow-hidden">
            <BlurReveal delay={0.2} className="flex-1 w-full flex items-center justify-center">
              <img src="/Onboarding_01.png" alt="Onboarding step 1" className="max-h-full w-auto object-contain drop-shadow-xl" />
            </BlurReveal>
            <BlurReveal delay={0.4} className="flex-1 w-full flex items-center justify-center">
              <img src="/Onboarding_02.png" alt="Onboarding step 2" className="max-h-full w-auto object-contain drop-shadow-xl" />
            </BlurReveal>
          </div>

        </div>
      </SlideWrapper>

      {/* Slide 8: Maintenance & Inspector Workflow */}
      <SlideWrapper className="bg-muted/30">
        <div className="w-full h-full flex flex-row overflow-hidden">

          {/* LEFT: Text Block */}
          <div className="w-[28%] flex-shrink-0 flex flex-col justify-center pl-10 pr-8 py-12 border-r border-border/40">
            <BlurReveal>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight font-serif text-foreground leading-tight">Prototype Demo: How it Works</h2>
              <p className="text-base md:text-lg text-primary font-extrabold mt-2 mb-10">Maintenance &amp; Inspector Workflow</p>
            </BlurReveal>

            <StaggerContainer className="space-y-7">
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Finding Tasks</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Open the Taskboard to see which properties need checking, e.g. &quot;Modern Loft 4B&quot;.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Setting the View</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Align your phone with the room. Haptic feedback confirms the correct position.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Finding Issues</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">A &quot;ghost&quot; overlay shows the baseline. Use the slider to spot changes like a countertop crack.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Finish</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Record a voice note. Findings are saved in the Audit Summary.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* RIGHT: Vertical stack — 2 images only, no duplication */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 py-8 px-10 overflow-hidden">
            <BlurReveal delay={0.2} className="flex-1 w-full flex items-center justify-center">
              <img src="/Maintenance_crew_01.png" alt="Maintenance step 1" className="max-h-full w-auto object-contain drop-shadow-xl" />
            </BlurReveal>
            <BlurReveal delay={0.4} className="flex-1 w-full flex items-center justify-center">
              <img src="/Maintenance_crew_02.png" alt="Maintenance step 2" className="max-h-full w-auto object-contain drop-shadow-xl" />
            </BlurReveal>
          </div>

        </div>
      </SlideWrapper>

      {/* Slide 9: Property Manager Workflow */}
      <SlideWrapper className="bg-white">
        <div className="w-full h-full flex flex-row overflow-hidden">

          {/* LEFT: Text Block */}
          <div className="w-[28%] flex-shrink-0 flex flex-col justify-center pl-10 pr-8 py-12 border-r border-border/40">
            <BlurReveal>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight font-serif text-foreground leading-tight">Prototype Demo: How it Works</h2>
              <p className="text-base md:text-lg text-primary font-extrabold mt-2 mb-10">Property Manager Workflow</p>
            </BlurReveal>

            <StaggerContainer className="space-y-8">
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Getting Alerts</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Instant notifications when inspections finish or something needs &quot;Critical Attention&quot;.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Taking Action</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Choose to Contact Inspector, Send a Repair Team, or Start a Claim — directly from the dashboard.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Filing Claims</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Pick a platform (e.g. Airbnb), confirm the estimated cost, and submit AR evidence as proof.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* RIGHT: Vertical stack — 2 images only, no duplication */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 py-8 px-10 overflow-hidden">
            <BlurReveal delay={0.2} className="flex-1 w-full flex items-center justify-center">
              <img src="/Property_Manager_01.png" alt="Manager step 1" className="max-h-full w-auto object-contain drop-shadow-xl" />
            </BlurReveal>
            <BlurReveal delay={0.4} className="flex-1 w-full flex items-center justify-center">
              <img src="/Property_Manager_02.png" alt="Manager step 2" className="max-h-full w-auto object-contain drop-shadow-xl" />
            </BlurReveal>
          </div>

        </div>
      </SlideWrapper>

      {/* Slide 10: Property Owner Workflow */}
      <SlideWrapper className="bg-muted/30">
        <div className="w-full h-full flex flex-row overflow-hidden">

          {/* LEFT: Text Block */}
          <div className="w-[28%] flex-shrink-0 flex flex-col justify-center pl-10 pr-8 py-12 border-r border-border/40">
            <BlurReveal>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight font-serif text-foreground leading-tight">Prototype Demo: How it Works</h2>
              <p className="text-base md:text-lg text-primary font-extrabold mt-2 mb-10">Property Owner Workflow</p>
            </BlurReveal>

            <StaggerContainer className="space-y-8">
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Health Check</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Green means &quot;Good&quot;, red means &quot;Flagged&quot;. A quick status read for all properties.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Money Matters</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">A Recovery Performance chart tracks money the system has helped protect or recover.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2 mb-2">Live Status</h4>
                <p className="text-foreground/70 text-sm font-semibold leading-relaxed">A live log shows exactly where each claim stands — from &quot;Initiated&quot; to &quot;Submitted&quot;.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* RIGHT: Vertical stack — 2 images only, no duplication */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 py-8 px-10 overflow-hidden">
            <BlurReveal delay={0.2} className="flex-1 w-full flex items-center justify-center">
              <img src="/Property_Owner_01.png" alt="Owner step 1" className="max-h-full w-auto object-contain drop-shadow-xl" />
            </BlurReveal>
            <BlurReveal delay={0.4} className="flex-1 w-full flex items-center justify-center">
              <img src="/Property_Owner_02.png" alt="Owner step 2" className="max-h-full w-auto object-contain drop-shadow-xl" />
            </BlurReveal>
          </div>

        </div>
      </SlideWrapper>

      {/* Slide 10b: Extra Features — same text style, no multi-screen flow */}
      <SlideWrapper className="bg-white">
        <div className="w-full h-full flex flex-row overflow-hidden">

          {/* LEFT: Text Block */}
          <div className="w-[28%] flex-shrink-0 flex flex-col justify-center pl-10 pr-6 py-10 border-r border-border/40">
            <BlurReveal>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight font-serif text-foreground leading-tight">Prototype Demo: How it Works</h2>
              <p className="text-base md:text-lg text-primary font-bold mt-2 mb-8">Extra Features</p>
            </BlurReveal>

            <StaggerContainer className="space-y-7">
              <StaggerItem>
                <h4 className="text-base font-bold text-foreground border-b border-border pb-1 mb-1">Team Messaging</h4>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">A built-in chat so managers, cleaners, and owners can talk to each other inside the app to keep things moving.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-base font-bold text-foreground border-b border-border pb-1 mb-1">Audit Logs</h4>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">A clear history of every action taken, showing exactly who did what and when.</p>
              </StaggerItem>
              <StaggerItem>
                <h4 className="text-base font-bold text-foreground border-b border-border pb-1 mb-1">Profile Settings</h4>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">A simple area for users to manage their info, security, and app permissions.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* RIGHT: 3-column image grid */}
          <div className="flex-1 flex items-center justify-center px-8 py-10">
            <StaggerContainer className="grid grid-cols-3 gap-10 w-full max-h-[70vh]">
              <StaggerItem className="flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center overflow-hidden bg-muted">
                  <img src="/User_Messaging.png" alt="Team Messaging" className="max-h-full w-auto object-contain" />
                </div>
              </StaggerItem>
              <StaggerItem className="flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center overflow-hidden bg-muted">
                  <img src="/Audit_Log.png" alt="Audit Logs" className="max-h-full w-auto object-contain" />
                </div>
              </StaggerItem>
              <StaggerItem className="flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center overflow-hidden bg-muted">
                  <img src="/Profile.png" alt="Profile Settings" className="max-h-full w-auto object-contain" />
                </div>
              </StaggerItem>
            </StaggerContainer>
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
            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-primary uppercase tracking-tight">The Test</h3>
                  <p className="text-foreground/80 leading-relaxed font-medium">Conducted a qualitative tests with 5 participants (inspectors and owners) on X(twitter) and reddit to get feedback on the workflow.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-primary uppercase tracking-tight">Data Collected</h3>
                  <p className="text-foreground/80 leading-relaxed font-medium text-sm">We tracked "Time on Task," navigation errors, and user satisfaction scores.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-primary uppercase tracking-tight">Results</h3>
                  <p className="text-foreground/80 leading-relaxed font-medium">Users expressed willingness to use product when available, as this could help in saving time during peak seasons for short term rentals.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-muted p-5 rounded-xl border-l-4 border-accent">
                  <h3 className="font-bold text-lg text-accent mb-2 uppercase tracking-tight">Feedback</h3>
                  <p className="text-muted-foreground text-sm font-semibold leading-relaxed">
                    Users wanted more clarity on how the property owner will be important in the system and if at all they are needed for this system to be effective. Also users showed concerns on the feasibility to get short-term rental platforms to use this third-part application.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <BlurReveal delay={0.4} className="h-full flex flex-col justify-center">
            <RedditFeed />
          </BlurReveal>
        </div>
      </SlideWrapper>



      {/* SECTION 1: BUSINESS MODEL - Subscription */}
      <SlideWrapper className="bg-white">
        <div className="w-full h-full flex flex-row overflow-hidden">
          {/* LEFT SIDE TEXT */}
          <div className="w-[32%] flex-shrink-0 flex flex-col justify-center pl-12 pr-10 py-12 border-r border-border/40">
            <BlurReveal>
              <h2 className="text-3xl font-black tracking-tight font-serif text-foreground leading-tight mb-8">Business Model: Subscription & Revenue</h2>
            </BlurReveal>

            <StaggerContainer className="space-y-10">
              <StaggerItem>
                <div className="space-y-4">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-primary border-b-2 border-primary/20 pb-2">Subscription Tiers</h4>
                  <p className="text-foreground/70 text-sm font-semibold leading-relaxed">Managers choose a plan that fits their business size:</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Basic</h3>
                  <p className="text-muted-foreground text-sm font-medium">For managers with a small number of properties.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Premium</h3>
                  <p className="text-muted-foreground text-sm font-medium">Offers more tools and faster data handling.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Business</h3>
                  <p className="text-muted-foreground text-sm font-medium">The best choice for large companies with many staff members and units.</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* RIGHT SIDE VISUAL */}
          <div className="flex-1 flex items-center justify-center p-0">
            <img src="/Subscription.png" alt="Subscription Plans" className="w-[95%] h-auto max-h-[95vh] object-contain drop-shadow-2xl" />
          </div>
        </div>
      </SlideWrapper>

      {/* SECTION 2: FLEXIBLE FEES */}
      <SlideWrapper className="bg-muted/10">
        <div className="w-full h-full flex flex-row overflow-hidden">
          {/* LEFT SIDE TEXT */}
          <div className="w-[32%] flex-shrink-0 flex flex-col justify-center pl-12 pr-10 py-12 border-r border-border/40 bg-white">
            <BlurReveal>
              <h2 className="text-3xl font-black tracking-tight font-serif text-foreground leading-tight mb-12">Flexible Fees</h2>
            </BlurReveal>

            <StaggerContainer className="space-y-12">
              <StaggerItem>
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2">Claim Service Charge</h4>
                  <p className="text-foreground/70 text-base font-semibold leading-relaxed">A small fee is paid whenever a manager submits a formal claim through the app.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2">Success Fee</h4>
                  <p className="text-foreground/70 text-base font-semibold leading-relaxed">For successful claims, Snapcheck takes an estimated 5% commission from the final payout.</p>
                </div>
              </StaggerItem>

              <StaggerItem className="pt-8">
                <p className="text-xs text-muted-foreground italic font-bold border-l-4 border-primary/30 pl-4">
                  Note: These are estimated amounts; actual costs can vary depending on property size and specific claim details.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* RIGHT SIDE VISUAL */}
          <div className="flex-1 flex items-center justify-center p-10">
            <div className="w-full max-w-lg space-y-6 text-center bg-white p-10 rounded-[2rem] shadow-2xl border border-border">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-4xl">💎</div>
              <h3 className="text-2xl font-bold text-foreground">Transparent Processing</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">Standardized fee structures ensure predictable operational costs and streamlined revenue recovery.</p>
              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-xl">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Standard Flat Fee</p>
                  <p className="text-xl font-black text-primary">Low Barrier</p>
                </div>
                <div className="bg-muted p-4 rounded-xl">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Claim Success</p>
                  <p className="text-xl font-black text-secondary">5% Avg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* SECTION 3: EVALUATION & PARTICIPATION */}
      <SlideWrapper className="bg-white">
        <div className="w-full h-full flex flex-row overflow-hidden">
          {/* LEFT SIDE TEXT */}
          <div className="w-[32%] flex-shrink-0 flex flex-col justify-center pl-12 pr-10 py-12 border-r border-border/40">
            <BlurReveal>
              <h2 className="text-3xl font-black tracking-tight font-serif text-foreground leading-tight mb-12">Evaluation & Participation</h2>
            </BlurReveal>

            <StaggerContainer className="space-y-12">
              <StaggerItem>
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2">The Test</h4>
                  <p className="text-foreground/70 text-base font-semibold leading-relaxed">We tested the app with 5 people (inspectors and owners).</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2">Results</h4>
                  <p className="text-foreground/70 text-base font-semibold leading-relaxed">Everyone finished their tasks successfully, with the average check taking about 85 seconds.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-foreground border-b-2 border-border pb-2">Team Roles</h4>
                  <p className="text-foreground/70 text-base font-semibold leading-relaxed">Every member (Moses, Nnamdi, and Abdul) will explain a different part of the project during the 7-minute talk</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* RIGHT SIDE VISUAL */}
          <div className="flex-1 flex items-center justify-center p-10 bg-muted/20">
            <div className="w-full max-w-3xl grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-border flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-black">5/5</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">User Satisfaction</h3>
                  <p className="text-muted-foreground font-medium">Full target metric achievement across all moderated tester sessions.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-border flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-4xl font-black">85s</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Inspection Speed</h3>
                  <p className="text-muted-foreground font-medium text-sm">Significant reduction in documentation time compared to legacy methods.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-border">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span> Presentation Flow
                </h3>
                <div className="flex justify-between gap-4">
                  <div className="flex-1 text-center p-4 bg-muted rounded-xl font-bold">Moses</div>
                  <div className="flex-1 text-center p-4 bg-muted rounded-xl font-bold">Nnamdi</div>
                  <div className="flex-1 text-center p-4 bg-muted rounded-xl font-bold">Abdul</div>
                </div>
              </div>
            </div>
          </div>
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
