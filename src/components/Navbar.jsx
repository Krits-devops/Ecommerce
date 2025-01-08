import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className='bg-blue-400'> 
        <div className='flex flex-row justify-between'>
            <NavLink to='/'>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.codehelp.in%2F&psig=AOvVaw2ybsomI3VE_DqBh8TyL3kr&ust=1736305969945000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJjMz_bR4ooDFQAAAAAdAAAAABAE'/>

            </NavLink>
            <div>
                <NavLink to='/'>
                      <p>Home</p>
                </NavLink>

                <NavLink to='/cart'>
                    <div>
                    <FaShoppingCart />
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar