import Navbar from '@/components/Navbar'
import BigHeading from '@/components/atoms/BigHeading'
import BarGraph from '@/components/molecules/BarChart'
import LineGraph from '@/components/molecules/LineChart'
import StatsCard from '@/components/molecules/StatsCard'
import StatsHolder from '@/components/molecules/StatsHolder'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col  m-4 mb-6 items-center justify-center'>
    <div  className='flex flex-row mt-6 items-start justify-start'>
        <BigHeading styles={"self-start"}>Hello,{"Sarah"}!</BigHeading>
    </div>
      <div className='flex flex-row gap-11 m-4 mt-8 mb-8 items-center justify-center'>
        <StatsCard text={"Total sales"} head={"$200,000"} increment={"+10%"}/>
      <StatsCard text={"Orders"} head={"500"} increment={"+5%"}/>
      <StatsCard text={"Revenue"} head={"$150,000"} increment={"+8%"}/>
      </div>
    </div>
    <StatsHolder/>
    </>
  )
}

export default page
