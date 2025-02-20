import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>

        <p>It's time to get</p>
        <h1 className='uppercase font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl'>sha<span className='text-blue-400 font-medium'>pe</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowledgement that i may become <span className='text-blue-400 font-medium'>unbelievable fit</span> and accept all risks of becomming the local <span>mass montrosity</span>,affilicted with severe body dismorphia,unable to fit through doors</p>
      <Button func={()=>{
        window.location.href = '#generate'
      }} text='Accept & Begin'></Button>   
    </div>
  )
}
