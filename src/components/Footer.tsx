'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [firstname,setFirstName]=useState('')
  const [lastname,setLastName]=useState('')
  const [phone,setPhone]=useState('')
  const [subject,setSubject]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const handleSubmit=async()=>{
    const data={
      name:firstname+lastname,
      phone,
      subject,
      email,
      message
    }
    console.log("The data is:",data)
  }
  return (
    <div className="bg-[#2c3642] text-white flex flex-col justify-between" id='contact'>
      <main className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 py-16 md:py-34 gap-12 md:gap-24">
        <section className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-white text-5xl font-bold text-center md:text-left">
            Contact <span className="text-[#00c8f8]">Me</span>
          </h2>
          <div className="text-[#00c8f8] text-3xl font-extrabold leading-tight max-w-xs md:max-w-sm">
            03120644706<br />
            <span className="italic">Madnisofts</span>
          </div>
          <p className="text-[16px] max-w-xs md:max-w-sm leading-tight text-white">
            The second project completed by Hassan - as the first one prior to this - was done exactly how it was agreed upon, and right on time. Again, Hassan is not only quite proficient in the technical domain, but also in communication and customer service. I am looking forward to start a third project with him. Highly recommended!
          </p>
          <div className="flex gap-6 text-white text-sm">
            <a href="tel:03486244319" aria-label="Phone" className="hover:text-[#00c8f8]">
              <FaPhone size={24} />
            </a>
            <a href="mailto:" aria-label="Email" className="hover:text-[#00c8f8]">
              <FaEnvelope size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#00c8f8]">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" aria-label="Location" className="hover:text-[#00c8f8]">
              <FaMapMarkerAlt size={24} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#00c8f8]">
              <FaFacebookF size={24} />
            </a>
          </div>
        </section>
        <section className="md:w-1/2 flex flex-col gap-4 max-w-md mx-auto w-full">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
              className="bg-[#12171f] text-white text-xs rounded-md px-3 py-3 w-1/2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
              className="bg-[#12171f] text-white text-xs rounded-md px-3 py-3 w-1/2 focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPhone(e.target.value)}
              className="bg-[#12171f] text-white text-xs rounded-md px-3 py-3 w-1/2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSubject(e.target.value)}
              className="bg-[#12171f] text-white text-xs rounded-md px-3 py-3 w-1/2 focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
            className="bg-[#12171f] text-white text-xs rounded-md px-3 py-3 w-full focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            value={message}
            onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>setMessage(e.target.value)}
            className="bg-[#12171f] text-white text-xs rounded-md px-3 py-3 w-full resize-none focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#12171f] text-white text-xs rounded-md py-3 w-full cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </section>
      </main>
      <footer className="bg-[#1a202c] py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-[10px] text-white">
          <span>© 2024 Hassan Ali. All rights reserved.</span>
          <button
            aria-label="Scroll to top"
            className="border border-[#00c8f8] text-[#00c8f8] p-2 rounded-sm hover:bg-[#00c8f8] hover:text-[#2c3642] transition"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FaArrowUp />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
