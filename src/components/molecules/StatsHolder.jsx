import React from 'react'
import BarGraph from './BarChart'
import LineGraph from './LineChart'

function StatsHolder() {
  return (
    <div className='flex flex-row gap-10 m-4 items-center justify-center'>
      <LineGraph/>
      <BarGraph/>
    </div>
  )
}

export default StatsHolder
