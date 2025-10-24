import React from 'react'
import { GiPerfumeBottle } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import {  oswald,  } from '@/app/layout';
import { navLinks } from '@/constants/constant';
import Link from 'next/link';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

type Burger = {
  openNav:()=>void
}

const Nav = ({openNav}:Burger) => {
  return (
    <div className='flex flex-row items-center fixed z-[1000] top-3 translate-x-[50%] right-[50%] w-[80%] bg-white justify-between px-5 md:px-10 py-2 rounded-2xl'>

     <button className='text-xl md:text-3xl text-gray-800 hover:text-gray-300 flex flex-col items-center bg-none hover:bg-[#24020fd3] transition-all duration-300 rounded-xl md:p-2'>
        {/* Logo */}
        <GiPerfumeBottle />
        <p className={`text-sm md:text-base ${oswald.className} `}>ella luxe</p>
     </button> 
     
     <div className='hidden md:flex items-center space-x-20 font-bold text-gray-800 transition-all duration-300'>
        {/* Navlinks */}
        {navLinks.map((link)=>{
          return <Link href={link.url} key={link.id}> 
            <p className='hover:text-gray-600 hover:border-b-2 border-[#24020fd3]'>{link.label} </p>
          </Link>
        })}
     </div>

     <button className='text-3xl md:text-4xl text-gray-800 hover:text-gray-300 flex flex-col justify-center items-center bg-none hover:bg-[#24020fd3] transition-all duration-300 rounded-xl md:p-2'>
      {/* Cart */}
      <CiShoppingCart />
     </button>

        {/* Burger */}
      <HiMiniBars3CenterLeft onClick={openNav} className='flex md:hidden text-2xl' />
    </div>
  )
}

export default Nav