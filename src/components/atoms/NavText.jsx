'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth';

function NavText({children,styles,path='/notfound'}) {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();
  function handleClick(){
    if (path === '/logout'){
      setIsLoggedIn(false)
      router.push("/")
    }else{
      router.push(path)
    }
  }
  return (
    <p className={`text-sm cursor-pointer font-medium select-none ${styles}`} onClick={handleClick}>{children}</p>
  )
}

export default NavText
