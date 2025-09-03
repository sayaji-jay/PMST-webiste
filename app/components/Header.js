'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Mission', id: 'mission' },
    { name: 'Activities', id: 'activities' }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-15 h-15 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 p-1">
              <Image 
                src="/LogoP.jpeg" 
                alt="Logo" 
                width={56} 
                height={56} 
                className="w-full h-full object-contain rounded-full" 
              />
            </div>
            <span className="ml-3 text-orange-900 font-bold text-lg">PMST</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, color: '#ea580c' }}
                className="text-orange-900 hover:text-orange-600 font-semibold text-lg transition-all duration-300"
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Contact Link - Goes to separate page */}
            <Link href="/contact">
              <motion.button 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Contact
              </motion.button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-orange-900 p-2 rounded-lg bg-white/20 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-white/90 backdrop-blur-md rounded-lg border border-white/30 p-4"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block w-full text-left text-orange-900 hover:text-orange-600 font-semibold py-2 transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
            <Link href="/contact">
              <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="block w-full text-left bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-2"
              >
                Contact
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}