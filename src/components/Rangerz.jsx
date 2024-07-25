import React from 'react'
import andaya from '../assets/andaya.jpg'
import ern from '../assets/ern.jpg'
import bayani from '../assets/bayani.jpg'
import buban from '../assets/buban.jpg'
import nel from '../assets/nel.jpg'
import triks from '../assets/triks.jpg'
import mj from '../assets/mj.jpeg'
import roger from '../assets/roger.jpg'
import insideout from '../assets/insideout.jpg'
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
const Rangerz = () => {
  return (
    <div id='Rangerz' className='flex flex-col justify-center items-center bg-custom-image'>
      <div className='mt-10'>
        <p className='font-kanit font-normal leading-normal text-black text-xl flex justify-center'>
          @Meet the rangerz
        </p>
        <p className="font-kanit font-light leading-normal text-darkblue text-xs">
          Mga taga-pagtanggol ng kalawakan
        </p>
      </div>

      <div className='grid grid-cols-2 md:gap-10 gap-2 mt-14'>
          <div className=''>
            <img className='w-full md:h-80 h-60 object-cover' src={andaya} alt="ranger" />
          </div>
          <div className='mt-4 flex flex-col justify-center items-center '>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
              @John Deniel Andaya
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
            "Isa akong pogi, I'm Joshua garcia or daniel padilla"
            </p>
            <a href="https://www.facebook.com/de.n.el.12">
              <button type="button" className="mt-4 mb-12 font-kanit font-normal bg-darkblue hover:bg-darkestblue focus:ring-4 focus:outline-none focus:ring-darkblue rounded-lg md:text-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-darkblue dark:hover:bg-darkestblue dark:focus:ring-darkblue">
                  <lord-icon
                      src="https://cdn.lordicon.com/iqagrlso.json"
                      trigger="hover"
                      colors="primary:#000000,secondary:#000000"
                      style={{width:"26px",height:"26px"}}>
                  </lord-icon>
                  Visit
              </button>
            </a>
          </div>

          <div className='mt-4 flex flex-col justify-center items-center'>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
              @Daniel Bayani
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
            "a quiet place"
            </p>
            <a href="https://www.facebook.com/akozidaniel">
              <button type="button" className="mt-4 mb-12 font-kanit font-normal bg-darkblue hover:bg-darkestblue focus:ring-4 focus:outline-none focus:ring-darkblue rounded-lg md:text-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-darkblue dark:hover:bg-darkestblue dark:focus:ring-darkblue">
                    <lord-icon
                        src="https://cdn.lordicon.com/iqagrlso.json"
                        trigger="hover"
                        colors="primary:#000000,secondary:#000000"
                        style={{width:"26px",height:"26px"}}>
                    </lord-icon>
                    Visit
                </button>
            </a>
          </div>
          <div className=''>
            <img className='md:h-80 h-60 object-cover' src={bayani} alt="ranger" />
          </div>

          <div className=''>
            <img className='md:h-80 h-60 object-cover' src={buban} alt="ranger" />
          </div>
          <div className='mt-4 flex flex-col justify-center items-center'>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
              @Matthew Buban
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
              "Mga taga-pagtanggol ng kalawakan"
            </p>
            <a href="https://www.facebook.com/profile.php?id=100025180294839">
              <button type="button" className="mt-4 mb-12 font-kanit font-normal bg-darkblue hover:bg-darkestblue focus:ring-4 focus:outline-none focus:ring-darkblue rounded-lg md:text-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-darkblue dark:hover:bg-darkestblue dark:focus:ring-darkblue">
                    <lord-icon
                        src="https://cdn.lordicon.com/iqagrlso.json"
                        trigger="hover"
                        colors="primary:#000000,secondary:#000000"
                        style={{width:"26px",height:"26px"}}>
                    </lord-icon>
                    Visit
                </button>
            </a>
          </div>

          <div className='mt-4 flex flex-col justify-center items-center'>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
              @Roger Ray Cruz
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
              "Tamad na may pangarap sa buhay"
            </p>
            <a href="https://www.facebook.com/rogerray.cruz">
              <button type="button" className="mt-4 mb-12 font-kanit font-normal bg-darkblue hover:bg-darkestblue focus:ring-4 focus:outline-none focus:ring-darkblue rounded-lg md:text-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-darkblue dark:hover:bg-darkestblue dark:focus:ring-darkblue">
                    <lord-icon
                        src="https://cdn.lordicon.com/iqagrlso.json"
                        trigger="hover"
                        colors="primary:#000000,secondary:#000000"
                        style={{width:"26px",height:"26px"}}>
                    </lord-icon>
                    Visit
                </button>
            </a>
          </div>
          <div className=''>
            <img className='md:h-80 h-60 object-cover' src={roger} alt="ranger" />
          </div>

          <div className=''>
            <img className='md:h-80 h-60 object-cover' src={ern} alt="ranger" />
          </div>
          <div className='flex flex-col justify-center items-center mt-4'>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
              @Ern Louei Desembrana
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
              "Mga taga-pagtanggol ng kalawakan"
            </p>
            <a href="https://www.facebook.com/ern.desembrana">
              <button type="button" className="mt-4 mb-12 font-kanit font-normal bg-darkblue hover:bg-darkestblue focus:ring-4 focus:outline-none focus:ring-darkblue rounded-lg md:text-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-darkblue dark:hover:bg-darkestblue dark:focus:ring-darkblue">
                    <lord-icon
                        src="https://cdn.lordicon.com/iqagrlso.json"
                        trigger="hover"
                        colors="primary:#000000,secondary:#000000"
                        style={{width:"26px",height:"26px"}}>
                    </lord-icon>
                    Visit
                </button>
            </a>
          </div>

          <div className='mt-4 flex flex-col justify-center items-center'>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
              @Maria Julianne Lacuesta
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
            "ano pre coolot kac maangas aq tsaka kulot pre"
            </p>
            <a href="https://www.facebook.com/julianne.lacuesta">
              <button type="button" className="mt-4 mb-12 font-kanit font-normal bg-darkblue hover:bg-darkestblue focus:ring-4 focus:outline-none focus:ring-darkblue rounded-lg md:text-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-darkblue dark:hover:bg-darkestblue dark:focus:ring-darkblue">
                    <lord-icon
                        src="https://cdn.lordicon.com/iqagrlso.json"
                        trigger="hover"
                        colors="primary:#000000,secondary:#000000"
                        style={{width:"26px",height:"26px"}}>
                    </lord-icon>
                    Visit
                </button>
            </a>
          </div>
          <div className=''>
            <img className='md:h-80 h-60 object-cover' src={mj} alt="ranger" />
          </div>

          <div className=''>
            <img className='md:h-80 h-60 object-cover' src={triks} alt="ranger" />
          </div>
          <div className=' mt-4 flex flex-col justify-center items-center'>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
              @Trixie Mañozo
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
              "Mga taga-pagtanggol ng kalawakan"
            </p>
            <a href="https://www.facebook.com/mnztrix">
              <button type="button" className="mt-4 mb-12 font-kanit font-normal bg-darkblue hover:bg-darkestblue focus:ring-4 focus:outline-none focus:ring-darkblue rounded-lg md:text-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-darkblue dark:hover:bg-darkestblue dark:focus:ring-darkblue">
                    <lord-icon
                        src="https://cdn.lordicon.com/iqagrlso.json"
                        trigger="hover"
                        colors="primary:#000000,secondary:#000000"
                        style={{width:"26px",height:"26px"}}>
                    </lord-icon>
                    Visit
                </button>
            </a>
          </div>

          <div className='mt-4 flex flex-col justify-center items-center'>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
              @Jhonel Santos
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
              "Mga taga-pagtanggol ng kalawakan"
            </p>
            <a href="https://www.facebook.com/profile.php?id=100082154055704">
              <button type="button" className="mt-4 mb-12 font-kanit font-normal bg-darkblue hover:bg-darkestblue focus:ring-4 focus:outline-none focus:ring-darkblue rounded-lg md:text-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-darkblue dark:hover:bg-darkestblue dark:focus:ring-darkblue">
                    <lord-icon
                        src="https://cdn.lordicon.com/iqagrlso.json"
                        trigger="hover"
                        colors="primary:#000000,secondary:#000000"
                        style={{width:"26px",height:"26px"}}>
                    </lord-icon>
                    Visit
                </button>
            </a>
          </div>
              <div className=''>
                <img className='md:h-80 h-60 object-cover' src={nel} alt="ranger" />
              </div>
          </div>
          <div className="relative w-full h-full text-center mt-20">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${insideout})` }}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
              <p className='font-kanit font-extralight text-white text-xl mt-16'>
                "A friend is one who overlooks your broken fence and admires the flowers in your garden."
              </p>
              <ScrollLink to="Art" smooth={true} duration={500}>
                <button 
                  type="button" 
                  className="mt-4 mb-12 font-kanit font-normal bg-darkblue hover:bg-darkestblue focus:ring-4 focus:outline-none focus:ring-darkblue rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-darkblue dark:hover:bg-darkestblue dark:focus:ring-darkblue"
                >
                  Proceed
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </button>
              </ScrollLink>
            </div>
          </div>

    </div> 
  )
}

export default Rangerz