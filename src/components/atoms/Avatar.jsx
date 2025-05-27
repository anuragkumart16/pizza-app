import React from 'react'
import Image from 'next/image'
function Avatar() {
  return (
    <Image src={"/Avatar.png"} alt="Avatar" width={32} height={32} className={"rounded-full cursor-pointer"}/>
  )
}

export default Avatar
