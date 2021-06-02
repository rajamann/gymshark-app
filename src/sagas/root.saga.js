import { fork } from 'redux-saga/effects'
import { sagaGetExercises }  from './getExercises.saga'

export function * sagaRootWatcher() {
    yield fork(sagaGetExercises)
}