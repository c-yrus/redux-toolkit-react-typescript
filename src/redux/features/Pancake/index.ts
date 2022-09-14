import { createSlice } from "@reduxjs/toolkit"
const initialState = { value: 0 }

export const pancakeSlice = createSlice({
  name: "panCake",
  initialState,
  reducers: {
    addPancake: (state, action) => {
      state.value += action.payload
    },
    sellPancake: (state) => {
      if (state.value > 0) state.value -= 1
    },
  },
})

export const { addPancake, sellPancake } = pancakeSlice.actions

export default pancakeSlice.reducer
