import { actionType } from "./actionTypes"

export const initalState = {
    loading:false,
    data:[],
    error:false
}
export const dataReducer = (state,action) =>{
switch(action.type){
    case actionType.FATCHING_START:
     return {
        ...state,
        loading:true,
        error:false 
    }
    case actionType.FATCHING_SUCCESS:
     return {
        ...state,
        loading:false,
        data:action.payload,
        error:false 
    }
    case actionType.FATCHING_ERROR:
     return {
        ...state,
        loading:false,
        error:true 
    }
    
    default: 
    return state
}
    
}