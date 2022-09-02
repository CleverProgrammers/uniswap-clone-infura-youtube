import React, { useEffect, useState, useRef } from 'react'

import TransactionStatus from './TransactionStatus'
import toast, { Toaster } from 'react-hot-toast'

import { ClipboardIcon, ClipboardCheckIcon } from '@heroicons/react/outline'

const TokenBalance = ({ name, walletAddress }) => {
  return (
    <div className='flex mx-2'>
      <div className='flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg'>
        <p className='text-sm'>{name}</p>
        <p className='bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100'>
          {'balance'}
        </p>
      </div>

      <div className='flex items-center p-2 px-2 bg-[#2172e5] rounded-r-lg'>
        <copyIcon.icon
          className='h-6 cursor-pointer'
          onClick={() => {
            navigator.clipboard.writeText(tokenAddress)
            setCopyIcon({ icon: ClipboardCheckIcon })
          }}
        />
      </div>

      <Toaster />
    </div>
  )
}

export default TokenBalance
