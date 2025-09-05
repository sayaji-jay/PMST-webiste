'use client';

import { motion } from 'framer-motion';
import { Phone, User } from 'lucide-react';

export default function Members() {
  const members = [
    {
      name: "प्रवीन कुमार श्रीवास्तव",
      nameEnglish: "Pravin Kumar Shrivastava",
      position: "President",
      positionHindi: "अध्यक्ष",
      mobile: "+91 98765 43210",
      image: "/members/Pravin Kumar Shrivastava.jpeg"
    }
  ];

  return (
    <section id="members" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-900 mb-4"
          >
            हमारे सदस्य
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-orange-700 mb-4"
          >
            Our Members
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            समाज की सेवा में समर्पित हमारे प्रतिबद्ध सदस्यों से मिलें
          </motion.p>
        </motion.div>

        {/* Members Grid - 4 columns, responsive */}
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="relative group w-full max-w-xs"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-orange-200/50 rounded-3xl p-6 h-full hover:bg-white/95 transition-all duration-300 overflow-hidden shadow-lg">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-xl"></div>
                </div>

                {/* Position Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 right-4 z-20"
                >
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-orange-200 px-3 py-1.5 rounded-full shadow-lg">
                    <div className="text-xs font-bold text-center">
                      <div className="text-orange-200">{member.positionHindi}</div>
                      <div className="text-orange-300 text-[10px] font-medium">{member.position}</div>
                    </div>
                  </div>
                </motion.div>

                {/* Member Image */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-4"
                >
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-orange-200 shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.nameEnglish}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center hidden">
                      <User size={32} className="text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Member Info */}
                <div className="text-center relative z-10">
                  <motion.h4 
                    className="text-lg font-bold text-orange-900 mb-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.name}
                  </motion.h4>
                  <motion.h5 
                    className="text-md font-semibold text-orange-700 mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.nameEnglish}
                  </motion.h5>
                  
                  {/* Mobile Number */}
                  <motion.div
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    className="flex items-center justify-center gap-2 text-gray-700 bg-orange-50 rounded-full py-2 px-3"
                  >
                    <Phone size={16} className="text-orange-600" />
                    <span className="text-sm font-medium">{member.mobile}</span>
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="inline-block"
            >
              सदस्य बनें • Become a Member
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}