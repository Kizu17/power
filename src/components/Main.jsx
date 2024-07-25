import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import kumpleto from '../assets/kumpleto.jpeg';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Main = () => {
  return (
    <div id='Main' className='w-full h-full bg-custom-image bg-cover bg-center'> 
        <div className='font-kanit font-normal w-full md:relative md:flex md:justify-center md:flex-wrap md:gap-1 hidden'>
            <ScrollLink to='Main' smooth={true} duration={500} className='text-lg m-1.5 ml-28 mr-28 group relative w-max'>
                <span>Home</span>
                <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
            </ScrollLink>
            <ScrollLink to='About' smooth={true} duration={500} className="text-lg m-1.5 mr-28 group relative w-max">
                <span>About</span>
                <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
            </ScrollLink>
            <ScrollLink to='Concert' smooth={true} duration={500} className="text-lg m-1.5 mr-28 group relative w-max">
                <span>Concert</span>
                <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
            </ScrollLink>
            <ScrollLink to='Gala' smooth={true} duration={500} className="text-lg m-1.5 mr-28 group relative w-max">
                <span>Gala</span>
                <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
            </ScrollLink>
            <ScrollLink to='Rangerz' smooth={true} duration={500} className="text-lg m-1.5 mr-28 group relative w-max">
                <span>Rangerz</span>
                <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
            </ScrollLink>
            <ScrollLink to='Art' smooth={true} duration={500} className="text-lg m-1.5 mr-28 group relative w-max">
                <span>Art</span>
                <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
            </ScrollLink>
            <ScrollLink to='Podcast' smooth={true} duration={500} className="text-lg m-1.5 mr-28 group relative w-max">
                <span>Podcast</span>
                <span className='absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-lightblue group-hover:w-full'></span>
            </ScrollLink>
        </div>

        <div className='relative w-full'>
            <img className='w-full object-cover' style={{ height: '30rem' }} src={kumpleto} alt="bg" />
            <div className='absolute inset-0 bg-black opacity-25'></div>
        </div>
        <div className="font-kanit font-semibold leading-normal text-black mt-8 text-center md:text-8xl text-4xl">
            POWER RANGERZ
        </div>
        <div className="font-kanit font-light leading-normal text-darkblue text-center md:text-md text-xs">
        Capturing the essence of our bond through snapshots and tales of our journey together.
        </div>
        <div className='text-end mr-10 mb-10'>
            <ScrollLink to="Concert" smooth={true} duration={500} >
                <lord-icon
                    src="https://cdn.lordicon.com/vduvxizq.json"
                    trigger="hover"
                    colors="primary:#000000"
                    style={{width:"70px",height:"70px"}}>
                </lord-icon>
            </ScrollLink>
        </div>
    </div>
  )
}

export default Main