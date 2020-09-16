/* eslint-disable default-case */
import produce from "immer";

const initialState = {
    pizza : [],
    order : [],
    loading : true
}
const reducer = (state = initialState,action) => {
    return produce(state,draft => {

       switch (action.type){
           case "PIZZA_REQUEST":
               draft.loading = true
               break

           case "PIZZA_LOADED":
               draft.loading = false
               draft.pizza = action.payload
               break

           case "PIZZA_ERROR":
               draft.loading = false
               draft.error = true
               break

           case "ADD_PIZZA":
               console.log(action.pizza)
               const {name,type,size} = action.pizza
               let index = state.order.findIndex(pizza => 
                {return ( (pizza.name === name) && (pizza.type === type) && (pizza.size === size) )})
               
                if (index !== -1){
                    console.log("Hi")
                    draft.order[index].count += 1
                    break
                }

                console.log("hello")

               draft.order.push(action.pizza)
               break
       }
    })
}

export default reducer