import React from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utill/swoldier'

export default function Generator() {

  function Header(props){

    const {index,title,description} = props

    return(
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
          <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
        </div>
        <p className='text-sm sm:text-base max-auto'>{description}</p>
      </div>
    )
  }

  return (
    <SectionWrapper header={"generate your workout"} title=
    {['It\'s', 'Huge' , 'o\'clock']}>
      <Header index={'1'} title={'Choose your workout'} description={'Select the workout you want to do'}/>
      
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type,typeIndex) =>{
          return <button className='bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600' key={typeIndex}>
                  <p className='capitalize'>{type.replaceAll('_'," ")}</p>
                </button>
        })}

      </div>

    </SectionWrapper>
  )
}
