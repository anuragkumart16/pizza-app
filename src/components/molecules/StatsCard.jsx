import React from 'react'
import SmallText from '../atoms/SmallText'
import BigHeading from '../atoms/BigHeading'

function StatsCard({text,head,increment}) {
  return (
    <div className='bg-[var(--color-secondary)] w-[350px] rounded-2xl p-5 gap-3'>
      <SmallText>{text}</SmallText>
      <BigHeading>{head}</BigHeading>
      <p className='text-green-600 font-sm'>{increment}</p>
    </div>
  )
}

export default StatsCard
