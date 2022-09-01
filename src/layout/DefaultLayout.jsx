import React from 'react'
import Navigation from '../components/common/Navigation'

const DefaultLayout = (props) => {
   return (
      <div className='relative'>
         <div className="w-screen h-screen flex flex-row">
            <div className="w-[100%] md:w-[90%] h-full">{ props.children }</div>
            <div className='hidden md:block bg-bg-orange w-[10%] h-full'></div>
         </div>
         <div class="absolute bottom-0 left-0 right-0 flex justify-center">
            <Navigation/>
         </div>
      </div>
   )
}

export default DefaultLayout