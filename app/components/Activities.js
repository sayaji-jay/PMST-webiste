'use client';

import { motion } from 'framer-motion';
import { GraduationCap,PartyPopper,HandHeart ,HandFist, Rocket} from 'lucide-react';


export default function Activities() {
  // const activities = [
  //   {
  //     title: "Education Support",
  //     titleHindi: "शिक्षा सहायता",
  //     description: "Providing educational resources, scholarships, and learning opportunities for underprivileged students",
  //     icon: GraduationCap,
  //     color: "from-blue-500 to-blue-600"
  //   },
  //   {
  //     title: "Cultural Celebrations",
  //     titleHindi: "सांस्कृतिक समारोह",
  //     description: "Organizing festivals, cultural events, and traditional celebrations to preserve our heritage",
  //     icon: PartyPopper,
  //     color: "from-purple-500 to-purple-600"
  //   },
  //   {
  //     title: "Social Welfare",
  //     titleHindi: "समाज कल्याण",
  //     description: "Healthcare initiatives, food distribution, and support for elderly and disabled community members",
  //     icon: HandHeart,
  //     color: "from-green-500 to-green-600"
  //   },
  //   {
  //     title: "Empowerment Programs",
  //     titleHindi: "सशक्तिकरण कार्यक्रम",
  //     description: "Skill development, entrepreneurship training, and women empowerment initiatives",
  //     icon: HandFist,
  //     color: "from-orange-500 to-orange-600"
  //   }
  // ];


  const activities = []
  return (
    <section id="activities" className="py-20 relative overflow-hidden">
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
            हमारी गतिविधियां
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-orange-700 mb-4"
          >
            Our Activities
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            समाज की भलाई और विकास के लिए हमारे द्वारा चलाए जा रहे विभिन्न कार्यक्रम
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          
          {(activities.length === 0) ? (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-full flex justify-center"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-orange-200/30 rounded-3xl p-8 max-w-md hover:bg-white/20 transition-all duration-300 text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg mx-auto"
                >
                  <Rocket size={32} className="text-white" />
                </motion.div>
                <motion.h4 
                  className="text-xl font-bold text-orange-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  जल्द ही आ रहा है
                </motion.h4>
                <motion.h5 
                  className="text-lg font-semibold text-orange-700 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Coming Soon
                </motion.h5>
                <motion.p 
                  className="text-gray-700 leading-relaxed text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  हमारी रोमांचक गतिविधियाँ और कार्यक्रम जल्द ही यहाँ उपलब्ध होंगे। कृपया बाद में पुनः विजिट करें।
                </motion.p>
              </div>
            </motion.div>
          ) :    
          activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-orange-200/30 rounded-3xl p-6 h-full hover:bg-white/20 transition-all duration-300 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${activity.color} rounded-full blur-xl`}></div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg relative z-10`}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h4 
                    className="text-xl font-bold text-orange-900 mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {activity.titleHindi}
                  </motion.h4>
                  <motion.h5 
                    className="text-lg font-semibold text-orange-700 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {activity.title}
                  </motion.h5>
                  <motion.p 
                    className="text-gray-700 leading-relaxed text-sm"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {activity.description}
                  </motion.p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${activity.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></motion.div>
              </div>
            </motion.div>
            )})
          }
      
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
              हमसे जुड़ें • Join Us
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}