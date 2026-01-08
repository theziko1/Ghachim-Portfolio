'use client';

import {useEffect, useRef, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {routing, usePathname, useRouter} from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';



type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('LocaleSwitcher');
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);




  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);  

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as string;
    startTransition(() => {
      router.replace(
        {pathname, query: params},
        {locale: nextLocale}
      );
    });
  }

   const handleLocaleChange = (newLocale: string) => {
    setIsOpen(false);
    router.replace({pathname, query: params}, {locale: newLocale});
  };

  return (
    
       
      
    

    <label className='relative w-[250px] text-black'>
      <p className="sr-only">{label}</p>
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            {t('locale', {locale : defaultValue})}
            <motion.span
              animate={{rotate: isOpen ? 180 : 0}}
              transition={{duration: 0.3}}
              className="text-sm"
            >
              ▼
            </motion.span>
          </button>
    
          {/* Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -10}}
                transition={{duration: 0.25}}
                className="absolute mt-2 w-[165px] bg-white rounded-lg shadow-lg z-50 overflow-hidden"
              >
                {routing.locales.map((cur) => (
                  <li key={cur}>
                    <button
                      onClick={() => handleLocaleChange(cur)}
                      className={`w-full px-4 py-2 text-left hover:bg-blue-100 transition ${
                        locale === cur ? 'font-bold text-blue-600' : ''
                      }`}
                    >
                      {t('locale', {locale: cur})}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </label>
  );
}            