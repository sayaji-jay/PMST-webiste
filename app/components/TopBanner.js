'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { get_banner } from '../actions/banner';

export default function TopBanner() {
  const [bannerData, setBannerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const result = await get_banner();
        if (result.success) {
          console.log('Banner data retrieved:', result.data);
          setBannerData(result.data);
          if (result.warning) {
            console.warn('Banner warning:', result.warning);
          }
        } else {
          console.error('Failed to fetch banner data:', result.error);
          setBannerData({ isVisible: false, text: "" });
        }
      } catch (error) {
        console.error('Failed to fetch banner data:', error);
        setBannerData({ isVisible: false, text: "" });
      } finally {
        setLoading(false);
      }
    };

    fetchBannerData();
  }, []);

  // Dispatch event when banner data changes
  useEffect(() => {
    if (!loading) {
      const isVisible = bannerData?.isVisible && bannerData?.text;
      window.dispatchEvent(new CustomEvent('bannerLoaded', { 
        detail: { isVisible: Boolean(isVisible) } 
      }));
    }
  }, [loading, bannerData]);

  // Don't render anything while loading or if banner should not be visible
  // Only show banner if it's visible AND has text content
  if (loading || !bannerData?.isVisible || !bannerData?.text?.trim()) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-4 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-center">
        {/* Main Content */}
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex items-center justify-center gap-6 text-center flex-wrap"
        >
          {/* Banner Text */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Calendar size={16} className="text-orange-100" />
            </motion.div>
            
            {/* Banner content - clickable if link exists */}
            {bannerData.link ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(bannerData.link, '_blank', 'noopener,noreferrer');
                }}
                className="group flex items-center gap-2 font-bold text-xs md:text-sm bg-white/20 hover:bg-white/30 px-2 py-1 rounded-full transition-all duration-300 cursor-pointer"
              >
                <span>{bannerData.text}</span>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <ExternalLink size={12} className="text-orange-100 group-hover:text-white" />
                </motion.div>
              </motion.div>
            ) : (
              <span className="font-bold text-xs md:text-sm bg-white/20 px-2 py-1 rounded-full">
                {bannerData.text}
              </span>
            )}
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