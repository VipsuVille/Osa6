import { useSelector, useDispatch } from 'react-redux'
import { votetaan } from '../reducers/anecdoteReducer'
import Notification from './Notification'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList =() => {
    const a2 = useSelector(state => state.anecdotes)
    const anecdotes = [...a2].sort(function (a, b) {
      return (b.votes - a.votes)
    })

    const dispatch = useDispatch()
        const vote = (id) => {
            console.log('vote', id)
            dispatch(votetaan(id.id, id))
            dispatch(setNotification(`you voted '${id.content}'`, 10))
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
                    <button onClick={() => vote(anecdote)}>vote</button>
                  </div>
                </div>
              ).sort((a, b) => a.votes > b.votes)}
          </div>)
    }
  export default AnecdoteList