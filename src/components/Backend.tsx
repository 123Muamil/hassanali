import React from 'react'
import Image from 'next/image';
const skills = [
  { name: 'Node Js', percentage: 80, image: '/nodejs.svg' },
  { name: 'Express Js', percentage: 75, image: '/expressjs.png' },
  { name: 'Graph Ql', percentage: 85, image: '/graphql.svg' },
  { name: 'Flask', percentage: 70, image: '/flask.png' },
  { name: 'Django', percentage: 65, image: '/django.png' },
  { name: 'Nest Js', percentage: 90, image: '/nestjs.png' },
  { name: 'Python', percentage: 75, image: '/python.png' },
  { name: 'MySQL', percentage: 80, image: '/mysql.svg' },
  { name: 'Postgresql', percentage: 95, image: '/elephant.png' },
  { name: 'MongoDB', percentage: 80, image: '/mongodb.svg' },
  { name: 'Firebase', percentage: 90, image: '/firebase.svg' },
];
const Backend = () => {
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

export default Backend
