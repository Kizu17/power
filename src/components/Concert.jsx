import React from 'react';
import TwoConcert2 from '../assets/TwoConcert2.jpg'; 
import TwoConcert1 from '../assets/TwoConcert1.jpg';
import TwoConcert3 from '../assets/TwoConcert3.jpg';
import unaConcert from '../assets/unaConcert.jpg';
import pangalawaConcert from '../assets/pangalawaConcert.jpg';
import pangatloConcert from '../assets/pangatloConcert.jpg';

const Concert = () => {
  return (
    <div id='Concert' className='w-full h-full flex flex-col justify-center items-center bg-custom-image bg-cover bg-center'>
     
      <div className='text-center mb-10 mt-16'>
        <p className="font-kanit font-light leading-normal text-darkblue text-xs">
          In the midst of the concert's excitement
        </p>
        <p className='font-kanit font-normal leading-normal text-black text-xl'>
          @SamaSayaSaMaynila
        </p>
      </div>

      <div className='flex justify-center items-center '>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div className='grid md:grid-cols-2 grid-cols-1 md:mr-11 mr-2'>
            <div className='w-62 h-62 object-cover'><img className='w-full h-full object-cover' src={pangatloConcert} alt="" /></div>
            <div className='w-62 h-62 object-cover'><img className='w-full h-full object-cover' src={pangalawaConcert} alt="" /></div>
            <div className='col-span-2 w-128 mt-2'><img className='object-cover' src={unaConcert} alt="" /></div>
          </div>

          <div className='grid md:grid-cols-2 grid-cols-1 md:ml-11'>
            <div className='col-span-2 w-128'><img className='object-cover' src={TwoConcert1} alt="" /></div>
            <div className='w-62 h-62 object-cover'><img className='w-full h-full object-cover' src={TwoConcert2} alt="" /></div>
            <div className='w-62 h-62 object-cover'><img className='w-full h-full object-cover' src={TwoConcert3} alt="" /></div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 mt-2 mb-16'>
        <div className='w-150 h-full flex justify-center items-center'><p className="font-kanit font-base leading-normal text-black text-xs md:block hidden">@June 1, 2024</p></div>
        <div className='w-150 h-full flex justify-center items-center'><p className="font-kanit font-base leading-normal text-black text-xs md:block hidden">@June 22, 2024</p></div>
      </div>
    </div>
  );
}

export default Concert;
