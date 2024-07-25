import React from 'react'

const RangerzItem = ({message, name, image}) => {
  return (
    <div className='grid grid-cols-2 mt-14'>
        <div className=''>
            <img className='w-full h-80 object-cover' src={image} alt="ranger" />
          </div>
          <div className=''>
            <p className='font-kanit font-normal leading-normal text-black text-xl'>
              {name}
            </p>
            <p className="font-kanit font-light leading-normal text-darkblue text-xs">
              {message}
            </p>
          </div>
    </div>
  )
}

export default RangerzItem