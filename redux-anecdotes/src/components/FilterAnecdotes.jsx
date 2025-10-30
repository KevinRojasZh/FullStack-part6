import { filter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"


const Filter =() =>{
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const value = event.target.value
        dispatch(filter(value))
    }


    const style = {
    marginBottom: 10
    }

    return(
        <div style={style}>
            <input placeholder='Search' onChange={handleChange} />
        </div>
    )
}

export default Filter