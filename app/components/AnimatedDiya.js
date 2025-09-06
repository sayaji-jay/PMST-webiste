'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedTree() {
  const { scrollY } = useScroll();
  
  // Transform values based on scroll position
  // Diya appears during Members section (around 2000-3000px scroll)
  // Hide during Short History section (800-1800px) and show in Members section
  const opacity = useTransform(scrollY, [0, 800, 1800, 2000, 2800, 3200], [0, 0, 0, 0.3, 0.6, 0.4]);
  
  // Scale animation for diya
  const scale = useTransform(scrollY, [1800, 2200, 2800], [0.8, 1.1, 1.3]);

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
            src="/diya.png"
            alt="Animated Mandala"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </>
  );
}