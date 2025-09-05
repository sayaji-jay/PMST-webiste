'use client';

import { useState, useEffect } from 'react';

export function useBannerVisibility() {
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleBannerLoaded = (event) => {
      setBannerVisible(event.detail.isVisible);
    };

    window.addEventListener('bannerLoaded', handleBannerLoaded);
    return () => {
      window.removeEventListener('bannerLoaded', handleBannerLoaded);
    };
  }, []);

  return bannerVisible;
}