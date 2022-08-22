import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/anecdoteReducer'
import reducer2 from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    anecdotes: reducer,
    notification: reducer2
  }
})


export default store