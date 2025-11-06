import { newAnecdote } from '../slicers/anecdoteSlice'
import { useDispatch } from 'react-redux'
import {setTimeNotification} from '../slicers/notificationSlice'



const AnecdoteForm= () =>{

  const dispatch = useDispatch()

    const handleNewAnecdote = async (event) =>{
      event.preventDefault() 
      if (event.target.anecdote.value === ''){
        const message = 'None anecdote written'
        return dispatch(setTimeNotification(message))
      }else{
        let content = event.target.anecdote.value
        event.target.anecdote.value = ''
          dispatch(newAnecdote(content))
          dispatch(setTimeNotification('Anecdote created'))
      }
    }    
return(
  <div style={{marginBottom:10}}>
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
