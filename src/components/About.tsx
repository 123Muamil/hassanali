import React from 'react';
import Image from 'next/image';
const About = () => {
  return (
    <div className='bg-[#323946]' id='about'>
    <div className="max-w-7xl text-center  mx-auto px-4 py-20">
         <h2 className="text-white text-lg font-semibold mb-8">
      About <span className="text-[#00c2f3]">Me</span>
    </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex items-center justify-center h-[550px] w-full md:w-1/3  p-4 ">
  <div className="relative w-[363px] h-[355px] bg-[#00e5ff] text-gray-800 shadow-xl rounded-xl p-6">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-[244px] h-[240px] rounded-full border-4 border-dotted border-[#323946] bg-[#323946] overflow-hidden flex items-center justify-center">
        <Image
          src="/HeroImage.png" // 🔁 Replace with your actual image path
          alt="Profile"
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Card Content */}
      <div className="mt-[35%] text-center">
         <h2 className="text-white font-bold text-lg">Hassan Ali</h2>
        <p className="text-[#0a0a0a] text-xs font-semibold mt-1">Web Developer</p>
        <p className="text-[#0a0a0a] text-xs font-semibold mt-1">Freelancer</p>
        <p className="text-[#0a0a0a] text-xs font-semibold mt-1">Graphic Designer</p>
      </div>

    </div>
        </div>

        {/* Right Column (col-md-8 equivalent) */}
        <div className="text-start w-full md:w-2/3 p-4">
         <div className="flex items-center space-x-6 mb-8">
      <button className="text-[#00c2f3] text-xs font-semibold border-b-2 border-[#00c2f3] pb-0.5">
        Education Qualification
      </button>
      <button className="text-white text-xs font-normal">Short Course</button>
    </div>
    <div className="space-y-6 text-[10px] text-white leading-tight">
      <div>
        <h3 className="text-[#00c2f3] font-semibold text-[11px] mb-0.5">
          BSC in Automotive Engineering
        </h3>
        <p>Institute : UET Lahore, Pakistan</p>
        <p>Session  : 2022 - 26</p>
        <p>Result  : Running (7th Semester)</p>
      </div>
      <div>
        <h3 className="text-[#00c2f3] font-semibold text-[11px] mb-0.5">
          Higher Secondary School
        </h3>
        <p>Institute : The KIMS Chiniot</p>
        <p>Session  : 2020 - 22</p>
        <p>Result  : 933/1100</p>
      </div>
      <div>
        <h3 className="text-[#00c2f3] font-semibold text-[11px] mb-0.5">
          Secondary School Certificate (SSC)
        </h3>
        <p>Institute : Govt Rashid Minhass H/S School</p>
        <p>Session  : 2018 - 20</p>
        <p>Result  : 841/1100</p>
      </div>
         </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
