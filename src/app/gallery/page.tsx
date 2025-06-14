'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const images = ['POY07110.jpg', 'POY07121.jpg', 'POY07403-Edit.jpg', 'POY07432.jpg', 'POY07517.jpg', 'POY07535.jpg', 'POY07546.jpg', 'POY07563.jpg', 'POY07569.jpg', 'POY07602.jpg', 'POY07609.jpg', 'POY07610.jpg', 'POY07645.jpg', 'POY07647.jpg', 'POY07665.jpg', 'POY07692.jpg', 'POY07795-Edit.jpg', 'POY07808-Edit.jpg', 'POY07842.jpg', 'POY07894.jpg', 'POY07957-Edit.jpg', 'POY07963.jpg', 'POY07989.jpg', 'POY08036-Edit.jpg', 'POY08060-Edit.jpg', 'POY08070-Edit.jpg', 'POY08134.jpg', 'POY08162.jpg', 'POY08256-Edit.jpg', 'POY08292.jpg', 'POY08342.jpg', 'POY08352.jpg', 'POY08353.jpg', 'POY08355.jpg', 'POY08469.jpg', 'POY08498.jpg', 'POY08533.jpg', 'POY08567.jpg', 'POY08635-Edit.jpg', 'POY08658-Edit.jpg', 'POY08687-Edit.jpg', 'POY08693-Edit.jpg', 'POY08733.jpg', 'POY08758.jpg', 'POY08778-Edit.jpg', 'POY08855-Edit.jpg', 'POY08862-Edit.jpg', 'POY08879.jpg', 'POY08902.jpg', 'POY08995.jpg', 'POY09026.jpg', 'POY09060-Edit.jpg', 'POY09063.jpg', 'POY09089.jpg', 'POY09126-Edit.jpg', 'POY09129-Edit.jpg', 'POY09132-Edit.jpg', 'POY09212.jpg', 'POY09230.jpg', 'POY09249.jpg', 'POY09252-Edit.jpg', 'POY09297.jpg', 'POY09302.jpg', 'POY09306.jpg', 'POY09314.jpg', 'POY09349.jpg', 'POY09371.jpg', 'POY09382.jpg', 'POY09384.jpg', 'POY09397.jpg', 'POY09410.jpg', 'POY09411.jpg', 'POY09414.jpg', 'POY09424.jpg', 'POY09428.jpg', 'POY09441.jpg', 'POY09481.jpg', 'POY09486.jpg', 'POY09508.jpg', 'POY09515.jpg', 'POY09534.jpg', 'POY09557.jpg', 'POY09558.jpg', 'POY09565.jpg', 'POY09569.jpg', 'POY09570.jpg', 'YEN07533.jpg', 'YEN07549.jpg', 'YEN07560.jpg', 'YEN07562.jpg', 'YEN07566.jpg', 'YEN07570.jpg', 'YEN07574.jpg', 'YEN07597.jpg', 'YEN07621.jpg', 'YEN07632.jpg', 'YEN07636.jpg', 'YEN07639.jpg', 'YEN07646.jpg', 'YEN07652.jpg', 'YEN07654.jpg', 'YEN07704.jpg', 'YEN07714.jpg', 'YEN07718.jpg', 'YEN07731.jpg', 'YEN07739.jpg', 'YEN07757.jpg', 'YEN07770.jpg', 'YEN07777.jpg', 'YEN07818.jpg', 'YEN07832.jpg', 'YEN07854.jpg', 'YEN07911.jpg', 'YEN07913.jpg', 'YEN07933-Edit.jpg', 'YEN07940.jpg', 'YEN07943.jpg', 'YEN07946.jpg', 'YEN07954.jpg', 'YEN07957.jpg', 'YEN07965.jpg', 'YEN07967.jpg', 'YEN07981.jpg', 'YEN07982.jpg', 'YEN07988.jpg', 'YEN07993.jpg', 'YEN07996.jpg', 'YEN08008.jpg', 'YEN08011.jpg', 'YEN08024.jpg', 'YEN08052.jpg', 'YEN08060.jpg', 'YEN08065.jpg', 'YEN08087-Edit.jpg', 'YEN08115-Edit-2.jpg', 'YEN08237.jpg', 'YEN08247.jpg', 'YEN08274.jpg', 'YEN08280.jpg', 'YEN08303.jpg', 'YEN08306.jpg', 'YEN08320-Edit.jpg', 'YEN08331-Edit.jpg', 'YEN08332.jpg', 'YEN08363.jpg', 'YEN08365.jpg', 'YEN08375.jpg', 'YEN08382.jpg', 'YEN08436-Edit.jpg', 'YEN08452-Edit.jpg', 'YEN08495.jpg', 'YEN08498.jpg', 'YEN08521.jpg', 'YEN08523.jpg', 'YEN08528.jpg', 'YEN08532.jpg', 'YEN08535.jpg', 'YEN08562.jpg', 'YEN08565.jpg', 'YEN08567.jpg', 'YEN08586.jpg', 'YEN08587.jpg', 'YEN08594.jpg', 'YEN08597.jpg', 'YEN08617.jpg', 'YEN08618.jpg', 'YEN08619.jpg', 'YEN08636.jpg', 'YEN08642.jpg', 'YEN08669-Edit.jpg', 'YEN08671-Edit.jpg', 'YEN08680-Edit.jpg', 'YEN08707.jpg', 'YEN08713.jpg', 'YEN08727.jpg', 'YEN08770.jpg', 'YEN08810.jpg', 'YEN08811.jpg', 'YEN08814.jpg', 'YEN08817.jpg', 'YEN08827.jpg', 'YEN08836.jpg', 'YEN08888.jpg', 'YEN08924.jpg', 'YEN08939.jpg', 'YEN08957.jpg', 'YEN08968.jpg', 'YEN08975.jpg', 'YEN08984.jpg', 'YEN09006.jpg', 'YEN09018.jpg', 'YEN09056.jpg', 'YEN09088.jpg', 'YEN09093.jpg', 'YEN09094.jpg', 'YEN09098.jpg', 'YEN09154-Edit.jpg', 'YEN09161-Edit.jpg'];
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => setSelectedImage(null);

  const nextImage = () => {
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
    setSelectedImage(images[next]);
  };

  const prevImage = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prev);
    setSelectedImage(images[prev]);
  };

  return (
    <main className="min-h-screen bg-[#faf4eb]">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/rsvp">RSVP</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
      </nav>

      {/* Header Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/LR-edited-size-optimized-2/POY08687-Edit.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-romana font-bold tracking-wide">
            Prenup Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image}
                className="relative aspect-[3/2] cursor-pointer overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                onClick={() => openImage(image, index)}
              >
                <Image
                  src={`/LR-edited-size-optimized-2/${image}`}
                  alt={`Prenup photo ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                onClick={e => { e.stopPropagation(); prevImage(); }}
              >‹</button>
              <motion.div
                className="relative w-[90vw] h-[90vh]"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                <Image
                  src={`/LR-edited-size-optimized-2/${selectedImage}`}
                  alt="Selected prenup photo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                onClick={e => { e.stopPropagation(); nextImage(); }}
              >›</button>
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
                onClick={closeImage}
              >×</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 