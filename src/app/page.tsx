"use client";
import { motion } from "framer-motion";
import ModelRenderer from "@/components/avatar-renderer";
import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <>
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col overflow-hidden lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="w-1/2 h-1/3 left-[20%] lg:left-0   lg:h-full relative  lg:top-[20%]">
        <Image src="/profil-logo.png"  alt="profil" width={200} height={200}  className="w-50 h-50 md:w-80 md:h-80 border-2 border-black rounded-3xl"  />  
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full mt-2 lg:mt-0 lg:w-1/2 flex flex-col gap-8 items-center justify-center">
           {/* TEXT TITLE */}
            <h1 className="text-xl md:text-3xl font-bold">Welcome to GHACHIM&apos;s Portfolio</h1>
           {/* TEXT DESCRIPTION */}
           <p className="md:text-xl">Hello and welcome! I&apos;m Zakaria GHACHIM, a passionate full-stack developer with a love for creating meaningful digital experiences. Whether it&apos;s crafting elegant front-end interfaces or architecting robust back-end systems, I thrive on turning ideas into reality through code.</p>
            {/* BUTTONS */}
            <div className="w-full flex justify-center lg:justify-start gap-4">
                <Link href="/portfolio" ><button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button></Link>
                <Link href="/contact" ><button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button></Link>
                <button className="text-xs p-4 rounded-lg ring-1 ring-black bg-black text-white">Download Resume</button>
            </div>
        </div>
      </div>
      </motion.div>
      </>
  );
}
