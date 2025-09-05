'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function TopBanner() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 px-4 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-center">
        {/* Main Content */}
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex items-center justify-center gap-6 text-center flex-wrap"
        >
          {/* Date */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm md:text-lg bg-white/20 px-3 py-1 rounded-full">
              Website Launch - 12th Sep 2025  
            </span>
          </div>

        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30"
      />
    </motion.div>
  );
}