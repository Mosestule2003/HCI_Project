'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Shield, Crosshair, Wind, Gem, Keyboard, Clock, Activity,
  Mouse, Zap, Target, Users, Layers, Terminal, Cpu, BarChart2,
  CheckCircle, AlertTriangle, UserCheck, FlaskConical, ChevronRight,
  Database, ScanLine, Network, Sliders,
} from 'lucide-react';
import { Slide } from '@/data/slides';

// ── Icon registry (Lucide only, no AI-generated icons) ──────────────────────
const ICONS: Record<string, React.FC<{ className?: string; strokeWidth?: number | string }>> = {
  crosshair: Crosshair, wind: Wind, gem: Gem,
  keyboard: Keyboard, clock: Clock, activity: Activity,
  mouse: Mouse, zap: Zap, target: Target,
  users: Users, layers: Layers, terminal: Terminal,
  cpu: Cpu, bar: BarChart2, shield: Shield,
  check: CheckCircle, alert: AlertTriangle,
  userCheck: UserCheck, flask: FlaskConical,
  database: Database, scan: ScanLine,
  network: Network, sliders: Sliders,
};

// ── Animation presets ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as number[] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.4 },
});

// ── Typography helpers ───────────────────────────────────────────────────────
const BADGE = 'text-[14px] font-700 tracking-[0.1em] uppercase text-[#16A34A] mb-4 block';
const H2    = 'text-[40px] sm:text-[48px] font-800 tracking-tight text-[#0a0a0a] leading-tight mb-6';
const BODY  = 'text-[18px] font-400 text-[#1f2937] leading-[1.7] mb-8';

// ── Reusable icon bullet ─────────────────────────────────────────────────────
interface BItem { icon: string; text: string; sub?: string }

function IconBullet({ item, delay = 0 }: { item: BItem; delay?: number }) {
  const Icon = ICONS[item.icon] || ChevronRight;
  return (
    <motion.div {...fadeUp(delay)} className="flex gap-4 items-start py-2">
      <span className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center">
        <Icon className="w-4 h-4 text-[#16A34A]" strokeWidth={2.5} />
      </span>
      <div className="flex-1">
        <p className="text-[18px] font-700 text-[#0a0a0a] leading-snug">{item.text}</p>
        {item.sub && <p className="text-[15px] font-400 text-[#374151] mt-1 leading-relaxed">{item.sub}</p>}
      </div>
    </motion.div>
  );
}

