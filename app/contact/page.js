'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Linkedin,Instagram,PhoneCall,MapPin,Mail,X } from 'lucide-react';
export default function Contact() {
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('आपका संदेश भेज दिया गया है। धन्यवाद! / Your message has been sent. Thank you!');
    setFormData({ mobile: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/pmstgnr/',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/purvanchal-maitri-samaj-trust-gandhinagar-6441313a3/',
    },
    {
      name: 'X (Twitter)',
      icon: X,
      url: 'https://x.com/pmstgnr',
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mb-8"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-orange-900 hover:text-orange-600 font-semibold transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            वापस जाएं / Back to Home
          </motion.button>
        </Link>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-orange-900 mb-4"
          >
            संपर्क करें
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-orange-700 mb-6"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            हमसे जुड़ें और समाज सेवा में अपना योगदान दें। आपके विचार और सुझाव हमारे लिए महत्वपूर्ण हैं।
            <br />
            Connect with us and contribute to social service. Your thoughts and suggestions are important to us.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-orange-200/30 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-orange-900 mb-6">संदेश भेजें / Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block text-orange-900 font-semibold mb-2">
                    मोबाइल नंबर / Mobile Number *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="अपना मोबाइल नंबर दर्ज करें"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="block text-orange-900 font-semibold mb-2">
                    ईमेल / Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="आपका ईमेल पता"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label className="block text-orange-900 font-semibold mb-2">
                    संदेश / Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="अपना संदेश यहाँ लिखें..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  संदेश भेजें / Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information & Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Social Media */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-orange-200/30 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-orange-900 mb-6">हमसे जुड़ें / Follow Us</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={`flex items-center p-4 bg-gradient-to-r bg-yellow-950 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <span className="text-2xl mr-4"><Icon/></span>
                    <div>
                      <span className="font-semibold text-lg">{social.name}</span>
                      <p className="text-sm opacity-90">हमारे {social.name} पेज पर जाएं</p>
                    </div>
                  </motion.a>
                  )}
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-orange-200/30 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-orange-900 mb-6">संपर्क जानकारी / Contact Info</h3>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex items-center p-4 rounded-xl text-orange-900"
                >
                  <span className="text-2xl mr-4"><MapPin/></span>
                  <div>
                    <h4 className="font-semibold">पता / Address</h4>
                    <p className="text-gray-700">गांधीनगर, गुजरात</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex items-center p-4 rounded-xl text-orange-900"
                >
                  <span className="text-2xl mr-4"><PhoneCall/></span>
                  <div>
                    <h4 className="font-semibold">फोन / Phone</h4>
                    <p className="text-gray-700">+91 97245 00254</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="flex items-center p-4 rounded-xl text-orange-900"
                >
                  <span className="text-2xl mr-4"><Mail/></span>
                  <div>
                    <h4 className="font-semibold ">ईमेल / Email</h4>
                    <p className="text-gray-700">pmstgnr@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}