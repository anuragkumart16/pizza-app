import React from 'react'

function SmallText({children,styles}) {
  return (
    <p className={`text-base ${styles}`}>{children}</p>
  )
}

export default SmallText
