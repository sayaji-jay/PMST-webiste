'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedMandala() {
  const { scrollY } = useScroll();
  
  // Transform values based on scroll position
  const y = useTransform(scrollY, [0, 1000, 2000, 3000], [0, 300, 350, 400]);
  // Opacity that fades to half and stays there (not disappearing completely)
  const opacity = useTransform(scrollY, [0, 300], [0.6, 0.3]);
  const scale = useTransform(scrollY, [0, 1500, 3000], [1, 1.1, 1.2]);

  return (
    <>
      {/* Main Mandala - Continuously spinning, fades to half opacity during scroll */}
      <motion.div
        className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-5"
        style={{
          y,
          opacity,
          scale
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] relative">
          <Image
            src="/mandala.png"
            alt="Animated Mandala"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </>
  );
}