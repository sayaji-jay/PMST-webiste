'use client';

import { motion } from 'framer-motion';

export default function ShortHistory() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            हमारा इतिहास
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-orange-700"
          >
            Short History & Background
          </motion.h3>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm border border-orange-200/30 rounded-2xl p-6"
              >
                <motion.h4 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl font-bold text-orange-900 mb-4"
                >
                  ट्रस्ट की स्थापना
                </motion.h4>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-gray-800 leading-relaxed"
                >
                  पूर्वांचल मैत्री समाज ट्रस्ट की स्थापना गांधीनगर में समाज सेवा और सांस्कृतिक मूल्यों को बढ़ावा देने के उद्देश्य से की गई थी। यह ट्रस्ट समुदाय के कल्याण और विकास के लिए निरंतर कार्य कर रहा है।
                </motion.p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm border border-orange-200/30 rounded-2xl p-6"
              >
                <motion.h4 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl font-bold text-orange-900 mb-4"
                >
                  हमारी विरासत
                </motion.h4>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-gray-800 leading-relaxed"
                >
                  वर्षों से हमने शिक्षा, स्वास्थ्य, महिला सशक्तिकरण और युवा विकास के क्षेत्र में महत्वपूर्ण योगदान दिया है। हमारा लक्ष्य समाज के हर वर्ग के लिए बेहतर भविष्य का निर्माण करना है।
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Timeline */}
              <div className="relative">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute left-8 top-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full"
                ></motion.div>

                {/* Timeline Items */}
                {[
                  { year: "स्थापना", title: "ट्रस्ट की नींव", desc: "समाज सेवा का आरंभ" },
                  { year: "विस्तार", title: "कार्यक्रमों का विकास", desc: "शिक्षा और स्वास्थ्य सेवाएं" },
                  { year: "वर्तमान", title: "निरंतर सेवा", desc: "समुदाय का कल्याण" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    className="relative flex items-center mb-12 last:mb-0"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                    >
                      {index + 1}
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="ml-6 bg-white/15 backdrop-blur-sm border border-orange-200/30 rounded-xl p-4 flex-1"
                    >
                      <h5 className="font-bold text-orange-900 text-lg mb-1">{item.year}</h5>
                      <h6 className="font-semibold text-gray-800 mb-2">{item.title}</h6>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}