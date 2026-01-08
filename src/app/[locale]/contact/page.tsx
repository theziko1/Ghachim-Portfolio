"use client"
import React, { MouseEvent, useRef, useState } from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslations } from 'next-intl';

const Contact : React.FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const t = useTranslations("Contact");
  const text = t("title");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e : MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current!.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex gap-8 overflow-x-hidden flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-full w-full mt-8  flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full md:w-3/4 h-screen mt-4 bg-red-50 rounded-xl text-xl flex flex-col gap-6 m-auto justify-center p-24"
        >
          <span>{t("salutation")},</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>{t("desc-mail")}</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>{t("regards")}</span>
          <button className="bg-blue-200 rounded font-semibold text-gray-600 p-4">
            {t("button")}
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              {t("success-msg")}
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              {t("error-msg")}
            </span>
          )}
        </form>
      </div>
    </motion.div>
  )
}

export default Contact