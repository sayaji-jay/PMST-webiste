'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-4 sm:py-8 relative"
    >

      {/* Mobile Slokas - Above Buddha */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="lg:hidden flex flex-col items-center justify-center text-center px-4 mb-4 sm:mb-6 z-20 absolute top-8 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2"
      >
        {/* First Sloka */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="text-base sm:text-lg font-semibold text-orange-900 leading-relaxed hindi-shimmer cursor-default"
          whileHover={{ scale: 1.05, color: "#c2410c" }}
        >
          संस्कृति, संस्कार एवं शौर्य का संगम
        </motion.p>
      </motion.div>

      {/* Side Texts - Desktop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:flex w-full max-w-8xl justify-between absolute top-1/2 transform -translate-y-1/2 px-8 z-10"
      >
        {/* Left Side Text */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-1/3 flex flex-col items-center justify-center text-center px-4 break-words"
        >
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-orange-900 leading-relaxed hindi-shimmer cursor-default">
            संस्कृति, संस्कार एवं शौर्य का संगम
          </p>
        </motion.div>

        {/* Right Side Text with Centered ॐ */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-1/3 flex flex-col items-center justify-center text-center px-4 break-words"
        >
          {/* Slokas with Same Font */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-orange-900 leading-relaxed space-y-2 hindi-shimmer cursor-default text-center"
          >
            {["ॐ","असतो मा सद् गमय।", "तमसो मा ज्योतिर्गमय।", "मृत्योर्माऽमृतम् गमय ॥"].map((sloka, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.2 }}
                whileHover={{ scale: 1.05, color: "#c2410c" }}
              >
                {sloka}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Buddha Image */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex-shrink-0 z-10 mb-2 sm:mb-4 md:mb-6 -mt-16 sm:-mt-0"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 lg:w-70 lg:h-90 xl:w-80 xl:h-96 relative"
        >
          <Image
            src="/buddha.png"
            alt="Buddha"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Mobile Slokas - Below Buddha */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="lg:hidden flex flex-col items-center justify-center text-center px-4 mt-2 sm:mt-4 z-10 space-y-2"
      >
        {/* Remaining Slokas */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="text-base sm:text-lg font-semibold text-orange-900 leading-relaxed hindi-shimmer cursor-default"
          whileHover={{ scale: 1.05, color: "#c2410c" }}
        >
          ॐ <br/> असतो मा सद् गमय। <br/>
          तमसो मा ज्योतिर्गमय। <br/>
          मृत्योर्माऽमृतं गमय ॥
        </motion.p>
      </motion.div>

     {/* Bottom Text Section */}
<motion.div 
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 2.2 }}
  className="text-center z-10 -mt-8 sm:-mt-6 px-2" // <- mt ko negative kiya
>
  <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4 }}
      className="text-sm text-gray-400 mt-1"
    >
      Regd. No. A/833/Gandhinagar
  </motion.p>

  <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black text-orange-900 drop-shadow-2xl tracking-wider">
    पूर्वांचल मैत्री समाज ट्रस्ट, गांधीनगर में आपका स्वागत है।
  </h1>
  <motion.p 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 2.4 }}
    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-bold text-gray-700 drop-shadow-lg mt-2"
  >
    Welcome to Purvanchal Maitree Samaj Trust, Gandhinagar (PMST)
  </motion.p>
</motion.div>

    </motion.div>
  );
}
