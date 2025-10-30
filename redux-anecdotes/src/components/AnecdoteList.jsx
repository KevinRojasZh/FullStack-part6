import { vote } from '../reducers/anecdoteReducer'
import { useDispatch,useSelector } from 'react-redux'


const AnecdoteList= () =>{
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const handlevote = id => {
    dispatch(vote(id)) 
  }

  const anecdotesToShow = anecdotes.filter(anecdote => 
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )

return(
      <div>
        {anecdotesToShow.map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handlevote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
      </div>

)
}

export default AnecdoteList
