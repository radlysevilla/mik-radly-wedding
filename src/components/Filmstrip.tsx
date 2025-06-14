'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = ['POY07110.jpg', 'POY07121.jpg', 'POY07403-Edit.jpg', 'POY07432.jpg', 'POY07517.jpg', 'POY07535.jpg', 'POY07546.jpg', 'POY07563.jpg', 'POY07569.jpg', 'POY07602.jpg', 'POY07609.jpg', 'POY07610.jpg', 'POY07645.jpg', 'POY07647.jpg', 'POY07665.jpg', 'POY07692.jpg', 'POY07795-Edit.jpg', 'POY07808-Edit.jpg', 'POY07842.jpg', 'POY07894.jpg', 'POY07957-Edit.jpg', 'POY07963.jpg', 'POY07989.jpg', 'POY08036-Edit.jpg', 'POY08060-Edit.jpg', 'POY08070-Edit.jpg', 'POY08134.jpg', 'POY08162.jpg', 'POY08256-Edit.jpg', 'POY08292.jpg', 'POY08342.jpg', 'POY08352.jpg', 'POY08353.jpg', 'POY08355.jpg', 'POY08469.jpg', 'POY08498.jpg', 'POY08533.jpg', 'POY08567.jpg', 'POY08635-Edit.jpg', 'POY08658-Edit.jpg', 'POY08687-Edit.jpg', 'POY08693-Edit.jpg', 'POY08733.jpg', 'POY08758.jpg', 'POY08778-Edit.jpg', 'POY08855-Edit.jpg', 'POY08862-Edit.jpg', 'POY08879.jpg', 'POY08902.jpg', 'POY08995.jpg', 'POY09026.jpg', 'POY09060-Edit.jpg', 'POY09063.jpg', 'POY09089.jpg', 'POY09126-Edit.jpg', 'POY09129-Edit.jpg', 'POY09132-Edit.jpg', 'POY09212.jpg', 'POY09230.jpg', 'POY09249.jpg', 'POY09252-Edit.jpg', 'POY09297.jpg', 'POY09302.jpg', 'POY09306.jpg', 'POY09314.jpg', 'POY09349.jpg', 'POY09371.jpg', 'POY09382.jpg', 'POY09384.jpg', 'POY09397.jpg', 'POY09410.jpg', 'POY09411.jpg', 'POY09414.jpg', 'POY09424.jpg', 'POY09428.jpg', 'POY09441.jpg', 'POY09481.jpg', 'POY09486.jpg', 'POY09508.jpg', 'POY09515.jpg', 'POY09534.jpg', 'POY09557.jpg', 'POY09558.jpg', 'POY09565.jpg', 'POY09569.jpg', 'POY09570.jpg', 'YEN07533.jpg', 'YEN07549.jpg', 'YEN07560.jpg', 'YEN07562.jpg', 'YEN07566.jpg', 'YEN07570.jpg', 'YEN07574.jpg', 'YEN07597.jpg', 'YEN07632.jpg', 'YEN07636.jpg', 'YEN07639.jpg', 'YEN07646.jpg', 'YEN07652.jpg', 'YEN07654.jpg', 'YEN07704.jpg', 'YEN07714.jpg', 'YEN07718.jpg', 'YEN07731.jpg', 'YEN07739.jpg', 'YEN07757.jpg', 'YEN07770.jpg', 'YEN07777.jpg', 'YEN07818.jpg', 'YEN07832.jpg', 'YEN07854.jpg', 'YEN07911.jpg', 'YEN07913.jpg', 'YEN07933-Edit.jpg', 'YEN07940.jpg', 'YEN07943.jpg', 'YEN07946.jpg', 'YEN07954.jpg', 'YEN07957.jpg', 'YEN07965.jpg', 'YEN07967.jpg', 'YEN07981.jpg', 'YEN07982.jpg', 'YEN07988.jpg', 'YEN07993.jpg', 'YEN07996.jpg', 'YEN08008.jpg', 'YEN08011.jpg', 'YEN08052.jpg', 'YEN08060.jpg', 'YEN08065.jpg', 'YEN08087-Edit.jpg', 'YEN08115-Edit-2.jpg', 'YEN08237.jpg', 'YEN08247.jpg', 'YEN08274.jpg', 'YEN08280.jpg', 'YEN08303.jpg', 'YEN08306.jpg', 'YEN08320-Edit.jpg', 'YEN08331-Edit.jpg', 'YEN08332.jpg', 'YEN08363.jpg', 'YEN08365.jpg', 'YEN08375.jpg', 'YEN08382.jpg', 'YEN08436-Edit.jpg', 'YEN08452-Edit.jpg', 'YEN08495.jpg', 'YEN08498.jpg', 'YEN08521.jpg', 'YEN08523.jpg', 'YEN08528.jpg', 'YEN08532.jpg', 'YEN08535.jpg', 'YEN08562.jpg', 'YEN08565.jpg', 'YEN08567.jpg', 'YEN08586.jpg', 'YEN08587.jpg', 'YEN08594.jpg', 'YEN08597.jpg', 'YEN08617.jpg', 'YEN08618.jpg', 'YEN08636.jpg', 'YEN08642.jpg', 'YEN08669-Edit.jpg', 'YEN08671-Edit.jpg', 'YEN08680-Edit.jpg', 'YEN08707.jpg', 'YEN08713.jpg', 'YEN08727.jpg', 'YEN08770.jpg', 'YEN08810.jpg', 'YEN08811.jpg', 'YEN08814.jpg', 'YEN08817.jpg', 'YEN08827.jpg', 'YEN08836.jpg', 'YEN08888.jpg', 'YEN08924.jpg', 'YEN08939.jpg', 'YEN08957.jpg', 'YEN08968.jpg', 'YEN08975.jpg', 'YEN08984.jpg', 'YEN09006.jpg', 'YEN09018.jpg', 'YEN09056.jpg', 'YEN09088.jpg', 'YEN09093.jpg', 'YEN09094.jpg', 'YEN09098.jpg', 'YEN09154-Edit.jpg', 'YEN09161-Edit.jpg'];

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