"use client";
import { FaOpencart } from 'react-icons/fa'

const Logo = () => {
  return (
    <div>

    <div className='
    max-sm:hidden
    text-xl
    text-white
    cursor-pointer px-2
    border-y-2
    '>
    Shopdoora
    </div>
    <div className=' sm:hidden cursor-pointer text-white'>
      <FaOpencart size={30} />
    </div>
    </div>

  )
}

export default Logo