import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setIsMale, setIsFemale } from '../../redux/navbarSlice'
import './navbar.css'

export const Navbar = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const isMale = useSelector(state => state.navbar?.isMale)

    const handleMaleClick = () => {
        !isMale && dispatch(setIsMale())
    }

    const handleFemaleClick = () => {
        isMale && dispatch(setIsFemale())
    }

    return (
        <div className='navbar-container'>
            <div className='navbar--main'>
                <img 
                    src='https://cdn.shopify.com/s/files/1/0156/6146/files/Full_Black_Logo.png?height=628&pad_color=ffffff&v=1546437504&width=200'
                    alt='gymshark logo'
                    height='100' />
                <button className='navbar--button' onClick={() => history.push('/')}>Home</button>
            </div>
            <div className='navbar--selection'>
                <button className={`button ${isMale ? 'selected' : 'unselected'}`} onClick={handleMaleClick}>Male</button>
                <button className={`button ${!isMale ? 'selected' : 'unselected'}`} onClick={handleFemaleClick}>Female</button>
            </div>
        </div>
    )
}

export default Navbar