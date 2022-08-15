import { useSelector, useDispatch } from 'react-redux'
import { createBlog } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addBlog = (event) => {
    event.preventDefault()
    const content = event.target.blog.value
    event.target.blog.value = ''
      dispatch(
        createBlog(content))
  }
  return (
    <div>
<h2>create new</h2>
<form onSubmit={addBlog}>
  <input name="blog" /> 
  <button type="submit">create</button>
</form></div>
)}

export default AnecdoteForm

