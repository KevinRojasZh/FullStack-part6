import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/FilterAnecdotes'
import Notification from './components/Notification'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initialAnecdotes } from './slicers/anecdoteSlice'


const App = () => {
  const dispacht = useDispatch()

  useEffect(() => {
    dispacht(initialAnecdotes())
  },[dispacht])

  return (
    <div>
      <Filter/>
      <Notification/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App
