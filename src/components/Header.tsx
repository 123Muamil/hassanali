"use client"
import React from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import {  FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header
      className="min-h-screen bg-[#1F242D] bg-cover bg-center text-white flex flex-col md:flex-row"
      style={{ backgroundImage: "url('/header.png')" }}
    >
      {/* Left Section */}
      <section className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold mb-3">Hassan Ali</h1>
          <h2 className="text-2xl mb-4">
            And I&apos;m a&nbsp;
            <span className="text-cyan-400 font-semibold">
              <Typewriter
                words={['Top Rated Freelancer', 'Full Stack Web Developer', 'Mobile App Developer', 'Desktop App Developer', 'Web Scrapper']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="max-w-md text-sm md:text-base mb-6 leading-relaxed">
           I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 text-2xl">
            <a href="https://www.facebook.com/share/1C4L1EpzZr/" target='_blank' aria-label="LinkedIn" className="border border-[#00EEFF] p-3 rounded-full hover:-translate-y-1 transition-transform duration-300">
              <FaFacebookF color='#00EEFF' />
            </a>
             <a href="https://www.linkedin.com/in/hassan-ali-riaz-remotework?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' aria-label="GitHub" className="border border-[#00EEFF] p-3 rounded-full hover:-translate-y-1 transition-transform duration-300">
              <FaLinkedinIn color='#00EEFF' />
            </a>
 <a
  href="mailto:hassanali.m.riaz@gmial.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
  className="border border-[#00EEFF] p-3 rounded-full hover:-translate-y-1 transition-transform duration-300"
>
  <MdEmail color="#00EEFF" />
</a>

              <Link href="https://www.facebook.com/share/1C4L1EpzZr/" target='_blank' aria-label="GitHub" className="border border-[#00EEFF] p-3 rounded-full hover:-translate-y-1 transition-transform duration-300">
              <FaGithub color='#00EEFF' />
            </Link>
            
          </div>

          {/* Buttons */}
          <div className="w-full mt-4 flex gap-4">
            <button className=" w-1/2 cursor-pointer bg-cyan-500  text-white  py-3 rounded-full transition hover:-translate-y-1 transition-transform duration-300">
              Contact Me
            </button>
            <button onClick={()=>window.open('https://www.upwork.com/freelancers/~0130423deb04b204f0')} className="w-1/2 cursor-pointer border border-cyan-500 text-cyan-500  py-3 rounded-full transition hover:-translate-y-1 transition-transform duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <Image
          src="/HeroImage.png" // Replace with your actual image
          alt="Profile"
          width={500}
          height={500}
          className="rounded-xl object-cover"
        />
      </section>
    </header>
  );
};

export default Header;
