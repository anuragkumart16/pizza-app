import React from 'react'
import LogoGrp from './molecules/LogoGrp'
import NavText from './atoms/NavText'
import Btn from './atoms/Btn'
import Avatar from './atoms/Avatar'

function Navbar() {
  return (
    <div className='flex flex-row p-5 items-center justify-between h-[8vh] border-b border-gray-200'>
        <LogoGrp/>
        <div className='flex flex-row items-center gap-8'>
            <NavText>Home</NavText>
            <NavText>About</NavText>
            <NavText>Contact</NavText>
            <NavText>Orders</NavText>
            <NavText>Menu</NavText>
            <NavText>Settings</NavText>
            <Btn>Login</Btn>
            <Avatar/>
        </div>
    </div>
  )
}

export default Navbar
