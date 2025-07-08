import Image from "next/image";
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="bg-[#323946]">
      <div className="max-w-7xl text-center mx-auto px-4 py-20">
        <h2 className="text-white text-lg font-semibold mb-8">
          My <span className="text-[#00c2f3]">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
          {/* Service 1 */}
          <div className="bg-[#1c2833] rounded-lg p-6 flex flex-col justify-between max-w-[385px] h-[484px] mx-auto">
            <div className="flex flex-col items-center">
              <Image
                src="/web.jpg"
                alt="Web Development"
                className="mb-4 w-full h-[200px] rounded-[10px]"
                width={212}
                height={212}
              />
              <h3 className="text-[26px] text-[#00b386] font-bold text-center text-sm leading-tight mb-3">
                Web Development
              </h3>
              <p className="text-[16px] text-white text-justify leading-tight">
                I provide full-stack web development services, including responsive
                front-end design and robust back-end systems. Whether it’s a business
                website or a custom platform, I build secure and high-performing
                solutions tailored to your needs.
              </p>
            </div>
            <button className="cursor-pointer bg-white text-[#1c2833] text-[11px] font-semibold rounded-full w-full  py-3 mt-6 hover:-translate-y-1 transition-transform duration-300">
              Get This Service
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-[#1c2833] rounded-lg p-6 flex flex-col justify-between max-w-[385px] h-[484px] mx-auto border border-[#00e5ff]">
            <div className="flex flex-col items-center">
             <Image
                src="/web.jpg"
                alt="Web Development"
                className="mb-4 w-full h-[200px] rounded-[10px]"
                width={212}
                height={212}
              />
              <h3 className="text-[26px] text-[#00e5ff] font-bold text-center text-sm leading-tight mb-3">
                Cloud Infrastructure
              </h3>
              <p className="text-[16px] text-white text-justify leading-tight">
                I design and manage scalable cloud solutions using AWS, Azure, and
                GCP. From deployment automation to infrastructure optimization, I
                ensure your systems run reliably and efficiently in the cloud.
              </p>
            </div>
            <button className="cursor-pointer bg-[#00e5ff] text-[#1c2833] text-[11px] font-semibold rounded-full w-full  py-3 mt-6 hover:-translate-y-1 transition-transform duration-300">
              Get This Service
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-[#1c2833] rounded-lg p-6 flex flex-col justify-between max-w-[385px] h-[484px] mx-auto">
            <div className="flex flex-col items-center">
             <Image
                src="/web.jpg"
                alt="Web Development"
                className="mb-4 w-full h-[200px] rounded-[10px]"
                width={212}
                height={212}
              />
              <h3 className="text-[26px] text-[#00e5ff] font-bold text-center text-sm leading-tight mb-3">
                UI/UX Design
              </h3>
              <p className="text-[16px] text-white text-justify leading-tight">
                I craft intuitive, visually appealing UI/UX designs tailored for web
                and mobile applications. My designs focus on user experience,
                accessibility, and functionality to ensure maximum user engagement.
              </p>
            </div>
            <button className="cursor-pointer bg-white text-[#1c2833] text-[11px] font-semibold rounded-full w-full  py-3 mt-6 hover:-translate-y-1 transition-transform duration-300">
              Get This Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
