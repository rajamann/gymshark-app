import React from 'react'
import { useSelector } from 'react-redux'
import Exercise from '../exercise/Exercise'
import ScaleLoader from "react-spinners/ScaleLoader";
import './exercises.css'

export const Exercises = () => {
  const { error = false, loading = false, exercisesList = [] } = useSelector(state => state.exercises)
  const isMale = useSelector(state => state.navbar?.isMale)

  const renderLoading = () => (
    <div className='loading-container'>
      <ScaleLoader color={'#000'} loading={true} size={150} />
    </div>
  )

  const renderExercises = () => {
    return (
      exercisesList.map(
        exercise => <Exercise key={exercise?.id} id={exercise?.id} title={exercise?.name} image={isMale ? exercise?.male?.image : exercise?.female?.image} />
      )
    )
  }

  const renderError = () => <div>Sorry, something went wrong, please try again later!</div>
  

  return (
    <div className='exercises-container'>
      {loading && renderLoading()}
      {!loading && exercisesList.length > 0 && renderExercises()}
      {error && renderError()}
    </div>
  )
}

export default Exercises