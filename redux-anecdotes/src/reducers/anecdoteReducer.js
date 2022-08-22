import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const initialState = []

const reducer = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    votetan (state, action) {
    const id = action.payload

        return state.map(blog =>
          blog.id !== id.id ? blog : id
  )},


appendAnecdote(state, action) {
  state.push(action.payload)
},
setAnecdotes(state, action) {
      return action.payload
    }
}
})


export const { appendAnecdote,setAnecdotes, votetan} = reducer.actions

export const initializeNotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createBlog = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export const votetaan = (id, neew) => {
  const changedAnecdote = { 
    ...neew, 
    votes: neew.votes + 1 
  }
  return async dispatch => {
    const anecdote = await anecdoteService.voteAnecdote(id,changedAnecdote)
    dispatch(votetan(anecdote))
  }
}

export default reducer.reducer