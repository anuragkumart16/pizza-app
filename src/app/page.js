import React from 'react'
import Navbar from '@/components/Navbar'
import BigHeading from '@/components/atoms/BigHeading'
import SmallText from '@/components/atoms/SmallText'
import Btn from '@/components/atoms/Btn'

function page() {
  return (
   <>
    <Navbar/>
    <div className='flex flex-col items-center justify-center m-16'>
      <BigHeading>Sign into your account</BigHeading>
      <SmallText styles={"mt-6"}>Continue with your Google account</SmallText>
      <Btn styles={"mt-8"}>Continue with Google</Btn>
    </div>
   </>
  )
}

export default page
