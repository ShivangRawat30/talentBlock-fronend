import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
// import ConnectBtn from './ConnectBtn'

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <header className="shadow-sm shadow-[#989898] py-4 lg:absolute w-[100vw] top-0 right-0 bg-[#080813] sm:hidden lg:block">
      <main className="w-full mx-auto flex justify-between items-center flex-wrap">
        <div className="text-2xl gap-5 flex ml-10">
          <span className='text-white text-3xl' onClick={() => router.push("/")}> Talent | Block</span>
          <span className='text text-[#FF867C] minecraft'>Where Blockchain and Talent Unite</span>
        </div>
        <div className="flex justify-end items-center space-x-2 md:space-x-4 mt-2 md:mt-0 mr-[2vw]">
        <ConnectButton />
        </div>
      </main>
    </header>
  )
}

export default Header