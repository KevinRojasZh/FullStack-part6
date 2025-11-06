import { configureStore } from "@reduxjs/toolkit"
import filterSlice from './slicers/filterSlice'
import anecdoteSlice from './slicers/anecdoteSlice'
import notificationSlice from './slicers/notificationSlice'



const store = configureStore({
  reducer:{
    anecdotes: anecdoteSlice,
    filter: filterSlice,
    notification:notificationSlice
  }
})

export default store