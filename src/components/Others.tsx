import React from 'react'
import Image from 'next/image';
const skills = [
  { name: 'Git', percentage: 80, image: '/git.png' },
  { name: 'GitHub', percentage: 75, image: '/github.png' },
  { name: 'Docker', percentage: 70, image: '/docker.svg' },
  { name: 'Netlify', percentage: 85, image: '/netlify.png' },
  { name: 'VS Code', percentage: 65, image: '/vscode.png' },
  { name: 'Postman', percentage: 90, image: '/postman.png' },
  { name: 'Vercel', percentage: 90, image: '/vercel.png' },
  { name: 'Figma', percentage: 90, image: '/figma.png' },
 
];
const Others = () => {
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

export default Others
