"use client"
import React, { useState } from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import DesktopApplicationAndWebScrapping from './DesktopApplicationAndWebScrapping';
import Others from './Others';

const About = () => {
  const [component, setComponent] = useState(<Frontend />);
  return (
    <div className='bg-[#1F242D]'>
      <div className="max-w-7xl text-center mx-auto px-4 py-20">
        <div className='mb-8'>
          <h2 className="text-white text-lg font-semibold mb-2">
            My <span className="text-[#00c2f3]">Skills</span>
          </h2>
          <p className='text-white'>
            Here are some of my skills on which I have been working on for the past 4 years.
          </p>
        </div>

        {/* Responsive Button Group */}
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <button
            onClick={() => setComponent(<Frontend />)}
            className='bg-[#73E6FD] text-white rounded-[10px] cursor-pointer px-6 md:px-12 py-3 hover:-translate-y-1 transition-transform duration-300'
          >
            Frontend
          </button>
          <button
            onClick={() => setComponent(<Backend />)}
            className='bg-[#73E6FD] text-white rounded-[10px] cursor-pointer px-6 md:px-12 py-3 hover:-translate-y-1 transition-transform duration-300'
          >
            Backend
          </button>
          <button
            onClick={() => setComponent(<DesktopApplicationAndWebScrapping />)}
            className='bg-[#73E6FD] text-white rounded-[10px] cursor-pointer px-6 md:px-12 py-3 hover:-translate-y-1 transition-transform duration-300'
          >
            Desktop Application & Web Scrapping
          </button>
          <button
            onClick={() => setComponent(<Others />)}
            className='bg-[#73E6FD] text-white rounded-[10px] cursor-pointer px-6 md:px-12 py-3 hover:-translate-y-1 transition-transform duration-300'
          >
            Others
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {component}
        </div>
      </div>
    </div>
  );
};

export default About;
