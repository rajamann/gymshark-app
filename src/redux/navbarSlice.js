import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMale: true
};

export const navbarSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    setIsMale: (state) => {
      state.isMale = true
    },
    setIsFemale: (state) => {
      state.isMale = false
    }
  }
})

export const { setIsMale, setIsFemale } = navbarSlice.actions;

export default navbarSlice.reducer;
