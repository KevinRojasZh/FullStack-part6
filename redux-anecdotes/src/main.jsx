import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'


import App from './App'
import filterSlice from './slicers/filterSlice'
import anecdoteSlice from './slicers/anecdoteSlice'
import notificationSlice from './slicers/notificationSlice'


const store = configureStore({
  reducer:{
    anecdotes: anecdoteSlice,
    filter: filterSlice,
    notification:notificationSlice
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
