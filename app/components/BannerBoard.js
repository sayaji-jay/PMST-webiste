'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Eye, EyeOff } from 'lucide-react';
import { update_banner, get_banner } from '../actions/banner';

export default function BannerBoard({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    text: '',
    link: '',
    isVisible: false
  });
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  // Load current banner data when component opens
  useEffect(() => {
    if (isOpen) {
      loadCurrentData();
    }
  }, [isOpen]);

  const loadCurrentData = async () => {
    try {
      setLoadingData(true);
      const result = await get_banner();
      if (result.success && result.data) {
        setFormData({
          text: result.data.text || '',
          link: result.data.link || '',
          isVisible: result.data.isVisible || false
        });
      }
    } catch (error) {
      console.error('Failed to load current banner data:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await update_banner(formData);
      if (result.success) {
        alert('Banner updated successfully! बैनर सफलतापूर्वक अपडेट हो गया!');
        // Reload the page to reflect changes
        window.location.reload();
      } else {
        alert('Failed to update banner: ' + result.message);
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('Error updating banner: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Banner Board</h2>
                <p className="text-orange-100 text-sm">बैनर बोर्ड</p>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </motion.button>
            </div>
          </div>

          {/* Loading State */}
          {loadingData ? (
            <div className="p-8 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Loading current data...</p>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Visibility Toggle */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isVisible"
                    checked={formData.isVisible}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className="relative">
                    <div className={`w-12 h-6 rounded-full transition-colors ${formData.isVisible ? 'bg-green-500' : 'bg-gray-300'}`}>
                      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${formData.isVisible ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {formData.isVisible ? <Eye className="text-green-600" size={18} /> : <EyeOff className="text-gray-400" size={18} />}
                    <span className="font-semibold text-gray-700">
                      {formData.isVisible ? 'Visible दृश्यमान' : 'Hidden छुपा हुआ'}
                    </span>
                  </div>
                </label>
              </motion.div>

              {/* Text Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">
                  Banner Text बैनर टेक्स्ट
                </label>
                <input
                  type="text"
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  placeholder="Enter banner message यहाँ बैनर संदेश लिखें"
                  className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50 text-gray-900 font-medium placeholder-gray-500"
                />
              </motion.div>

              {/* Link Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">
                  Link URL (Optional)
                </label>
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  placeholder="https://example.com (optional)"
                  className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50 text-gray-900 font-medium placeholder-gray-500"
                />
              </motion.div>


              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Updating...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Update Banner अपडेट करें
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}