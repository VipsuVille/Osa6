import { useEffect } from 'react'
import AnecdoteForm from './components/anecdoteForm'
import AnecdoteList from './components/anecdoteList'
import { initializeNotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const App = () => {

 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes()) 
  }, [dispatch]) 

    return (
    <div>
      <h2>Anecdotes</h2>
     <AnecdoteList />
     <AnecdoteForm />
    </div>
  )
}

export default App