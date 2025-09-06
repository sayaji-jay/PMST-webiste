'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BannerBoard from './BannerBoard';

export default function Footer() {
  const [showBannerBoard, setShowBannerBoard] = useState(false);

  return (
    <>
      {/* Footer - Only visible on desktop/web view */}
      <footer className="hidden md:block bg-gradient-to-r from-orange-800 to-orange-900 text-white py-6 relative z-20 opacity-90">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            {/* Left side - Copyright */}
            <div className="text-sm opacity-80">
              © 2024 पूर्वांचल मैत्री समाज ट्रस्ट, गांधीनगर | All Rights Reserved
            </div>

            {/* Center - Links */}
            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={() => setShowBannerBoard(true)}
                className="hover:underline transition-all"
              >
                Admin
              </button>
              <a href="/privacy" className="hover:underline transition-all">
                Privacy
              </a>
              <a href="/contact" className="hover:underline transition-all">
                Contact
              </a>
            </div>

            {/* Right side - Made with Love */}
            <div className="text-sm flex items-center gap-1 opacity-80">
              Made with <span className="text-red-400">❤️</span> by
              <a 
                href="https://www.sayajiinfotech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold hover:underline transition-all"
              >
                Sayaji Infotech
              </a>
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
