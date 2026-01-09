"use client";
import { motion } from "framer-motion";
import {Link} from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";



export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col gap-y-10 overflow-hidden lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* IMAGE CONTAINER */}
        <div className="w-1/2 md:w-1/5 h-1/2 left-[30%] md:left-[20%] lg:left-0 lg:w-1/2 lg:h-full relative lg:top-[20%]">
            <Image src="/profil-logo.png"  alt="profil" width={200} height={200}  className="w-50 h-50 md:w-80 md:h-80 border-2 border-black rounded-3xl"  />  
        </div>
        

        {/* TEXT CONTAINER */}
        <div className=" h-1/3 md:h-1/2 lg:h-full mt-6 md:mt-2 lg:mt-0 lg:w-1/2 flex flex-col gap-8 items-center justify-center">
           {/* TEXT TITLE */}
            <h1 className="text-xl md:text-2xl font-bold">{t("title")}</h1>
           {/* TEXT DESCRIPTION */}
           <p className=" text-sm md:text-xl">{t("description")}</p>
            {/* BUTTONS */}
            <div className="w-full flex justify-center lg:justify-start gap-4">
                <Link href="/portfolio" ><button className="p-3 rounded-lg ring-1 ring-black bg-black text-white">{t("button-1")}</button></Link>
                <Link href="/contact" ><button className="p-3 rounded-lg ring-1 ring-black">{t("button-2")}</button></Link>
                <Link href="/CV.pdf" download="cv"  ><button className="p-3 rounded-lg ring-1 ring-black bg-black text-white">{t("button-3")}</button></Link>
            </div>
        </div>
       
      </div>
      </motion.div>
      </>
  );
}
