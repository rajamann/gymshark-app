import { call, put, takeLatest } from 'redux-saga/effects'
import { getExercises, setExercisesSuccess, setExercisesFailed } from '../redux/exercisesSlice'
import { getExercises as getExercisesApi } from '../api/exercises.api'

export function * sagaGetExercisesWorker() {
   try {
       const exercises = yield call(getExercisesApi);
       yield put(setExercisesSuccess(exercises));
   } catch (error) {
       console.log(error)
       yield put(setExercisesFailed());
   }
}

export function * sagaGetExercises () {
    yield takeLatest(getExercises.type, sagaGetExercisesWorker)
}