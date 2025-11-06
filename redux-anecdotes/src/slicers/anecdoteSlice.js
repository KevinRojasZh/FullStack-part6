import { createSlice} from "@reduxjs/toolkit" 
import services from '../services/anecdotes'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = anecdote => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }
// const initialState = anecdotesAtStart.map(asObject)

const initialState = []

const sliceAnecdote = createSlice({
  name:'anecdote',
  initialState,
  reducers:{
    vote(state,action){
      const updateAnecdote = state.find(anecdote => anecdote.id === action.payload.id)
      if(updateAnecdote){
        updateAnecdote.votes +=1
      }
    state.sort((a,b)=> b.votes - a.votes)
    },
    appendAnecdote(state,action){
      state.push(action.payload)
      
    },
    setAnecdotes(state,action){
      state.push(...action.payload)
    }
  }
})

export const {vote,appendAnecdote,setAnecdotes} =  sliceAnecdote.actions

export const initialAnecdotes = () => {
  return async dispacht =>{
    const anecdotes = await services.getAll()
    dispacht(setAnecdotes(anecdotes))
  }
}
export const newAnecdote = (content)  =>{
  return async dispacht =>{
    const newNote = await services.createNew(content)
    dispacht(appendAnecdote(newNote))
  }
}
export const votedAnecdote = (id) =>{
  return async dispacht =>{
    const anecdoteVoted = await services.votedAnecdote(id)
    dispacht(vote(anecdoteVoted))
  }
}


export default sliceAnecdote.reducer








// const initialState = anecdotesAtStart.map(asObject)

// const anecdoteReducer = (state = initialState, action) => {

//   switch(action.type){
//     case 'VOTE':{
//       const updateAnecdote = state.find(anecdote => anecdote.id === action.payload.id)
//       const updateVoto = {
//         ...updateAnecdote,
//         votes: updateAnecdote.votes + 1}
//       const newState = state.map(anecdote => {
//         return anecdote.id == action.payload.id ? updateVoto : anecdote
//       })
//       const orderState = newState.sort((a,b)=> b.votes - a.votes)
//       return orderState
//     }
//     case('NEWANECDOTE'):{
//       return [...state, asObject(action.payload.anecdote)]
//     }
//   }



//   return state
// }

// //ACTION CREATORS

// export const vote = id => {
//     return{
//         type: 'VOTE',
//         payload:{id}
//       }
//     }

// export const newAnecdote = (event) =>{
//     event.preventDefault()
//     console.log('PASADA:',event.target.anecdote.value)
//     const anecdote = event.target.anecdote.value
//     event.target.anecdote.value = ''

//     return{
//       type:'NEWANECDOTE', 
//       payload:{anecdote}
//     }
//   }

// export default anecdoteReducer
