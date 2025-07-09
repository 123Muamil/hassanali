
"use client"
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
 
  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#1F242D] shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center h-24">

               <div className="flex flex-col items-center space-x-0">
            
              <span className="text-2xl font-bold text-[#00EEFF] ml-0">03120644706</span>
               <span className="text-2xl font-bold text-[#00EEFF] ml-0">MadniSofts</span>
            </div>


         

            {/* Right side buttons - Desktop only */}
            <div className="hidden md:flex space-x-4 items-center">
                           <Link href="/" className="block italic text-white hover:text-blue-600">Home</Link>
              <Link href="#about" className="block italic text-white hover:text-blue-600">About</Link>
              <Link href="#skills" className="block italic text-white hover:text-blue-600">Skills</Link>
              <Link href="#experience" className="block italic text-white hover:text-blue-600">Experience</Link>
              <Link href="#projects" className="block italic text-white hover:text-blue-600">Projects</Link>
              <Link href="#services" className="block italic text-white hover:text-blue-600">Services</Link>
              <Link href="#reviews" className="block italic text-white hover:text-blue-600">Reviews</Link>
              <Link href="#contact" className="block italic text-white hover:text-blue-600">Contact</Link>
            </div>

            {/* Hamburger - Mobile Only */}
            <div className="md:hidden">
              <button onClick={() => setDrawerOpen(true)} className="text-white">
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-10 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Side Drawer - Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#1F242D] shadow-lg z-50 transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
             <div className="flex flex-col items-center space-x-0">
            
              <span className="text-2xl font-bold text-[#00EEFF] ml-0">03120644706</span>
               <span className="text-2xl font-bold text-[#00EEFF] ml-0">MadniSofts</span>
            </div>
          <button onClick={() => setDrawerOpen(false)}>
            <FiX size={24} color="#FFFFFF" />
          </button>
        </div>
       <div className="space-y-4">
  <Link href="/" onClick={()=>setDrawerOpen(false)} className="block italic text-white hover:text-blue-600 border-b border-[#00EEFF4D] px-6 py-2">Home</Link>
  <Link href="#about" onClick={()=>setDrawerOpen(false)} className="block italic text-white hover:text-blue-600 border-b border-[#00EEFF4D] px-6 py-2">About</Link>
  <Link href="#experience" onClick={()=>setDrawerOpen(false)}  className="block italic text-white hover:text-blue-600 border-b border-[#00EEFF4D] px-6 py-2">Experience</Link>
  <Link href="#projects" onClick={()=>setDrawerOpen(false)} className="block italic text-white hover:text-blue-600 border-b border-[#00EEFF4D] px-6 py-2">Projects</Link>
  <Link href="#services" onClick={()=>setDrawerOpen(false)} className="block italic text-white hover:text-blue-600 border-b border-[#00EEFF4D] px-6 py-2">Services</Link>
  <Link href="#reviews" onClick={()=>setDrawerOpen(false)} className="block italic text-white hover:text-blue-600 border-b border-[#00EEFF4D] px-6 py-2">Reviews</Link>
  <Link href="#contact" onClick={()=>setDrawerOpen(false)} className="block italic text-white hover:text-blue-600 border-b border-[#00EEFF4D] px-6 py-2">Contact</Link>
</div>

      </div>
    </>
  );
}
