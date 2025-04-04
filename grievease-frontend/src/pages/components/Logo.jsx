import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <button className="text-center" >
        <Link to="/">
          <span className="text-black text-[20px] md:text-[30px] lg:text-[40px] font-normal font-['Poppins']">
            GRIEV
          </span>
          <span className="text-black text-[20px] md:text-[30px] lg:text-[40px] font-bold font-['Poppins']">
            EASE
          </span>
          </Link>
        </button>
  )
}

export default Logo