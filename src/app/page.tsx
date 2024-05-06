"use client";
import { motion } from "framer-motion";
import ModelRenderer from "@/components/avatar-renderer";
import Link from "next/link";


export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="w-full h-1/2 lg:h-full relative">
        <ModelRenderer />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
           {/* TEXT TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to GHACHIM&apos;s Portfolio</h1>
           {/* TEXT DESCRIPTION */}
           <p className="md:text-xl">Hello and welcome! I&apos;m Zakaria GHACHIM, a passionate full-stack developer with a love for creating meaningful digital experiences. Whether it&apos;s crafting elegant front-end interfaces or architecting robust back-end systems, I thrive on turning ideas into reality through code.</p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4">
                <Link href="/portfolio" ><button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button></Link>
                <Link href="/contact" ><button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button></Link>
            </div>
        </div>
      </div>
      </motion.div>

  );
}
