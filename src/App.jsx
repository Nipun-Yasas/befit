import React, { useState } from 'react'
import Generator from './components/Generator'
import Hero from './components/Hero'
import Workout from './components/Workout'
import { generateWorkout } from './utill/functions'



function App() {

  const [workout,setWorkout] = useState(null)
  const [workouts,setWorkouts] = useState('individual')
  const [muscles,setMuscles] = useState([])
  const [goal,setGoal] = useState('strength_power')

  function updateWorkout(){
    if(muscles.length<1){
      return
    }

    let newWorkout = generateWorkout({workouts,muscles,goal})
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
      <Generator workouts={workouts} 
      setWorkouts={setWorkouts}
      muscles={muscles}
      setMuscles={setMuscles}
      goal ={goal}
      setGoal={setGoal}
      updateWorkout= {updateWorkout}
      />
      {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App
