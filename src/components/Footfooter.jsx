import React from 'react'
import prLogo from '../assets/prLogo.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const Footfooter = () => {
  return (
    <div className='w-full h-52 bg-grayy rounded-tl-3xl rounded-tr-3xl flex flex-col justify-center items-center'>
        <img className='h-12 w-12 rounded-full' src={prLogo} alt="logo" />
        <div className='mt-5'>
            <ScrollLink to='Main' smooth={true} duration={500} className='text-sm m-1.5 ml-2 mr-4 group relative w-max'>
                    <span>Home</span>
                    <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
                </ScrollLink>
                <ScrollLink to='About' smooth={true} duration={500} className="text-sm m-1.5 mr-4 group relative w-max">
                    <span>About</span>
                    <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
                </ScrollLink>
                <ScrollLink to='Concert' smooth={true} duration={500} className="text-sm m-1.5 mr-4 group relative w-max">
                    <span>Concert</span>
                    <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
                </ScrollLink>
                <ScrollLink to='Gala' smooth={true} duration={500} className="text-sm m-1.5 mr-4 group relative w-max">
                    <span>Gala</span>
                    <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
                </ScrollLink>
                <ScrollLink to='Rangerz' smooth={true} duration={500} className="text-sm m-1.5 mr-4 group relative w-max">
                    <span>Rangerz</span>
                    <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
                </ScrollLink>
                <ScrollLink to='Art' smooth={true} duration={500} className="text-sm m-1.5 mr-4 group relative w-max">
                    <span>Art</span>
                    <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
                </ScrollLink>
                <ScrollLink to='Podcast' smooth={true} duration={500} className="text-sm m-1.5 mr-4 group relative w-max">
                    <span>Podcast</span>
                    <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
                </ScrollLink>
        </div>
        <div className='w-full border border-gray-200 mt-5'></div>
        <div className='mt-5'>
            <p className='font-kanit font-light leading-normal text-darkblue text-xs'>© 2024 Roger Cruz. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footfooter