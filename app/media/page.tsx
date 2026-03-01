"use client";

import { useState } from "react";
import { Play, Volume2, X } from "lucide-react";
import PageHero from "../components/PageHero";
import { mediaContent } from "../content/pagesContent";

export default function Media() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const { hero, videos, videoCategories } = mediaContent;

  return (
    <>
      <PageHero
        image={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* Featured Video Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Video</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button
              type="button"
              onClick={() => setSelectedVideo(0)}
              className="relative w-full block"
            >
              <img
                src={videos[0].thumbnail}
                alt={videos[0].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-emerald-600 shadow-lg">
                  <Play size={32} />
                </span>
              </div>
            </button>
            <div className="p-8">
              <span className="inline-block bg-emerald-600 text-white text-sm px-4 py-2 rounded-full mb-4">
                {videos[0].category}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {videos[0].title}
              </h3>
              <p className="text-gray-700 text-lg mb-4">{videos[0].description}</p>
              <div className="flex items-center gap-2 text-gray-600">
                <Volume2 size={20} />
                <span>Duration: {videos[0].duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            More Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.slice(1).map((video, idx) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setSelectedVideo(idx + 1)}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100 text-left"
              >
                <div className="relative w-full h-48 overflow-hidden group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <Play size={56} className="text-white opacity-80" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <span className="inline-block bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full mb-2">
                    {video.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-emerald-600 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 font-semibold mb-4">{category.count}</p>
                <p className="text-gray-700 mb-4">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={videos[selectedVideo].url}
                  title={videos[selectedVideo].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-8">
                <span className="inline-block bg-emerald-600 text-white text-sm px-4 py-2 rounded-full mb-4">
                  {videos[selectedVideo].category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {videos[selectedVideo].title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {videos[selectedVideo].description}
                </p>

                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <Volume2 size={20} />
                  <span>Duration: {videos[selectedVideo].duration}</span>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      setSelectedVideo(
                        selectedVideo === 0 ? videos.length - 1 : selectedVideo - 1
                      )
                    }
                    className="px-6 py-2 bg-gray-200 text-gray-800 font-bold rounded-full hover:bg-gray-300"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setSelectedVideo((selectedVideo + 1) % videos.length)
                    }
                    className="px-6 py-2 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
