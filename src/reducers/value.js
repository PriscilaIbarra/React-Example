//Receive previous state and returns new state
//assign initialState to state const value = (state=initialState,action)
const value = (state=0,action)=>{
 switch(action.type){
     case 'SET':
         //state.valor = action.valor ->wrong
         // Object.assign({},param1,params2);->Merge or clone objects, receive empty object and create a new one with state and value atributte
         return action.value
     default:
         return state
 }  
}

export default value;