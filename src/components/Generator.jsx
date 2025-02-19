import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utill/swoldier'
import Button from './Button'

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

export default function Generator(props) {

  const [showModal,setshowModal] = useState(false)
  const {workouts,setWorkouts,muscles,setMuscles,goal,setGoal,updateWorkout} = props

  function toggleModal(){
    setshowModal(!showModal)
  }

  function updateMuscles(muscleGroup){
    if(muscles.includes(muscleGroup)){
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if(muscles.length>2){
      return
    }

    if(workouts !== 'individual'){
      setMuscles([muscleGroup])
      setshowModal(false)
      return
    }

    setMuscles([...muscles,muscleGroup])

    if(muscles.length===2){
      setshowModal(false)
    }
  }

  return (
    <SectionWrapper header={"generate your workout"} title=
    {['It\'s', 'Huge' , 'o\'clock']}>

      <Header index={'1'} title={'Choose your workout'} description={'Select the workout you want to do'}/>
      
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type,typeIndex) =>{

          return <button onClick={()=>{setMuscles([]),setWorkouts(type)}} className={'bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg px-4 ' + (type===workouts ? 'border-blue-600': 'border-blue-400')} key={typeIndex}>
                  <p className='capitalize'>{type.replaceAll('_'," ")}</p>
                </button>
        })}

      </div>

      <Header index={'2'} title={'Lock on targer'} description={'Select the muscles judged for annihilation'}/>
      
      <div className='bg-slate-950 border border-solid border-blue-400 flex flex-col rounded-lg '>
        <button onClick={toggleModal} className='relative p-3 flex items-center justify-center '>
          <p className='capitalize'>{muscles.length == 0 ? 'Select your muscle gruops' : muscles.join(' ')}</p>
          <i className='fa-solid fa-caret-down absolute right-3 top-1/2-translate-y-1/2'></i>
        </button>

        {showModal && (
          <div className='flex flex-col px-3 pb-3'>{(workouts === 'individual' ? WORKOUTS [workouts] : Object.keys(WORKOUTS [workouts])).map((muscleGroup,muscleGroupIndex) => {

            return(
              <button onClick={()=>{
                  updateMuscles(muscleGroup)
              }} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? 'text-blue-400' : ' ') }key={muscleGroupIndex}>
                <p className='uppercase'>{muscleGroup.replaceAll('_',' ')}</p>
              </button>
            )
          })}</div>
        )}

      </div>

      <Header index={'3'} title={'Become Juggernaut'} description={'Select your ultimate objective'}/>
      
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme,schemeIndex) =>{

          return <button onClick={()=>{setGoal(scheme)}} className={'bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg px-4 ' + (scheme===goal ? 'border-blue-600 ': 'border-blue-400 ')} key={schemeIndex}>
          <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
        </button>
        })}

      </div>
      
      <Button func={updateWorkout} text='Formulate'></Button>  
    </SectionWrapper>

    
  )
}
