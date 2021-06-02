import React from 'react'
import './exercise.css'
import { useHistory } from 'react-router-dom'

export const Exercise = ({ image, title, id }) => {
    const history = useHistory()

    const handleClick = () => {
      history.push(`/detail/${id}`)
    }

    return (
        <div className='exercise-container' onClick={handleClick}>
          <img src={image} alt={title} height='300' />
          <div className='exercise--title'>{title}</div>
        </div>
    )
}

export default Exercise