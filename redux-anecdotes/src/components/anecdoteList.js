import { useSelector, useDispatch } from 'react-redux'
import { votetaan } from '../reducers/anecdoteReducer'
import Notification from './Notification'

const AnecdoteList =() => {

    const a2 = useSelector(state => state.anecdotes)
    const anecdotes = [...a2].sort(function (a, b) {
      return (b.votes - a.votes)
    })

    const dispatch = useDispatch()
        const vote = (id) => {
            console.log('vote', id)
            dispatch(votetaan(id))
          }
          return (
            <div>
            <Notification />
              {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                  <div>
                    {anecdote.content}
                  </div>
                  <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                  </div>
                </div>
              ).sort((a, b) => a.votes > b.votes)}
          </div>)
    }
  export default AnecdoteList