import React from 'react'
import mjcoolot from '../assets/mjcoolot.jpg'
import art1 from '../assets/art1.png'
import art2 from '../assets/art2.png'
import art3 from '../assets/art3.png'
import art4 from '../assets/art4.jpg'
const Art = () => {
  return (
    <div id='Art' className='h-full w-full bg-custom-image2 flex flex-col justify-center items-center'>
      <div className='mt-10 '>
        <p className='font-kanit font-light leading-normal text-darkblue text-xs flex justify-center'>
          <a href="https://www.facebook.com/profile.php?id=100091808228232">mjnacoolot</a>
          </p>
        <p className='font-kanit font-normal leading-normal text-black text-xl'>@Meet the Art of our Artist</p>
      </div>
        <div className=' grid grid-cols-3 gap-4 mt-10 mb-16'>
          <div className=' border-2 border-gray-200 '>
            <a href="https://www.facebook.com/profile.php?id=100091808228232">
              <img className='h-72 w-full ' src={art2} alt="bg" />
            </a>
          </div>

          <div className='col-span-2 border-2 border-gray-200 '>
            <a href="https://www.facebook.com/profile.php?id=100091808228232">
              <img className='h-72 w-full ' src={art1} alt="bg" />
            </a>
          </div>

          <div className='col-span-2 border-2 border-gray-200 '> 
            <a href="https://www.facebook.com/profile.php?id=100091808228232">
              <img className='h-72 w-full ' src={art3} alt="bg" />
            </a>
          </div>
          
          <div className='border-2 border-gray-200 '>
            <a href="https://www.facebook.com/profile.php?id=100091808228232">
              <img className='h-72 w-full ' src={art4} alt="bg" />
            </a>
          </div>
      </div>

    <div>
      <p className='font-kanit font-normal leading-normal text-black text-xl'>@Give our artist a Palo</p>
      <p className='font-kanit font-light leading-normal text-darkblue text-xs flex justify-center'>Sige iiyak ako</p>
    </div>

      <div className='grid md:grid-cols-2 grid-cols-1  gap-4 mt-14 md:mb-20 mb-12'>
        <div>
          <p className='font-kanit font-normal leading-normal text-black md:text-5xl text-4xl'>Maria Julianne <br/>Orencio Lacuesta</p>
          <p className='font-kanit font-light leading-normal text-darkblue text-xs'>Artist Nyong Tamad - 
            <br/> She is a master of blending tradition with contemporary elements in her illustrations.
            <br/>Ang kanyang mga guhit ay nagpapakita ng malalim na koneksyon sa kanyang kultura 
            <br/>at kasanayan.</p>

            <a href="https://www.facebook.com/profile.php?id=100091808228232">
              <div className='flex items-center mt-6 bg-grayy rounded-full border-gray-200 shadow-lg p-2'>
                <div className='flex items-center justify-center h-10 w-10'>
                  <lord-icon 
                    src="https://cdn.lordicon.com/iqagrlso.json"
                    trigger="hover"
                    colors="primary:#000000,secondary:#000000"
                    style={{width:"30px",height:"30px"}}
                  ></lord-icon>
                </div>
                <p className='ml-4'>mjnacoolot</p>
              </div>
            </a>

            <a href="https://www.instagram.com/kulotsalot.png/">
              <div className='flex items-center mt-6 bg-grayy rounded-full border-gray-200 shadow-lg p-2'>
                <div className='flex items-center justify-center h-10 w-10'>
                  <lord-icon
                    src="https://cdn.lordicon.com/ppwsfvnn.json"
                    trigger="hover"
                    colors="primary:#000000,secondary:#000000"
                    style={{width:"30px",height:"30px"}}>
                  </lord-icon>
                </div>
                <p className='ml-4'>Kulotsalot.png</p>
              </div>
            </a>

            <a href="mjlacuest45@gmail.com">
              <div className='flex items-center mt-6 bg-grayy rounded-full border-gray-200 shadow-lg p-2'>
                <div className='flex items-center justify-center h-10 w-10'>
                  <lord-icon
                      src="https://cdn.lordicon.com/ebjjjrhp.json"
                      trigger="hover"
                      colors="primary:#000000,secondary:#000000"
                      style={{width:"30px",height:"30px"}}>
                  </lord-icon>
                </div>
                <p className='ml-4'>mjlacuest45@gmail.com</p>
              </div>
            </a>
          </div>

        <div className='flex justify-center items-center'>
          <img className='h-96 w-96 flex' src={mjcoolot} alt="bg" />
        </div>
        </div>
      </div>
  )
}

export default Art