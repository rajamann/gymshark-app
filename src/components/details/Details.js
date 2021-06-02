import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './details.css'

export const Details = () => {
    const { id } = useParams()

    const exercises = useSelector(state => state.exercises?.exercisesList)
    const isMale = useSelector(state => state.navbar?.isMale)

    const exercise = exercises.filter(exercise => id === exercise.id) || []

    const { bodyAreas, male, female, name, transcript } = exercise[0] || {}

    const renderBodyAreas = () => (
        bodyAreas?.map((bodyArea, index) => <span className='details--body-area' key={index}>{bodyArea}</span>)
    )

    return (
        <div className='details-container'>
            <img src={isMale ? male?.image : female?.image} alt={name} height='300' />
            <h2>{name}</h2>
            <div className='details--body-areas-container'>
                <p className='details--body-areas-label'>Body Areas:</p>
                {renderBodyAreas()}
            </div>
            <div dangerouslySetInnerHTML={{__html: transcript}} />
        </div>
    )
}

export default Details