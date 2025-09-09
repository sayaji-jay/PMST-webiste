'use client';

import { motion } from 'framer-motion';
import { GraduationCap,PartyPopper,HandHeart ,HandFist, Rocket} from 'lucide-react';
import InstagramFeed from './InstagramFeed';


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

       <InstagramFeed/>
      

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