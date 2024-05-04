"use client"
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Dashboard",
    desc: "A web application dedicated to a dashboard can be extremely useful in many contexts, whether to track business data, financial analysis, health statistics, or even personal data like fitness goals",
    img: "https://res.cloudinary.com/dpklloyz5/image/upload/v1714747167/s9lrfeg7x5ttjpertgo7.jpg",
    link: "https://react-dashbord-frontend.onrender.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "ChatSphere App",
    desc: "This application aims to provide a real-time communication platform allowing users to connect to various chat rooms and share messages instantly.",
    img: "https://res.cloudinary.com/dpklloyz5/image/upload/v1714746708/qeuyrnbeazfrjmjbvsui.png",
    link: "https://chat-sphere-web.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Dev Recruit App",
    desc: "DevRecruit is committed to identifying the best developers to join its team. For this, the company seeks to implement a precise and committed technical evaluation to assess the skills of future employees in the field of development.",
    img: "https://res.cloudinary.com/dpklloyz5/image/upload/v1714748756/a6a9ouqmjpzyrqlzbry8.png",
    link: "https://dev-recruit.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "AuthFlow Pro App",
    desc: "An Authentication Management Application based on Roles and Permissions in Monorepo with MVC Architecture, Redux, and Data Modeling",
    img: "https://res.cloudinary.com/dpklloyz5/image/upload/v1714750496/nnu4t86fwbv0vhc8grru.png",
    link: "https://auth-flow-pro-client.vercel.app/",
  },
];

const Portfolio : React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
       <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen  flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className=" bg-violet-700/20  rounded-md flex flex-col gap-8 p-12 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[600px] xl:h-[300px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer| MERN Stack Dev|
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio
