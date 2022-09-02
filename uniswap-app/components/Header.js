import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import toast, { Toaster } from 'react-hot-toast'

const Header = () => {
  return (
    <div className='fixed left-0 top-0 w-full px-8 py-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <img src='./uniswap.png' className='h-12' />
        <NavItems />
      </div>

      <div className='flex items-center'>{'tokenBalComp'}</div>

      <div className='flex'>{'Connect Button'}</div>

      <Toaster />
    </div>
  )
}

export default Header
