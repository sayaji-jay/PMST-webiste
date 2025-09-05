'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedTree() {
  const { scrollY } = useScroll();
  
  // Transform values based on scroll position
  // Opacity animation: starts at 0, becomes visible from second part onwards
  const opacity = useTransform(scrollY, [0, 800, 1000, 1200], [0, 0, 0.3, 0.5]);
  
  // Scale animation remains the same for a subtle zoom effect
  const scale = useTransform(scrollY, [0, 1500, 3000], [1, 1.1, 1.2]);

  return (
    <>
      {/* The animated tree remains fixed in the center */}
      <motion.div
        className="fixed left-1/2 top-1/2 sm:top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-5"
        style={{
          opacity,
          scale
        }}
      >
        <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] relative">
          <Image
            src="/Tree.png"
            alt="Animated Mandala"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </>
  );
}