import { newAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const AnecdoteForm= () =>{

  const dispatch = useDispatch()

    const handleNewAnecdote = (event) =>{
      if (event.target.anecdote.value === ''){
        window.alert('None anecdote written')
      }else{
        dispatch(newAnecdote(event))
      }
  
    }
return(
  <div>
    <h2>create new</h2>
        <form onSubmit={handleNewAnecdote}>
          <div>
            <input name='anecdote'/>
          </div>
          <button>create</button>
        </form>
  </div>

)
}

export default AnecdoteForm
