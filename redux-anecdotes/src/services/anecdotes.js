import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const getAll = async () => {
    const anecdotes = await axios.get(baseUrl)
    return anecdotes.data
}

const createNew = async (content) => {
  const object = asObject(content)
  const response = await axios.post(baseUrl, object)
  return response.data
}

const getOneAnecdote = async (id) =>{
    const anecdote = await axios.get(`${baseUrl}/${id}`)
    return anecdote.data
}

const votedAnecdote = async (id) =>{
  const anecdote = await getOneAnecdote(id)
  const votes = {votes: anecdote.votes += 1}
  const updateAnecdote = await axios.patch(`${baseUrl}/${id}`,votes)
  return updateAnecdote.data

}

export default { getAll,createNew,getOneAnecdote,votedAnecdote}