
import React from 'react'
import Image from 'next/image';
const skills = [
  { name: 'React Js', percentage: 80, image: '/reactjs.svg' },
  { name: 'Redux', percentage: 75, image: '/redux.svg' },
  { name: 'Next Js', percentage: 85, image: '/next.png' },
  { name: 'HTML', percentage: 70, image: '/html5.png' },
  { name: 'CSS', percentage: 65, image: '/CSS3.png' },
  { name: 'JavaScript', percentage: 90, image: '/js.png' },
  { name: 'Bootstrap', percentage: 75, image: '/bootstrap.png' },
  { name: 'Tailwind CSS', percentage: 80, image: '/twcss.png' },
  { name: 'Material UI', percentage: 95, image: '/mui.png' },
  { name: 'React Native', percentage: 80, image: '/flutter.png' },
  { name: 'Flutter', percentage: 90, image: '/flutter.png' },
];
const Frontend = () => {
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

export default Frontend
