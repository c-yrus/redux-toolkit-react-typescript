import { createSlice } from "@reduxjs/toolkit"
const initialState = { value: 0 }

import { addPancake } from "../Pancake/"
export const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    addIceCream: (state) => {
      state.value += 1
    },
    sellIceCream: (state) => {
      if (state.value > 0) state.value -= 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPancake, (state) => {
      state.value += 2
    })
  },
})

export const { addIceCream, sellIceCream } = iceCreamSlice.actions

export default iceCreamSlice.reducer
