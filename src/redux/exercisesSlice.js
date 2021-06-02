import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  exercisesList: [],
  loading: false,
  error: false
}

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    getExercises: (state) => {
      state.loading = true
    },
    setExercisesSuccess: (state, action) => {
      state.loading = false
      state.exercisesList = action?.payload?.exercises
    },
    setExercisesFailed: (state) => {
      state.loading = false
      state.error = true
      state.exercisesList = []
    }
  }
})

export const { getExercises, setExercisesSuccess, setExercisesFailed } = exercisesSlice.actions

export default exercisesSlice.reducer
