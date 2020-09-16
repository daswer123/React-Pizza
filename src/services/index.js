import axios from "axios"
class PizzaInfo{
    _apiBase = "localhost:3001" 
    axios = axios;

    getAllPizza = () => {
        const request = axios.get(this._apiBase+"/pizza").catch(err => {
            console.log("something get wrong")
        })
        
        return request
    }
}

export default PizzaInfo