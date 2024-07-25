import React from 'react'
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

import Carousel from './Carousel';
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);    
const s = () => {
  return (
    <div id='About' className='w-full h-full flex flex-col justify-center items-center bg-custom-image3 bg-cover bg-center bg-opacity-70'>
        <div className='bg-grayy w-full h-full '>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div>
                    <Carousel />
                </div>

                <div className='ml-5 mr-5'>
                    <p className='font-kanit font-normal leading-normal text-black text-xl md:mt-20 mt-5 '>
                        @About us
                    </p>
                    <p className="font-kanit font-light leading-normal text-darkblue text-xs">
                        Ano bang meron samin?
                    </p>
                    <p className='font-kanit font-light leading-normal text-darkestblue text-lg mt-5 mb-20'>
                        This page shows the fun times we have as friends. We love to travel, 
                        go out, and enjoy concerts, capturing these moments in photos. 
                        Each picture tells a story of our adventures and the good times we share. 
                        We cherish every moment and enjoy life to the fullest.
                    </p>
                </div>
            </div>
        </div>
        <div className='text-center mt-8 '>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
                @What we do
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
                Ano ba kadalasan naming ginagawa?
            </p>
       </div>
        <div className='flex justify-center items-center'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:m-8 m-1 '>
                <div className='m-10'>
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-grayy  dark:border-ligthblue dark:hover:bg-grayy bg-opacity-50">
                        <div className='flex items-center justify-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/jibstvae.json"
                                trigger="hover"
                                colors="primary:#000000,secondary:#000000"
                                style={{width:"50px",height:"50px"}}>
                            </lord-icon>
                        </div>
                    <h5 class="mb-2 font-kanit font-semibold leading-normal text-black text-xl text-center">Podcast</h5>
                    <p class="font-normal text-darkestblue">We often talk about our personal experiences, life regrets, and the everyday events that shape our lives.</p>
                    </a>
                </div>

                <div className='m-10'>
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-grayy  dark:border-ligthblue dark:hover:bg-grayy bg-opacity-50">
                        <div className='flex items-center justify-center'>
                        <lord-icon
                            src="https://cdn.lordicon.com/ppwsfvnn.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{width:"50px",height:"50px"}}>
                        </lord-icon>
                        </div>
                    <h5 class="mb-2 font-kanit font-semibold leading-normal text-black text-xl text-center">Photo</h5>
                    <p class="font-normal text-darkestblue">Capturing our moment is one of the best way to preserve our beloved memories.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                    </a>
                </div>

                <div className='m-10'>
                <   a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-grayy  dark:border-ligthblue dark:hover:bg-grayy bg-opacity-50">
                        <div className='flex items-center justify-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/ssfrfbhy.json"
                                trigger="hover"
                                colors="primary:#000000,secondary:#000000"
                                style={{width:"50px",height:"50px"}}>
                            </lord-icon>
                        </div>
                    <h5 class="mb-2 font-kanit font-semibold leading-normal text-black text-xl text-center">Gala/Raid</h5>
                    <p class="font-normal text-darkestblue">We often go out randomly and start raiding each other's house to touch some grass.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                    </a>
                </div>

                <div className='m-10'>
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-grayy  dark:border-ligthblue dark:hover:bg-grayy bg-opacity-50">
                        <div className='flex items-center justify-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/ghhwiltn.json"
                                trigger="hover"
                                colors="primary:#000000,secondary:#000000"
                                style={{width:"50px",height:"50px"}}>
                            </lord-icon>
                        </div>
                    <h5 class="mb-2 font-kanit font-semibold leading-normal text-black text-xl text-center">Art</h5>
                    <p class="font-normal text-darkestblue">@MJ Lacuesta is capturing our portraits, blending her hobby and passion for drawing.</p>
                    </a>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default s