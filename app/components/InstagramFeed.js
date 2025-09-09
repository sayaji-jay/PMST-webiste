

'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const InstagramFeed = () => {

  const accessToken = "IGAAOup3wbUXFBZAE1reW9NelUtaTFZAVWtzVTZA2aVRYLS1IeEFGeVNFV29nX2dFbDQzclY3NTZAuOU1OdFlEYm1pN1UtZAW1lLTlRbklCVHphdUN0X2M3UWd1NzFTTW1MbzJILUZAKYmhFdjR3ZAnNYMGZAZAVHppemd6M0RrcXBXdG84TQZDZD";
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

  // Modal component
  const ImageModal = ({ item }) => {
    const isVideo = item.media_type === 'VIDEO';
    return (
      <div
        onClick={() => setSelected(null)}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      >
        <div
          className="relative max-w-md w-full bg-white rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
          >
            <X size={20} />
          </button>

          {isVideo ? (
            <video src={item.url} poster={item.thumbnail_url} className="w-full max-h-[500px] object-cover" controls muted />
          ) : (
            <img src={item.url} alt={item.title} className="w-full max-h-[500px] object-cover" />
          )}

          <div className="p-3">
            <p className="text-sm text-gray-600 mb-2">{item.title}</p>
            <a
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
            >
              View on Instagram
            </a>
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
        className="break-inside-avoid mb-4 cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg"
        onClick={() => setSelected(item)}
      >
        {isVideo ? (
          <>
            <video src={item.url} poster={item.thumbnail_url} className="w-full object-cover rounded-md" muted />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 rounded-full p-2">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <img src={item.url} alt={item.title} className="w-full object-cover rounded-md" loading="lazy" />
        )}

        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
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
            <div className="text-center py-12">
              <p className="text-gray-600">No Instagram posts found.</p>
            </div>
          )}
        </div>
      </div>

      {selected && <ImageModal item={selected} />}
    </>
  );
};

export default InstagramFeed;
