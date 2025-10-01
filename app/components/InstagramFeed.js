

'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
const InstagramFeed = () => {

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN || "abctoken";
  const limit = 12
  const [selected, setSelected] = useState(null);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Instagram posts
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}&limit=${limit}`
        );
        const data = await response.json();

        if (data.data) {
          const transformedPosts = data.data
            .filter(post => ['IMAGE', 'VIDEO'].includes(post.media_type))
            .map(post => ({
              id: post.id,
              url: post.media_url,
              thumbnail_url: post.thumbnail_url,
              title: post.caption ? post.caption.substring(0, 100) + '...' : 'Instagram Post',
              permalink: post.permalink,
              media_type: post.media_type,
            }));

          setInstagramPosts(transformedPosts);
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [accessToken, limit]);

  // Enhanced Modal component
  const ImageModal = ({ item }) => {
    const isVideo = item.media_type === 'VIDEO';
    return (
      <div
        onClick={() => setSelected(null)}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      >
        <div
          className="relative max-w-lg w-full bg-white rounded-xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full p-1 z-10 transition-all"
          >
            <X size={18} />
          </button>

          {/* Media content */}
          <div className="relative">
            {isVideo ? (
              <video 
                src={item.url} 
                poster={item.thumbnail_url} 
                className="w-full max-h-[400px] object-cover" 
                controls 
                autoPlay 
                muted 
                loop
              />
            ) : (
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full max-h-[400px] object-cover" 
              />
            )}
            
            {/* Media type indicator */}
            <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
              {isVideo ? '📹 VIDEO' : '📷 IMAGE'}
            </div>
          </div>

          {/* Content section */}
          <div className="p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">Caption</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.title}</p>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <span className="text-xs text-gray-500">
                {isVideo ? 'Click to play video' : 'Instagram post'}
              </span>
              <a
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all transform hover:scale-105"
              >
                <span>View on Instagram</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Image/Video grid item
  const ImageItem = ({ item }) => {
    const isVideo = item.media_type === 'VIDEO';
    return (
      <div
        className="break-inside-avoid mb-4 cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg relative group transition-all duration-300"
        onClick={() => setSelected(item)}
        title={item.title} // Add hover tooltip
      >
        {isVideo ? (
          <div className="relative">
            <video src={item.url} poster={item.thumbnail_url} className="w-full object-cover rounded-md" muted />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 rounded-full p-2 group-hover:bg-black/80 transition-all">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <img src={item.url} alt={item.title} className="w-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        )}

        {/* Hover overlay with title */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-3 w-full">
            <p className="text-white text-xs font-medium line-clamp-2">{item.title}</p>
          </div>
        </div>

        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs group-hover:bg-black/90">
          {isVideo ? 'VIDEO' : 'IMAGE'}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="min-h-screen py-8">
        <div className="container mx-auto p-4">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading Instagram posts...</p>
              </div>
            </div>
          ) : instagramPosts.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
              {instagramPosts.map((item) => (
                <ImageItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
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
          )}
        </div>
      </div>

      {selected && <ImageModal item={selected} />}
    </>
  );
};

export default InstagramFeed;
