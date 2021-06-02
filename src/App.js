import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getExercises } from './redux/exercisesSlice'
import Navbar from './components/navbar/Navbar'
import Exercises from './components/exercises/Exercises'
import Details from './components/details/Details'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getExercises())
  })

  return (
    <div className='app'>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/detail/:id'>
              <Details />
            </Route>
            <Route exact path='/'>
              <Exercises />
            </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App
