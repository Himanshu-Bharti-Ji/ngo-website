"use client";

import { useState } from "react";
import { Image as ImageIcon, X, BookOpen, Stethoscope, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import { galleryContent } from "../content/pagesContent";

const categoryIcons: Record<string, React.ReactNode> = {
  Education: <BookOpen size={48} className="text-emerald-600" />,
  Healthcare: <Stethoscope size={48} className="text-emerald-600" />,
  Community: <Users size={48} className="text-emerald-600" />,
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { hero, images, categories } = galleryContent;

  return (
    <>
      <PageHero
        image={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Work in Pictures
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(index)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 text-left"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="inline-block bg-emerald-500 text-white text-xs px-3 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="font-bold text-white text-sm lg:text-base">
                    {image.title}
                  </h3>
                  <p className="text-slate-200 text-xs mt-1">{image.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4 flex justify-center">
                  {categoryIcons[cat.title] || <ImageIcon size={48} className="text-emerald-600" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {cat.title}
                </h3>
                <p className="text-gray-700 mb-4 text-center">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-emerald-600 text-white text-sm px-4 py-2 rounded-full mb-3">
                  {images[selectedImage].category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {images[selectedImage].title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {images[selectedImage].description}
                </p>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() =>
                      setSelectedImage(
                        selectedImage === 0 ? images.length - 1 : selectedImage - 1
                      )
                    }
                    className="px-6 py-2 bg-gray-200 text-gray-800 font-bold rounded-full hover:bg-gray-300"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setSelectedImage((selectedImage + 1) % images.length)
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
