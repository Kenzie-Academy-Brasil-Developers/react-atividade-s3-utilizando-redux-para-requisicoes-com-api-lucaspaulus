
import addDigimon from "./actions"
import Api from "../../../api"
const addDigimonsThunk = (digimon, setError)=> (dispatch)=>{
    Api.get(`/name/${digimon}`)
    .then((response)=> {dispatch(addDigimon(response.data))
        console.log(response.data)
    
    })
    .catch((_)=> setError(true))
    
}

export default addDigimonsThunk