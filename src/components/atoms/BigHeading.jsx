import React from 'react'

function BigHeading({children,styles}) {
  return (
    <p className={`text-3xl font-bold ${styles}`}>{children}</p>
  )
}

export default BigHeading
