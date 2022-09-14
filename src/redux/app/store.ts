import { configureStore } from "@reduxjs/toolkit"
import pancakeReducer from "../features/Pancake"
import iceCreamReducer from "../features/iceCream"
const store = configureStore({
  reducer: { panckake: pancakeReducer, iceCream: iceCreamReducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
