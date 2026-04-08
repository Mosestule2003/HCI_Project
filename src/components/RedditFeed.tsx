"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface Comment {
  id: string;
  username: string;
  timestamp: string;
  text: string;
  isReply?: boolean;
}

const FEEDBACK_DATA: Comment[] = [
  {
    id: '1',
    username: 'u/ShortTermPro',
    timestamp: 'just now',
    text: 'Actually looks like it could save a ton of time during peak seasons. Is there a release date?'
  },
  {
    id: '2',
    username: 'u/PropertyKing',
    timestamp: 'just now',
    text: 'Need more clarity on the property owner role... are they actually required for this to work effectively?',
    isReply: true
  },
  {
    id: '3',
    username: 'u/InspectGadget',
    timestamp: 'just now',
    text: 'Concerns about STR platforms allowing 3rd party API access. How do you handle that?'
  },
  {
    id: '4',
    username: 'u/RentalManager_X',
    timestamp: 'just now',
    text: 'I would pay for this just to avoid the back-and-forth with owners about damage proof.'
  }
];

const TypingComment = ({
  username,
  text,
  isReply,
  onComplete
}: {
  username: string;
  text: string;
  isReply?: boolean;
  onComplete: () => void
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const type = async () => {
      while (currentIndex < text.length) {
        // Random "thinking" pause
        if (Math.random() > 0.8) {
          setIsThinking(true);
          await new Promise(r => setTimeout(r, 800));
          setIsThinking(false);
        }

        const charCount = Math.floor(Math.random() * 3) + 1; // 1-3 chars at once
        currentText += text.substring(currentIndex, currentIndex + charCount);
        setDisplayedText(currentText);
        currentIndex += charCount;

        await new Promise(r => setTimeout(r, 30 + Math.random() * 50));
      }

      await new Promise(r => setTimeout(r, 500));
      onComplete();
    };

    type();
  }, [text, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`p-3 rounded-lg border border-border/40 ${isReply ? 'ml-8 bg-muted/20 border-l-4 border-l-primary/30' : 'bg-white shadow-sm'} relative`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[11px] font-bold text-primary">{username}</span>
        <span className="text-[9px] text-muted-foreground">• u/typing...</span>
      </div>
      <p className={`text-xs leading-relaxed font-medium transition-opacity duration-300 ${isThinking ? 'opacity-40 text-muted-foreground' : 'text-foreground/80'}`}>
        {displayedText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1.5 h-3 bg-primary ml-0.5 align-middle"
        />
      </p>
    </motion.div>
  );
};



export const RedditFeed = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [visibleComments, setVisibleComments] = useState<Comment[]>([]);
  const [currentTyping, setCurrentTyping] = useState<Comment | null>(null);

  useEffect(() => {
    if (!isInView) {
      setVisibleComments([]);
      setCurrentTyping(null);
      return;
    }

    let isMounted = true;

    const runSimulation = async () => {
      // Small pause after entry
      await new Promise(resolve => setTimeout(resolve, 800));

      let i = 0;
      while (isMounted && isInView) {
        const comment = FEEDBACK_DATA[i % FEEDBACK_DATA.length];
        setCurrentTyping(comment);

        const duration = (comment.text.length * 60) + 2000;
        await new Promise(resolve => setTimeout(resolve, duration));

        if (!isMounted || !isInView) break;

        setVisibleComments(prev => [...prev].slice(-2).concat(comment));
        setCurrentTyping(null);
        await new Promise(resolve => setTimeout(resolve, 2500));
        i++;

        if (i % 6 === 0) {
          await new Promise(resolve => setTimeout(resolve, 3000));
          setVisibleComments([]);
        }
      }
    };

    runSimulation();
    return () => { isMounted = false; };
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-full h-[400px] bg-white rounded-2xl shadow-2xl border border-border/50 flex flex-col overflow-hidden font-sans">
      <div className="bg-muted/10 px-4 py-3 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4500] rounded-full flex items-center justify-center text-white text-[10px] font-bold">r/</div>
          <span className="text-xs font-bold text-foreground/80 tracking-tight">r/Snapcheck_Feedback</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Live</span>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-hidden space-y-4">
        <AnimatePresence initial={false}>
          {visibleComments.map((comment, idx) => (
            <motion.div
              key={`${comment.id}-${idx}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-3 rounded-lg border border-border/40 ${comment.isReply ? 'ml-8 bg-muted/20 border-l-4 border-l-primary/30' : 'bg-white shadow-sm'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-primary">{comment.username}</span>
                <span className="text-[9px] text-muted-foreground">• {comment.timestamp}</span>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed font-medium">{comment.text}</p>

              <div className="mt-2 flex items-center gap-3 opacity-40">
                <div className="flex items-center gap-1">
                  <span className="text-[10px]">↑</span>
                  <span className="text-[10px] font-bold">Vote</span>
                  <span className="text-[10px]">↓</span>
                </div>
                <span className="text-[10px]">Reply</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {currentTyping && (
          <TypingComment
            key={currentTyping.id}
            username={currentTyping.username}
            text={currentTyping.text}
            isReply={currentTyping.isReply}
            onComplete={() => { }}
          />
        )}
      </div>
    </div>
  );
};

