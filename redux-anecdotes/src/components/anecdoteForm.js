import { createBlog } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

    const addBlog = async (event) => {
    event.preventDefault()
    const content = event.target.blog.value
    event.target.blog.value = ''
    props.createBlog(content)
    props.setNotification(`you created '${content}'`, 10)
  }
  return (
    <div>
<h2>create new</h2>
<form onSubmit={addBlog}>
  <input name="blog" /> 
  <button type="submit">create</button>
</form></div>
)}
//Toimiiko nyt

export default connect(null, {createBlog, setNotification} )(AnecdoteForm) 

