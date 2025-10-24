import { bebas } from '@/app/layout'
import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

type Burger ={
  showNav:boolean;
  closeNav: () => void;
}

const MobileNav = ({closeNav , showNav}:Burger) => {

  const navOpen = showNav?"translate-y-0" : "translate-y-[-100%]"
  return (
    <div className=''>
      <div className={`${navOpen} fixed inste-0 transform transition-all duration-500 z-[1100] bg-gray-300 opacity-60 w-full h-dvh `}>

      {/* Overlay */}

      </div>
      <div className={`${navOpen} text-gray-300 fixed justify-between items-center py-[5rem] flex flex-col bg-gray-900 h-full w-full transform transition-all duration-500 delay-300 z-[1200]`}>

        {/* Navlinks */}

        {navLinks.map((link)=>{
          return <Link href={link.url} key={link.id}>
            <p className={`font-bold text-3xl  ${bebas.className} active:text-gray-700 active:text-4xl`}>{link.label} </p>
          </Link>
        })}

        {/* Clos btn */}
        <IoIosCloseCircleOutline onClick={closeNav} className='text-lg active:text-gray-700' /> 

      </div>
    </div>
  )
}

export default MobileNav