'use client'
import React from 'react'
import Navbar from '@/components/organisms/Navbar'
import BigHeading from '@/components/atoms/BigHeading'
import SmallText from '@/components/atoms/SmallText'
import Btn from '@/components/atoms/Btn'
import LoginForm from '@/components/organisms/LoginForm'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'


function Page() {
  const { setIsLoggedIn } = useAuth();
  const router = useRouter();
  return (
   <>
    <Navbar/>
    <div className='flex flex-col items-center justify-center m-16'>
      <BigHeading>Sign into your account</BigHeading>
      <SmallText styles={"mt-6"}>Continue with your Google account</SmallText>
      <Btn styles={"mt-8"} onclick={() =>{
        setIsLoggedIn(true);
        router.push("/dashboard")
      }} >Continue with Google</Btn>
      <LoginForm/>
    </div>
   </>
  )
}

export default Page
