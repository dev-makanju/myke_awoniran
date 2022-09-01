import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
   return (
      <ul className='w-3/5 bg-bg-pry flex'>
         <li class="p-5">
            <Link to="/home">home</Link>
         </li>
         <li class="p-5">
            <Link to="/home">about me</Link>
         </li>
         <li class="p-5">
            <Link to="/home">work</Link>
         </li>
         <li class="p-5">
            <Link to="/home">services</Link>
         </li>
         <li class="p-5">
            <Link to="/home">contact me</Link>
         </li>
      </ul>
   )
}

export default Navigation