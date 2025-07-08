import Image from "next/image";
import React from "react";
import { SiFiverr, SiUpwork } from "react-icons/si";
const Experience: React.FC = () => {
  return (
    <div className="bg-[#323946]">
      <div className="max-w-7xl text-center mx-auto px-4 py-20">
        <h2 className="text-white text-lg font-semibold mb-8">
          My <span className="text-[#00c2f3]">Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
          {/* Card 1 */}
          <div className="bg-[#1c2833] rounded-lg p-6 flex flex-col justify-between max-w-[385px] h-[484px] mx-auto">
            <div className="flex flex-col items-center">
              {/* <img
                src="/fiverr.png"
                alt="Green circular logo with letters 'fi' in dark green"
                className="mb-4 rounded-full"
                width={120}
                height={120}
              /> */}
              <div className="flex items-center justify-center bg-[#5BBE71] w-[100px] h-[100px] rounded-full">
                <SiFiverr size={60} color='#FFFFFF'/>
              </div>
              
              <h3 className="mt-4 text-[26px] text-[#00b386] font-bold text-center text-sm leading-tight mb-3">
                Full stack developer
                <br />
                Level2 seller
              </h3>
              <p className="text-[10px] text-white text-center mb-1 leading-tight">
                <span className="text-[16px] text-[#00e5ff] font-semibold">Fivver</span>
              </p>
              <p className="text-[16px] text-white text-justify leading-tight">
                I am professional Web Designer. I have designed more than 10 web
                template for my client. You can hire me for design your personal,
                business or other website template. You can trust me. I complied your
                work with your full satisfaction
              </p>
            </div>
            <button className="cursor-pointer bg-white text-[#1c2833] text-[11px] font-semibold rounded-full w-full py-3 mt-6 hover:-translate-y-1 transition-transform duration-300">
              Hire Me
            </button>
          </div>

          {/* Card 2 (Active) */}
          <div className="bg-[#1c2833] rounded-lg p-6 flex flex-col justify-between max-w-[385px] h-[484px] mx-auto border border-[#00e5ff]">
            <div className="flex flex-col items-center">
                   <div className="flex items-center justify-center bg-[#4EA609] w-[100px] h-[100px] rounded-full">
                <SiUpwork size={60} color='#FFFFFF'/>
              </div>
              <h3 className="mt-4 text-[26px] text-[#00e5ff] font-bold text-center text-sm leading-tight mb-3">
                Software Engineer
                <br />
                Top Rated Freelancer
              </h3>
              <p className="text-[10px] text-white text-center mb-1 leading-tight">
                <span className="text-[16px] text-[#00e5ff] font-semibold">UpWork</span>
              </p>
              <p className="text-[16px] text-white text-justify leading-tight">
                I am a skilled DevOps Engineer with a focus on automation, cloud
                infrastructure, and CI/CD. Experienced in tools like Docker,
                Kubernetes, Jenkins, Git, and AWS ensuring smooth collaboration
                between development and operations teams.
              </p>
            </div>
            <button className="cursor-pointer bg-[#00e5ff] text-[#1c2833] text-[11px] font-semibold rounded-full w-full py-3 mt-6 hover:-translate-y-1 transition-transform duration-300">
              Hire Me
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1c2833] rounded-lg p-6 flex flex-col justify-between max-w-[385px] h-[484px] mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-[#FFFFFF] w-[100px] h-[100px] rounded-full">
 <Image
                src="/madnisofts.png"
                alt="White rounded rectangle logo with text 'MADNI SOFTS' in black and blue"
                className="mb-4 rounded-full"
                width={80}
                height={80}
              />
              </div>
             
              <h3 className="mt-4 text-[26px] text-[#00e5ff] font-bold text-center text-sm leading-tight mb-3">
                Verification Engineer
              </h3>
              <p className="text-[10px] text-white text-center mb-1 leading-tight">
                <span className="text-[16px] text-[#00e5ff] font-semibold">MadniSofts</span>
              </p>
              <p className="text-[16px] text-white text-justify leading-tight">
                I am professional Graphic designer. I have designed more than 30
                template for my client. You can hire me for design your personal,
                business or other template. You can trust me. I complied your work
                with your full satisfaction
              </p>
            </div>
            <button className="cursor-pointer bg-white text-[#1c2833] text-[11px] font-semibold rounded-full w-full py-3 mt-6 hover:-translate-y-1 transition-transform duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
