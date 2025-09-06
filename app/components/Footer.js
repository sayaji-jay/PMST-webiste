'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BannerBoard from './BannerBoard';

export default function Footer() {
  const [showBannerBoard, setShowBannerBoard] = useState(false);

  return (
    <>
      {/* Footer - Only visible on desktop/web view */}
      <footer className="hidden md:block bg-gradient-to-r from-orange-800 to-orange-900 text-white py-6 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left side - Copyright */}
            <div className="flex items-center space-x-4">
              <p className="text-sm opacity-80">
                © 2024 पूर्वांचल मैत्री समाज ट्रस्ट, गांधीनगर | All Rights Reserved
              </p>
            </div>
            
            {/* Right side - Admin Link */}
            <div>
              <motion.button
                onClick={() => setShowBannerBoard(true)}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="text-sm px-4 py-2 rounded-lg border border-orange-300/30 hover:border-orange-300/60 transition-all duration-300 bg-white/10 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                  Admin
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </footer>

      {/* Banner Board Dialog */}
      {showBannerBoard && (
        <BannerBoard 
          isOpen={showBannerBoard}
          onClose={() => setShowBannerBoard(false)}
        />
      )}
    </>
  );
}