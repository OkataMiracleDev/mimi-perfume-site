import { bebas, dmSans, oswald, paytone } from '@/app/layout'
import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#0f050998] text-white overflow-hidden flex items-center">
      {/* LEFT: Text Section */}
      <div className="flex flex-col justify-center gap-8 w-full lg:w-1/2 flex-shrink-0 z-10 px-8 lg:pl-[5rem]">
        <h1 className={`${bebas.className} text-9xl md:text-8xl font-bold leading-tight`}>
          mimi Oud
        </h1>
        <p className={`${dmSans.className} -mt-[2rem] text-xl md:text-2xl max-w-xl`}>
          Step into a 4D fragrance realm where tradition meets technology.
        </p>
        <button
          className={`${dmSans.className} relative text-lg md:text-xl text-gray-800 font-semibold bg-white rounded-2xl h-fit w-fit px-6 py-3 overflow-hidden border border-purple-400 shadow-md transition-all 
          before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 
          after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 
          hover:text-gray-900 hover:shadow-purple-400 
          hover:before:w-2/4 hover:before:bg-purple-400 
          hover:after:w-2/4 hover:after:bg-purple-400`}
        >
          <p className="relative z-10">Activate the Experience</p>
        </button>
      </div>

      {/* RIGHT: 3D Spline Section */}
      <div className="absolute left-150 top-1/2 -translate-y-1/2 w-[100vw] h-[600px] md:h-[700px] flex justify-center items-center">
        <Spline
          scene="https://prod.spline.design/0RobtbLBfNnDhn0D/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default Hero