// ── Solid card ───────────────────────────────────────────────────────────────
function Card({
  children,
  accent = false,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className={`bg-white border border-[#e5e7eb] rounded-xl shadow-sm ${
        accent ? 'border-l-[3px] border-l-[#16A34A]' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TITLE SLIDE
// ─────────────────────────────────────────────────────────────────────────────
export function TitleSlide({ slide }: { slide: Slide }) {
  const isEnd = slide.id === 'slide-end';

  return (
    <div className="relative h-full flex flex-col items-center justify-center text-center overflow-hidden bg-white">

      {/* Minecraft world wallpaper — very faint background wash */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/illustrations/mc-world.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.35]"
          unoptimized
          priority
        />
      </div>

      {/* Subtle pixel grid overlay */}
      <div className="absolute inset-0 pixel-bg opacity-40 pointer-events-none" />

      {/* Green accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#16A34A]" />

      <div className="relative z-10 px-12 max-w-3xl w-full">
        {isEnd ? (
          <>
            {/* Creeper logo mark */}
            <motion.div {...fadeIn(0)} className="flex justify-center mb-8">
              <div className="relative w-20 h-20">
                <Image
                  src="/illustrations/creeper.png"
                  alt="Creeper"
                  fill
                  className="object-contain opacity-20"
                  unoptimized
                />
              </div>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="text-[64px] font-800 tracking-tight text-[#0a0a0a] mb-6">
              {slide.title}
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-[24px] font-500 text-[#0a0a0a] whitespace-pre-line leading-relaxed mb-10">
              {slide.subtitle}
            </motion.p>

            <motion.p {...fadeIn(0.35)} className="text-[20px] text-[#16A34A] font-600">
              Questions are welcome.
            </motion.p>
          </>
        ) : (
          <>
            {/* Creeper illustration — top right, watermark style */}
            <div className="absolute top-6 right-8 w-24 h-24 pointer-events-none opacity-[0.12]">
              <Image
                src="/illustrations/creeper-hd.png"
                alt=""
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Topic badge */}
            <motion.div {...fadeIn(0)} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] mb-8">
              <span className="text-[13px] font-700 tracking-widest uppercase text-[#16A34A]">
                Minecraft Java Edition · Behavioral Biometrics · Machine Learning
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-[48px] sm:text-[60px] font-800 tracking-tight text-[#0a0a0a] leading-[1.1] mb-6"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-[20px] font-400 text-[#374151] max-w-3xl mx-auto leading-relaxed mb-12"
            >
              {slide.subtitle}
            </motion.p>

            {/* Author card */}
            <motion.div {...fadeUp(0.32)}>
              <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-[#e5e7eb] rounded-xl shadow-sm px-10 py-5 mx-auto">
                <div className="text-center sm:text-left">
                  <p className="text-[16px] font-700 text-[#0a0a0a]">Timothy Britcliffe</p>
                  <p className="text-[14px] text-[#6b7280]">Thompson Rivers University</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-[#e5e7eb]" />
                <div className="text-center sm:text-left">
                  <p className="text-[16px] font-700 text-[#0a0a0a]">Kpughur-Tule Tertsegha Moses</p>
                  <p className="text-[14px] text-[#6b7280]">Thompson Rivers University · March 13, 2026</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Green terrain silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-10 fill-[#16A34A] opacity-[0.12]">
          {Array.from({ length: 90 }, (_, i) => {
            const heights = [20,10,28,16,8,32,20,4,16,24,10,18,30,18,8,26,20,4,12,20,28,16,8,32,18,10,20,6,24,18,10,20,32,10,18,28,16,8,6,20];
            const h = heights[i % heights.length];
            return <rect key={i} x={i * 16} y={40 - h} width="16" height={h} />;
          })}
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT SLIDE
// ─────────────────────────────────────────────────────────────────────────────
export function ContentSlide({ slide }: { slide: Slide }) {
  const c = slide.content!;

  return (
    <div className="flex flex-col h-full px-10 py-8 overflow-y-auto bg-white">
      {c.badge && <span className={BADGE}>{c.badge}</span>}
      <motion.h2 {...fadeUp(0)} className={H2}>{slide.title}</motion.h2>

      {/* Highlighted question or hypothesis */}
      {(c.question || c.hypothesis) && (
        <Card accent delay={0.1} className="p-6 mb-6">
          <p className="text-[20px] font-500 text-[#0a0a0a] leading-relaxed italic">
            &ldquo;{c.question ?? c.hypothesis}&rdquo;
          </p>
        </Card>
      )}

      {c.description && (
        <motion.p {...fadeUp(0.18)} className={BODY}>
          {c.description}
        </motion.p>
      )}

      {/* Bullet card */}
      {c.bullets && !c.twoCol && (
        <Card delay={0.22} className="p-5 flex-1">
          <div className="space-y-1">
            {c.bullets.map((b, i) => (
              <IconBullet key={i} item={b} delay={0.25 + i * 0.08} />
            ))}
          </div>
        </Card>
      )}

      {/* Two column layout */}
      {c.twoCol && (
        <div className="grid grid-cols-2 gap-5 flex-1">
          <Card delay={0.15} className="p-6">
            {c.twoCol.leftTitle && (
              <h3 className="text-[20px] font-800 text-[#0a0a0a] mb-4 border-b border-[#e5e7eb] pb-3">
                {c.twoCol.leftTitle}
              </h3>
            )}
            <div className="space-y-1">
              {c.twoCol.left.map((b, i) => (
                <IconBullet key={i} item={b} delay={0.18 + i * 0.08} />
              ))}
            </div>
          </Card>
          <Card delay={0.22} className="p-6">
            {c.twoCol.rightTitle && (
              <h3 className="text-[20px] font-800 text-[#0a0a0a] mb-4 border-b border-[#e5e7eb] pb-3">
                {c.twoCol.rightTitle}
              </h3>
            )}
            <div className="space-y-1">
              {c.twoCol.right.map((b, i) => (
                <IconBullet key={i} item={b} delay={0.25 + i * 0.08} />
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODEL SLIDE — pipeline / steps
// ─────────────────────────────────────────────────────────────────────────────
const STEP_ICONS = [Database, ScanLine, Keyboard, Mouse];

export function ModelSlide({ slide }: { slide: Slide }) {
  const c = slide.content!;

  return (
    <div className="flex flex-col h-full px-10 py-8 overflow-y-auto bg-white">
      {c.badge && <span className={BADGE}>{c.badge}</span>}
      <motion.h2 {...fadeUp(0)} className={H2}>{slide.title}</motion.h2>

      {c.description && (
        <motion.p {...fadeUp(0.1)} className={BODY}>{c.description}</motion.p>
      )}

      {c.pipeline && (
        <div className="grid grid-cols-2 gap-3 flex-1">
          {c.pipeline.map((step, i) => {
            const Icon = STEP_ICONS[i % STEP_ICONS.length];
            return (
              <motion.div
                key={step.step}
                {...fadeUp(0.1 + i * 0.1)}
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.09)' }}
                className="bg-white border border-[#e5e7eb] rounded-xl shadow-sm p-6 flex gap-5 items-start"
              >
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#16A34A]" strokeWidth={2} />
                  </div>
                  <span className="text-[12px] font-800 text-[#16A34A] tracking-wider">
                    {String(step.step).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="text-[18px] font-700 text-[#0a0a0a] mb-2 leading-snug">{step.title}</p>
                  <p className="text-[15px] font-400 text-[#374151] leading-relaxed">{step.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CANVAS SLIDE — figure only, image fills the frame
// ─────────────────────────────────────────────────────────────────────────────
export function CanvasSlide({ slide }: { slide: Slide }) {
  const c = slide.content!;

  return (
    <div className="flex flex-col h-full px-8 py-5 overflow-hidden bg-white">
      {c.badge && <span className={BADGE}>{c.badge}</span>}
      <motion.h2 {...fadeUp(0)} className={H2} style={{ marginBottom: '12px' }}>
        {slide.title}
      </motion.h2>

      {c.figure && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 min-h-0 flex flex-col bg-white border border-[#e5e7eb] rounded-xl shadow-sm overflow-hidden"
        >
          {/* Figure label strip */}
          <div className="px-6 py-3 border-b border-[#e5e7eb] bg-[#f9fafb] shrink-0">
            <span className="text-[13px] font-700 tracking-[0.06em] uppercase text-[#374151]">
              {c.figure.label}
            </span>
          </div>

          {/* Image fills all remaining space */}
          <div className="relative flex-1 min-h-0 bg-white">
            <Image
              src={c.figure.src}
              alt={c.figure.label}
              fill
              className="object-contain p-5"
              unoptimized
              priority
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ANALYSIS SLIDE — two column strengths vs challenges
// ─────────────────────────────────────────────────────────────────────────────
export function AnalysisSlide({ slide }: { slide: Slide }) {
  const c = slide.content!;
  const CheckIcon = CheckCircle;
  const AlertIcon = AlertTriangle;

  return (
    <div className="flex flex-col h-full px-10 py-8 overflow-y-auto bg-white">
      <motion.h2 {...fadeUp(0)} className={H2}>{slide.title}</motion.h2>

      {c.twoCol && (
        <div className="grid grid-cols-2 gap-5 flex-1">

          {/* Strengths */}
          <motion.div
            {...fadeUp(0.1)}
            className="bg-white border border-[#e5e7eb] border-t-[3px] border-t-[#16A34A] rounded-xl shadow-sm p-8 flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center shrink-0">
                <CheckIcon className="w-5 h-5 text-[#16A34A]" strokeWidth={2.5} />
              </div>
              <h3 className="text-[18px] font-700 text-[#0a0a0a] tracking-tight">Strengths</h3>
            </div>
            <div className="space-y-1">
              {c.twoCol.left.map((b, i) => (
                <IconBullet key={i} item={b} delay={0.15 + i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div
            {...fadeUp(0.2)}
            className="bg-white border border-[#e5e7eb] border-t-[3px] border-t-amber-400 rounded-xl shadow-sm p-8 flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <AlertIcon className="w-5 h-5 text-amber-500" strokeWidth={2.5} />
              </div>
              <h3 className="text-[18px] font-700 text-[#0a0a0a] tracking-tight">Challenges</h3>
            </div>
            <div className="space-y-1">
              {c.twoCol.right.map((b, i) => (
                <IconBullet key={i} item={b} delay={0.25 + i * 0.08} />
              ))}
            </div>
          </motion.div>

        </div>
      )}
    </div>
  );
}
