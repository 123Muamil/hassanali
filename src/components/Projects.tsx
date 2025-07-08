'use client';

import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const cards = [
  {
    title: 'Web Design',
    image: '/project1.jpeg',
  },
  {
    title: 'App Development',
    image: '/project2.png',
  },
  {
    title: 'Cloud Services',
    image: '/project3.jpeg',
  },
  {
    title: 'UI/UX Design',
    image: '/project4.jpeg',
  },
  {
    title: 'SEO Optimization',
     image: '/project5.jpeg',
  },
  {
    title: 'AI Solutions',
    image: '/project6.png',
  },
];

export default function CardGrid() {
  return (
    <div className='bg-[#1F242D]'>
      <div className="max-w-7xl text-center mx-auto px-4 py-20">
        <h2 className="text-white text-lg font-semibold mb-8">
          My <span className="text-[#00c2f3]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative  h-[259px] rounded-xl overflow-hidden"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Image
                src={card.image}
                alt={card.title}
                width={387}
                height={259}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hover:bg-gradient-to-b hover:from-cyan-400/80 hover:to-black/90" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-white">
                {/* <h2 className="font-bold text-[16px] leading-5 mb-2">{card.title}</h2> */}
                <button className="mt-40 cursor-pointer flex items-center gap-2 bg-white text-cyan-400 text-[12px] font-semibold rounded px-12 py-3 hover:-translate-y-1 transition-transform duration-300">
                  <FaSearch />
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
