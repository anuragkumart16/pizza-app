"use client"
import BigHeading from '@/components/atoms/BigHeading'
import SmallText from '@/components/atoms/SmallText'
import Navbar from '@/components/Navbar'
import Btn from '@/components/atoms/Btn'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter();
  return (
    <div className=' h-screen w-screen flex flex-col'>
        <Navbar/>
        <div className='flex-1 flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center bg-[var(--color-tertiary)] p-10 rounded-3xl gap-4'>
                    <BigHeading>404 Page Not Found</BigHeading>
                    <SmallText>You clicked on a broken link!</SmallText>
                    <Btn onclick={() => router.push("/")}>Back to Home</Btn>
            </div>
        </div>
    </div>
  )
}

export default page
