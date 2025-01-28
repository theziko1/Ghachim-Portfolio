"use client"

import { motion , AnimatePresence } from "framer-motion"
import Navbar from "./Navbar"
import { usePathname } from "next/navigation";
import React from "react";

const TransitionProvider = ({ children } : { children: React.ReactNode }) => {
    const pathName = usePathname();
  return (
      <AnimatePresence mode="wait">
        <div key={pathName} className="w-full h-full  bg-gradient-to-b from-purple-50 to-blue-400">
            <motion.div 
              className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
              animate={{ height: "0vh" }}
              exit={{ height: "140vh" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
             <motion.div
            className="fixed m-auto top-0 bottom-0 left-0 right-0 first-letter:capitalize text-white text-8xl cursor-default z-50 w-fit h-fit"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            {pathName.substring(1)}
            </motion.div>
            <motion.div
            className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
            initial={{ height: "140vh" }}
            animate={{ height: "0vh", transition: { delay: 0.5 } }}
            />
            <div className="h-24">
              <Navbar/>
            </div>
          <div className="h-[calc(100vh-6rem)]">
           {children}
          </div>
        </div>
      </AnimatePresence>
    )
}

export default TransitionProvider