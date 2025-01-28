"use client"
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const items = [
  {
     id: 1,
    color: "from-purple-300 to-red-300",
    title: "Wordpress Web Development for Absolute Beginner Zero to Hero",
    img: "https://res.cloudinary.com/dpklloyz5/image/upload/v1737975870/ohpjhsmvtmw38walfyjy.jpg",
    technologies : ["MongoDB", "Express", "React", "NodeJS"],
    
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "Complete Wordpress Website Developer Course",
    img: "https://res.cloudinary.com/dpklloyz5/image/upload/v1737977446/zmpzmszlvovlnmrxjgsf.jpg",
    technologies : ["MongoDB", "Express", "React", "NodeJS"],
    
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Learn PHP and MySQL for Web Application and Web Development",
    img: "https://res.cloudinary.com/dpklloyz5/image/upload/v1737977446/dsnis1anpqzndzkp8yay.jpg",
    technologies : ["MongoDB", "Express", "React", "NodeJS"],
    
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "Linux Command-Line & Shell Scripting for Absolute Beginners",
    img: "https://res.cloudinary.com/dpklloyz5/image/upload/v1737978560/kvdiijitzxznlfux1ymt.jpg",
    technologies : ["MongoDB", "Express", "React", "NodeJS"],
    
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Git and GitHub For Beginners",
    img: "https://res.cloudinary.com/dpklloyz5/image/upload/v1737979138/gpmpjgmegkcyglfupsqq.jpg",
    technologies : ["MongoDB", "Express", "React", "NodeJS"],
    
  },
];

const Portfolio : React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
       <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-8xl text-center">
          My Certificate
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  w-screen gap-2 justify-around items-center bg-blue-400">
          
            
            {items.map((item) => (
              <div
                className={` w-11/12 h-full gap-2 items-center justify-center `}
                key={item.id}
              >
                <div className=" bg-white w-full h-[70%] border-r-4 border-yellow-400 rounded-md flex flex-col gap-6  m-4 p-12 justify-center items-center text-black">
                  <h1 className="text-xl text-center font-bold md:text-2xl">
                    {item.title}
                  </h1>
                  <div className="flex justify-center items-center  w-80 h-56 md:w-96 md:h-64 lg:w-[600px] xl:h-[300px]">
                    <Image  className="border-2 border-blue-400" src={item.img} alt="" width={200} height={200} />
                  </div>
                  <div className='grid items-center gap-4 lg:justify-between'>
                    <div className='grid grid-cols-2 text-center'>
                {item.technologies.map((item) => (
                  <span key={item} className="rounded m-2 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">{item}</span>
                ))}</div>       
              </div>
                </div>
              </div>
            ))}
          
        </div>
      </div>
      
    </motion.div>
  )
}

export default Portfolio
