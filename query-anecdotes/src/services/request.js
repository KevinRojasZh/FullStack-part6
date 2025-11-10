import axios from 'axios'
import anecdotes from '../../../redux-anecdotes/src/services/anecdotes'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    // id: getId(),
    votes: 0,
  }
}

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
export const createAnecdote = async (newAnecdote) => {
  const object = asObject(newAnecdote)
  const response = await axios.post(baseUrl, object)
  return response.data
}
export const voteAnecdote = async (id) => {
  const urlAnecdote = `${baseUrl}/${id}`
  const anecdote = await axios.get(urlAnecdote)
  const updateVotes = (anecdote.data.votes += 1)
  const updateAnecdote = await axios.patch(urlAnecdote, { votes: updateVotes })
  return updateAnecdote.data
}
