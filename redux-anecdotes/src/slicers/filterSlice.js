import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name:'filter',
    initialState:'',
    reducers:{
        setFilter(state,action){
            return action.payload
        }
    }

})

// Exporta el action creator automáticamente creado
export const { setFilter } = filterSlice.actions

// Exporta el reducer para usarlo en configureStore
export default filterSlice.reducer






// const filterReducer = (state = '' ,action) => {

//     switch(action.type){
//         case 'FILTER':{
//             return action.payload
//         }
//     }

//     return state

// }

// //ACTION CREATORS 
// export const filter =(value) =>{
//     return{
//         type:'FILTER',
//         payload:value
//     }
// }

// export default filterReducer