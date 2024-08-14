"use client";
import { AiOutlineMenu } from 'react-icons/ai'
import { GoSearch } from 'react-icons/go'
import { TfiShoppingCart } from 'react-icons/tfi'

const MenuItems = () => {
  return (
    <div className='
    flex 
    flex-row 
    items-center 
    gap-5
    text-white
    cursor-pointer
    '>
      <div>
        <GoSearch size={20} />
      </div>
      <div>
        <TfiShoppingCart size={20} />
      </div>
      <div>
        <AiOutlineMenu size={20} />
      </div>
    </div>
  )
}

export default MenuItems