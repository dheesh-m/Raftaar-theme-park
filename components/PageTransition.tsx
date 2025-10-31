'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Premium easing curves
const easeInOutExpo = [0.87, 0, 0.13, 1]; // Exponential smooth curve
const premiumEase = [0.25, 0.46, 0.45, 0.94]; // Premium smooth curve

interface TransitionOverlayProps {
  isActive: boolean;
  color?: string;
  onComplete: () => void;
}

const TransitionOverlay: React.FC<TransitionOverlayProps> = ({ 
  isActive, 
  color = '#DC2626',
  onComplete 
}) => {
  const [phase, setPhase] = useState<'expand' | 'shrink' | 'hidden'>('hidden');

  useEffect(() => {
    if (isActive && phase === 'hidden') {
      // Start expanding immediately
      setPhase('expand');
      
      // After expansion (0.5s), start shrinking/fading
      const shrinkTimer = setTimeout(() => {
        setPhase('shrink');
      }, 500);
      
      // After shrink completes (0.5s), hide
      const completeTimer = setTimeout(() => {
        setPhase('hidden');
        onComplete();
      }, 1000);

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(completeTimer);
      };
    } else if (!isActive) {
      setPhase('hidden');
    }
  }, [isActive, phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'hidden' && (
        <motion.div
          key="transition-overlay"
          initial={{
            clipPath: 'circle(0% at 50% 50%)',
            scale: 0,
            opacity: 1,
            backdropFilter: 'blur(0px)'
          }}
          animate={
            phase === 'expand' ? {
              clipPath: 'circle(150% at 50% 50%)',
              scale: 1.6,
              backdropFilter: 'blur(20px)',
              opacity: 1
            } : {
              clipPath: 'circle(150% at 50% 50%)',
              scale: 0.8,
              backdropFilter: 'blur(0px)',
              opacity: 0
            }
          }
          exit={{
            opacity: 0,
            transition: { duration: 0.3 }
          }}
          transition={{
            clipPath: {
              duration: 0.5,
              ease: easeInOutExpo
            },
            scale: {
              duration: 0.5,
              ease: easeInOutExpo
            },
            backdropFilter: {
              duration: 0.5,
              ease: premiumEase
            },
            opacity: {
              duration: 0.5,
              ease: premiumEase
            }
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99999,
            pointerEvents: 'none',
            transformOrigin: 'center center',
            willChange: 'clip-path, transform, opacity, backdrop-filter',
            clipPath: 'circle(0% at 50% 50%)'
          }}
        />
      )}
    </AnimatePresence>
  );
};

// Global state for transition
let transitionState: {
  isActive: boolean;
  color: string;
  resolve: (() => void) | null;
} = {
  isActive: false,
  color: '#DC2626',
  resolve: null
};

let setOverlayState: ((state: boolean) => void) | null = null;

// Apple-style matte blur expand transition function
export const pageTransition = (
  callback: () => void,
  color: string = '#DC2626'
): Promise<void> => {
  return new Promise((resolve) => {
    console.log('🔥 pageTransition called');
    
    // Prevent scrolling during transition
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Set transition state
    transitionState.color = color;
    transitionState.resolve = () => {
      document.body.style.overflow = originalOverflow;
      resolve();
    };

    // Activate overlay immediately
    if (setOverlayState) {
      console.log('🔥 Activating overlay');
      setOverlayState(true);
    }

    // Phase 1: Expand from center (0.5s)
    setTimeout(() => {
      console.log('🔥 Executing callback');
      // Execute callback during full cover
      callback();

      // Phase 2: Shrink and fade (0.5s) - start after expand
      setTimeout(() => {
        console.log('🔥 Starting shrink/fade');
        if (setOverlayState) {
          setOverlayState(false);
        }
        
        // Complete after animation
        setTimeout(() => {
          if (transitionState.resolve) {
            transitionState.resolve();
            transitionState.resolve = null;
          }
        }, 500);
      }, 50);
    }, 500);
  });
};

// Global Transition Manager Component
export const PageTransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [overlayColor, setOverlayColor] = useState('#DC2626');

  useEffect(() => {
    setOverlayState = (active: boolean) => {
      console.log('🔥 setOverlayState called:', active);
      if (active) {
        setOverlayColor(transitionState.color);
        setIsOverlayActive(true);
      } else {
        setIsOverlayActive(false);
      }
    };

    return () => {
      setOverlayState = null;
    };
  }, []);

  return (
    <>
      {children}
      <TransitionOverlay
        isActive={isOverlayActive}
        color={overlayColor}
        onComplete={() => {
          console.log('🔥 Transition complete');
          setIsOverlayActive(false);
        }}
      />
    </>
  );
};

export default PageTransitionProvider;
