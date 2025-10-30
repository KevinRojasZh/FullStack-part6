import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


import App from './App'
import fiterReducer from './reducers/filterReducer'
import anecdotereducer from './reducers/anecdoteReducer'

const combineReducer = combineReducers({
  anecdotes: anecdotereducer,
  filter: fiterReducer
})

const store = createStore(combineReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
