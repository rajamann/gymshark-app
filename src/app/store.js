import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import exercisesReducer from '../redux/exercisesSlice'
import navbarReducer from '../redux/navbarSlice'

import { sagaRootWatcher } from '../sagas/root.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
    navbar: navbarReducer
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(sagaRootWatcher)