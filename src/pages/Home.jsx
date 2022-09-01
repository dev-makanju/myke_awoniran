import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'

const Home = () => {
  return (
    <DefaultLayout>
      <div className='flex items-center justify-center bg-bg-dark h-full w-full'>
        <div className='text-center max-w-[600px] max-h-[300px]'>
            <h1 className='font-bold text-[40px] md:text-[90px]'>Hi, I’m Myke Awoniran</h1>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Home