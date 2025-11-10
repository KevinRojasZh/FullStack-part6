import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAll, voteAnecdote } from '../services/request'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteList = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const { status, data, error } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,
    retry: 1,
  })

  const voteMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })

      dispatch({
        type: 'VOTED',
        payload: `Ancdote Voted!`,
      })

      setTimeout(() => {
        dispatch({ type: 'CLEAR' })
      }, 3000)
    },
  })

  if (status === 'pending') {
    return <div>loading data...</div>
  }
  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }
  const anecdotes = data

  const handleVote = (id) => {
    voteMutation.mutate(id)
  }

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
