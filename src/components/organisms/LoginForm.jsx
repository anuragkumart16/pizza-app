import React from 'react'
import InputGrp from '../molecules/InputGrp'
import Btn from '../atoms/Btn'

function LoginForm() {
  return (
    <form className='flex flex-col gap-6 w-[40%] justify-center items-center mt-8 border-t-2 border-[var(--color-secondary)] p-4 pt-10'>
        <InputGrp type={"email"} placeholder={"Enter your email"}>Email</InputGrp>
        <InputGrp type={"password"} placeholder={"Enter your password"}>Password</InputGrp>
        <Btn>Sign in</Btn>
    </form>
  )
}

export default LoginForm
