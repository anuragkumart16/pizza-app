import React from 'react'
import Image from 'next/image'

function LogoGrp() {
  return (
    <div className='flex flex-row items-center gap-2'>
      <Image src="/Logo.svg" alt="Logo" width={16} height={16} className='cursor-pointer' />
      <p className='text-base font-bold cursor-pointer'>Pizza app</p>
    </div>
  )
}

export default LogoGrp
