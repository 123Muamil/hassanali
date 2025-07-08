import React from 'react'
import Image from 'next/image';
const skills = [
  { name: 'Python', percentage: 80, image: '/python.svg' },
  { name: 'Tkinter', percentage: 75, image: '/python.svg' },
  { name: 'PYQT', percentage: 85, image: '/qt.png' },
  { name: 'Beautiful Soup', percentage: 70, image: '/bs4.png' },
  { name: 'Selenium', percentage: 65, image: '/sel.png' },
  { name: 'Node js', percentage: 90, image: '/nodejs.svg' },
 
];
const DesktopApplicationAndWebScrapping = () => {
  return (
    <>
              {skills.map((skill, index) => (
                  <div className="mt-6 flex gap-4 items-center" key={index}>
                    <div>
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex flex-col justify-start w-full text-start">
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      <div className=" w-full bg-[#323946] rounded-full h-3.5">
                        <div
                          className="bg-[#00EEFF] h-3.5 rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))} 
          </>
  )
}

export default DesktopApplicationAndWebScrapping
