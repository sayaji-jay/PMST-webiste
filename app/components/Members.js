'use client';

import { motion } from 'framer-motion';
import { Phone, User } from 'lucide-react';

export default function Members() {
  const members = [
    {
      name: "राजेश कुमार",
      nameEnglish: "Rajesh Kumar",
      mobile: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "प्रिया शर्मा",
      nameEnglish: "Priya Sharma",
      mobile: "+91 87654 32109",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "अमित पटेल",
      nameEnglish: "Amit Patel",
      mobile: "+91 76543 21098",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "सुनीता देवी",
      nameEnglish: "Sunita Devi",
      mobile: "+91 65432 10987",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "विकास अग्रवाल",
      nameEnglish: "Vikas Agarwal",
      mobile: "+91 54321 09876",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "मीरा गुप्ता",
      nameEnglish: "Meera Gupta",
      mobile: "+91 43210 98765",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "संजय सिंह",
      nameEnglish: "Sanjay Singh",
      mobile: "+91 32109 87654",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "अनीता मिश्रा",
      nameEnglish: "Anita Mishra",
      mobile: "+91 21098 76543",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
              className="relative group"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-orange-200/50 rounded-3xl p-6 h-full hover:bg-white/95 transition-all duration-300 overflow-hidden shadow-lg">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-xl"></div>
                </div>

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