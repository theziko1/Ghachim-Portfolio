"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavLinkProps {
  link: { url: string; title: string };
}

const NavLink : React.FC<NavLinkProps> = ({link }) => {
    const pathname = usePathname()
  return (
    <Link className={`rounded p-1 ${pathname === link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
  )
}
    

export default NavLink