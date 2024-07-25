import React from 'react'
import podcastImg from '../assets/podcastImg.png'
import mic from '../assets/mic.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.jpeg'
import p5 from '../assets/p5.jpg'
const Podcast = () => {
  return (
    <div id='Podcast' className='w-full h-full flex flex-col justify-center items-center bg-custom-image2 bg-cover bg-center'>
      <div className='text-center  mt-16'>
          <p className="font-kanit font-light leading-normal text-darkblue text-xs">
              Listen to our kagaguhan ehe
          </p>
          <p className='font-kanit font-normal leading-normal text-black text-xl'>
              @Podcast
          </p>
      </div>
      <div className="relative w-full h-full text-center mt-10">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${podcastImg})` }}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
            </div>
            <div className="relative z-10 h-full">
              <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='mt-10 md:ml-40 ml-10'>
                  <p className='font-kanit font-semibold text-white md:text-3xl text-xl text-start'>
                  Sharing our personal experiences, reflections, and life stories on our podcast.
                  </p>
                  <p className='font-kanit font-light leading-normal text-gray-300 text-xs text-start mt-3'>
                    We the rangerz ay nag uusap ng kung ano ano, kung ano man 
                    <br/>mapagtripan namin pagusapan sa buhay buhay. It is what is it?
                    <br/>Meron man kabuluhan o wala, ang mahalaga ay masaya.
                  </p>
                  <a href="mjlacuest45@gmail.com">
                    <div className='w-32 h-10 flex items-center mt-6 bg-grayy rounded-full border-gray-200 shadow-lg p-2'>
                      <div className='flex items-center justify-center h-10 w-10'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jibstvae.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{width:"30px",height:"30px"}}>
                        </lord-icon>
                      </div>
                      <a href="https://open.spotify.com/show/5qnC0FbPUbfPRRACboagxO?si=140540a1fcae4253">
                        <p className='ml-1 font-kanit font-light leading-normal'>Spotify</p>
                      </a>
                    </div>
                  </a>
                </div>
                <div className='mt-10 flex justify-center items-center'>
                  <img className="h-80" src={mic} alt="microphone" />
                </div>
              </div>
            </div>
          </div>

          <div className='text-center  mt-10'>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
                @Sample podcast
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
                Isa sa mga episode namin sa podcast
            </p>
          </div>
          
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 p-10 mb-10'> 
            <div className='flex justify-center items-center'>
              <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div
                  className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center"
                  style={{ backgroundImage: `url(${p1})` }}
                >
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-kanit text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    What will you say about your younger self? // 06.07.24
                  </h2>
                  <h5 className="block mb-4 font-kanit text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  Hear it!
                  </h5>
                  <a href="https://open.spotify.com/episode/74aBORQedFM7MQr54kXkOM?si=9c90309dc7c24bdb">
                    <img alt="podcast"
                      src={p5}
                      className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
                  </a>
                  </div>
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div
                  className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover"
                  style={{ backgroundImage: `url(${p2})` }}
                >
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-kanit text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    Open Forum (part 2) // 05.21.24
                  </h2>
                  <h5 className="block mb-4 font-kanit text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                    Hear it!
                  </h5>
                  <a href="https://open.spotify.com/episode/4mdhPP3G3J95GFYkgcAc8V?si=d9c74f6c85d34819">
                    <img alt="podcast"
                      src={p5}
                      className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
                  </a>
                  </div>
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div
                  className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center"
                  style={{ backgroundImage: `url(${p3})` }}
                >
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-kanit text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    islipober // 03.08.24
                  </h2>
                  <h5 className="block mb-4 font-kanit text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  Hear it!
                  </h5>
                  <a href="https://open.spotify.com/episode/6ArD0jnxuAs17YFx1MEdI8?si=62f9b1a56e4a4501">
                    <img alt="podcast"
                      src={p5}
                      className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
                  </a>
                  </div>
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div
                  className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover"
                  style={{ backgroundImage: `url(${p4})` }}
                >
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-kanit text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    ALFONSO!!! // 06.15.24
                  </h2>
                  <h5 className="block mb-4 font-kanit text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  Hear it!
                  </h5>
                  <a href="https://open.spotify.com/episode/4UmVGkPkfmtsT5f8V1bKml?si=6626b24085194c73 ">
                    <img alt="podcast"
                      src={p5}
                      className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
                  </a>
                  </div>
              </div>
            </div>
          </div>
    </div>
  )
}
export default Podcast