'use client';

import { motion } from 'framer-motion';

export default function MissionVision() {

  const missions = [
    "To promote education, culture, and community welfare",
    "To empower youth and women for a brighter future", 
    "To organize charitable and humanitarian services",
    "To strengthen unity and brotherhood among people"
  ];

  return (
    <section className="relative py-20 overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-900 mb-4"
            >
              हमारा उद्देश्य
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-orange-700"
            >
              Mission Statement
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(234, 88, 12, 0.2)"
                }}
                className="bg-white/10 backdrop-blur-sm border border-orange-200/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-white font-bold text-xl">✦</span>
                  </motion.div>
                  <div className="h-1 flex-1 bg-gradient-to-r from-orange-500 to-transparent rounded"></div>
                </div>
                <p className="text-gray-800 font-medium text-lg leading-relaxed">
                  {mission}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-900 mb-4"
          >
            हमारा दृष्टिकोण
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-orange-700 mb-8"
          >
            Vision Statement
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50/50 to-white/30 backdrop-blur-sm border border-orange-200/50 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              "A society that thrives on cultural values, innovation, and collective growth."
            </motion.p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full mt-6 mx-auto max-w-md"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}