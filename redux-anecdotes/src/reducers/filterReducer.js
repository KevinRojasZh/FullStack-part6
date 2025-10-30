

const reducer = (state = '' ,action) => {

    switch(action.type){
        case 'FILTER':{
            return action.payload
        }
    }

    return state

}

//ACTION CREATORS 
export const filter =(value) =>{
    return{
        type:'FILTER',
        payload:value
    }
}

export default reducer