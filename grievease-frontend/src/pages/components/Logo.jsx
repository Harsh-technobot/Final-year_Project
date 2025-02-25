import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <button className="text-center" >
        <Link to="/">
          <span className="text-black text-[30px] font-normal font-['Poppins']">
            GRIEV
          </span>
          <span className="text-black text-[30px] font-bold font-['Poppins']">
            EASE
          </span>
          </Link>
        </button>
  )
}

export default Logo