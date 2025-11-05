import { createSlice} from "@reduxjs/toolkit"  


const notificationSlice = createSlice({
  name:'notification',
  initialState:{message:''},
  reducers:{
    setNotification(state,action){
      state.message = action.payload
    },
    clearState(){
      return {message:''}
    }
  }
})

export const {setNotification,clearState} =  notificationSlice.actions

export const setTimeNotification= (message, durationSeconds=2) => {
  return dispatch => {
    dispatch(setNotification(message))
    setTimeout(()=>{
      dispatch(clearState())
    }, durationSeconds * 1000)
  }
}
export default notificationSlice.reducer






