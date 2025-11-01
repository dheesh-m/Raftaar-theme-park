'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Ultra smooth easing curves for liquid-like flow
const liquidEase = [0.25, 0.1, 0.25, 1]; // Very smooth liquid flow in
const liquidEaseOut = [0.16, 1, 0.3, 1]; // Very smooth liquid flow out with slow fade
const smoothFadeIn = [0.4, 0, 0.2, 1]; // Gentle fade in
const smoothFadeOut = [0.2, 0, 0, 1]; // Very slow, gradual fade out

interface TransitionOverlayProps {
  isActive: boolean;
  color?: string;
  onComplete: () => void;
}

const TransitionOverlay: React.FC<TransitionOverlayProps> = ({ 
  isActive, 
  color = '#16213e',
  onComplete 
}) => {
  const [phase, setPhase] = useState<'expand' | 'zoom-out' | 'hidden'>('hidden');

  useEffect(() => {
    if (isActive && phase === 'hidden') {
      // Start expanding immediately
      setPhase('expand');
      
      // After expansion (0.9s), start zoom out and fade
      const zoomOutTimer = setTimeout(() => {
        setPhase('zoom-out');
      }, 900);
      
      // After zoom out completes (1s), hide
      const completeTimer = setTimeout(() => {
        setPhase('hidden');
        onComplete();
      }, 1900);

      return () => {
        clearTimeout(zoomOutTimer);
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
          data-transition-overlay
          initial={{
            scale: 0,
            opacity: 0
          }}
          animate={
            phase === 'expand' ? {
              scale: 1,
              opacity: 1
            } : {
              scale: 0,
              opacity: 0
            }
          }
          exit={{
            opacity: 0,
            scale: 0,
            transition: { 
              duration: 0.8,
              ease: smoothFadeOut
            }
          }}
          transition={{
            scale: phase === 'expand' ? {
              duration: 0.9,
              ease: liquidEase,
              type: "tween"
            } : {
              duration: 1.0,
              ease: liquidEaseOut,
              type: "tween"
            },
            opacity: phase === 'expand' ? {
              duration: 0.7,
              ease: smoothFadeIn,
              type: "tween"
            } : {
              duration: 1.0,
              ease: smoothFadeOut,
              type: "tween"
            }
          }}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '200vmax',
            height: '200vmax',
            background: color,
            borderRadius: '50%',
            zIndex: 99999,
            pointerEvents: 'none',
            transformOrigin: 'center center',
            willChange: 'transform, opacity',
            transform: 'translate(-50%, -50%)',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            WebkitTransform: 'translate(-50%, -50%)',
            WebkitTransformOrigin: 'center center',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            perspective: 1000,
            WebkitPerspective: 1000
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
  color: '#16213e',
  resolve: null
};

let setOverlayState: ((state: boolean) => void) | null = null;

// Apple-style matte blur expand transition function
export const pageTransition = (
  callback: () => void,
  color: string = '#16213e'
): Promise<void> => {
  return new Promise((resolve) => {
    console.log('🔥 pageTransition called');
    
    // Prevent scrolling during transition
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Add class for additional styling if needed
    document.body.classList.add('transition-active');

    // Set transition state
    transitionState.color = color;
    transitionState.resolve = () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove('transition-active');
      resolve();
    };

    // Activate overlay immediately
    if (setOverlayState) {
      console.log('🔥 Activating overlay');
      setOverlayState(true);
    }

    // Phase 1: Expand from center (0.9s)
    setTimeout(() => {
      console.log('🔥 Executing callback');
      // Execute callback during full cover - scroll happens here
      callback();

      // Phase 2: Shrink and fade (1.0s) - start after expand
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
        }, 1000);
      }, 50);
    }, 900);
  });
};

// Global Transition Manager Component
export const PageTransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [overlayColor, setOverlayColor] = useState('#16213e');

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
      <style jsx global>{`
        /* Ensure smooth circular transition from center - Desktop & Mobile */
        [data-transition-overlay] {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          transform-origin: center center !important;
          -webkit-transform: translate(-50%, -50%) !important;
          -webkit-transform-origin: center center !important;
          /* GPU acceleration for smooth performance */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          /* Smooth rendering */
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          [data-transition-overlay] {
            /* Enhanced mobile performance */
            will-change: transform, opacity !important;
            -webkit-will-change: transform, opacity !important;
            /* Prevent jank on mobile */
            -webkit-tap-highlight-color: transparent;
            touch-action: none;
            /* Smooth rendering on mobile */
            -webkit-transform: translate3d(-50%, -50%, 0) !important;
            transform: translate3d(-50%, -50%, 0) !important;
          }
        }
        
        /* Additional smoothness for all devices */
        [data-transition-overlay] {
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1) !important;
          -webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        }
        
        /* Prevent scroll during transition - use overflow only */
        body.transition-active {
          overflow: hidden !important;
        }
      `}</style>
    </>
  );
};

export default PageTransitionProvider;
