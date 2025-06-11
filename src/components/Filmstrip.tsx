'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  'YEN09247-Edit.jpg', 'YEN09241.jpg', 'YEN09240.jpg', 'YEN09165-Edit.jpg',
  'YEN09161-Edit.jpg', 'YEN09154-Edit.jpg', 'YEN09130.jpg', 'YEN09098.jpg',
  'YEN09094.jpg', 'YEN09093.jpg', 'YEN09088.jpg', 'YEN09056.jpg',
  'YEN09018.jpg', 'YEN09006.jpg', 'YEN08999.jpg', 'YEN08984.jpg',
  'YEN08975.jpg', 'YEN08968.jpg', 'YEN08957.jpg', 'YEN08939.jpg',
  'YEN08924.jpg', 'YEN08888.jpg', 'YEN08883.jpg', 'YEN08836.jpg',
  'YEN08827.jpg', 'YEN08817.jpg', 'YEN08814.jpg', 'YEN08812.jpg',
  'YEN08811.jpg', 'YEN08810.jpg', 'YEN08794.jpg', 'YEN08770.jpg',
  'YEN08727.jpg', 'YEN08713.jpg', 'YEN08707.jpg', 'YEN08680-Edit.jpg',
  'YEN08671-Edit.jpg', 'YEN08669-Edit.jpg', 'YEN08642.jpg', 'YEN08636.jpg',
  'YEN08619.jpg', 'YEN08618.jpg', 'YEN08617.jpg', 'YEN08597.jpg',
  'YEN08594.jpg', 'YEN08587.jpg', 'YEN08586.jpg', 'YEN08567.jpg',
  'YEN08565.jpg', 'YEN08562.jpg', 'YEN08546.jpg', 'YEN08535.jpg',
  'YEN08532.jpg', 'YEN08528.jpg', 'YEN08523.jpg', 'YEN08517.jpg',
  'YEN08521.jpg', 'YEN08498.jpg', 'YEN08495.jpg', 'YEN08452-Edit.jpg',
  'YEN08436-Edit.jpg', 'YEN08427.jpg', 'YEN08405.jpg', 'YEN08382.jpg',
  'YEN08375.jpg', 'YEN08365.jpg', 'YEN08363.jpg', 'YEN08342.jpg',
  'YEN08332.jpg', 'YEN08341.jpg', 'YEN08331-Edit.jpg', 'YEN08320-Edit.jpg',
  'YEN08280.jpg', 'YEN08306.jpg', 'YEN08303.jpg', 'YEN08302.jpg',
  'YEN08274.jpg', 'YEN08247.jpg', 'YEN08237.jpg', 'YEN08166.jpg',
  'YEN08165.jpg', 'YEN08115-Edit-2.jpg', 'YEN08087-Edit.jpg', 'YEN08080.jpg',
  'YEN08060.jpg', 'YEN08065.jpg', 'YEN08052.jpg', 'YEN08032.jpg',
  'YEN08024.jpg', 'YEN08011.jpg', 'YEN08008.jpg', 'YEN07996.jpg',
  'YEN07993.jpg', 'YEN07988.jpg', 'YEN07982.jpg', 'YEN07981.jpg',
  'YEN07967.jpg', 'YEN07965.jpg', 'YEN07957.jpg', 'YEN07954.jpg'
];

interface FilmstripProps {
  direction?: 'left' | 'right';
}

export default function Filmstrip({ direction = 'left' }: FilmstripProps) {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle the images array and take only 50 random photos
    const shuffled = [...images]
      .sort(() => Math.random() - 0.5)
      .slice(0, 50);
    setShuffledImages(shuffled);
  }, []);

  return (
    <section className="py-4 bg-black overflow-hidden">
      <div className="relative">
        <div className={`flex ${direction === 'right' ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
          {[...shuffledImages, ...shuffledImages, ...shuffledImages].map((image, index) => (
            <div key={index} className="flex-shrink-0 mx-2">
              <Image
                src={`/LR-edited-size-optimized-2/${image}`}
                alt={`Prenup photo ${index + 1}`}
                width={300}
                height={200}
                className="object-cover rounded-lg shadow-lg"
                style={{ height: '200px', width: '300px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 