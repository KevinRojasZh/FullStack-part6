import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../services/request'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (content) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })

      dispatch({
        type: 'NEW',
        payload: `Nueva anécdota agregada: "${content.content}"`,
      })

      setTimeout(() => {
        dispatch({ type: 'CLEAR' })
      }, 3000)
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate(content)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
