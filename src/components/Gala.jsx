import React from 'react'
import './style.css';
import gala1 from '../assets/gala1.jpg'
import gala2 from '../assets/gala2.jpg'
import gala3 from '../assets/gala3.jpg'
import gala4 from '../assets/gala4.jpg'
import gala5 from '../assets/gala5.jpg'
import gala6 from '../assets/Gala6.jpg'
const Gala = () => {
  return (
    <div id='Gala' className='w-full h-full flex flex-col justify-center items-center bg-custom-image3 bg-cover bg-center'>
        <div className='text-center  mt-16'>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
                @Gala
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
                Mga Wandering Pets ng mga Itik
            </p>
       </div>
      
      <div className="container">
        <div className="box">
            <img src={gala5} alt='gala'/>
            <span className='font-kanit font-normal leading-normal text-black text-xl'>Ekib</span>
        </div>
        <div className="box">
            <img src={gala6} alt='gala'/>
            <span className='font-kanit font-normal leading-normal text-black text-xl'>Concert</span>
        </div>
        <div className="box">
            <img src={gala3} alt='gala'/>
            <span className='font-kanit font-normal leading-normal text-black text-xl'>Random</span>
        </div>
        <div className="box">
            <img src={gala4} alt='gala'/>
            <span className='font-kanit font-normal leading-normal text-black text-xl'>Exhibit</span>
        </div>
        <div className="box">
            <img src={gala1} alt='gala'/>
            <span className='font-kanit font-normal leading-normal text-black text-xl'>Miming</span>
        </div>
      </div>
    </div>
  )
}

export default Gala