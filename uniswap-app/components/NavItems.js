import React, { useState } from 'react'
import { ArrowSmUpIcon } from '@heroicons/react/outline'

const NavItems = () => {
  const SWAP = 'Swap'
  const POOL = 'Pool'
  const VOTE = 'Vote'
  const CHART = 'Charts'

  const [selectedNavItem, setSelectedNavItem] = useState(SWAP)

  return (
    <div className='bg-zinc-900 h-fit flex items-center justify-around rounded-full mx-6'>
      <p
        className={getNavIconClassName(SWAP)}
        onClick={() => setSelectedNavItem(SWAP)}
      >
        {SWAP}
      </p>
      <p
        className={getNavIconClassName(POOL)}
        onClick={() => setSelectedNavItem(POOL)}
      >
        {POOL}
      </p>
      <p
        className={getNavIconClassName(VOTE)}
        onClick={() => setSelectedNavItem(VOTE)}
      >
        {VOTE}
      </p>
      <p
        className={getNavIconClassName(CHART)}
        onClick={() => window.open('https://info.uniswap.org/#/', '_blank')}
      >
        {CHART}
        <ArrowSmUpIcon className='h-4 rotate-45' />
      </p>
    </div>
  )

  function getNavIconClassName(name) {
    let className =
      'p-1 px-4 cursor-pointer border-[4px] border-transparent flex items-center'
    className +=
      name === selectedNavItem
        ? ' bg-zinc-800 border-zinc-900 rounded-full'
        : ''
    return className
  }
}

export default NavItems
