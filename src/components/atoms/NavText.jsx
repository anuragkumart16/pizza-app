import React from 'react'

function NavText({children,styles}) {
  return (
    <p className={`text-sm cursor-pointer font-medium select-none ${styles}`}>{children}</p>
  )
}

export default NavText
