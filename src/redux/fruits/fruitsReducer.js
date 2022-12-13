import { BUY_FRUITS } from "./fruitsActionTypes";

const initialState={
    noOfFruits:10,
}

export default function fruitsReducer(state=initialState,action){
    switch (action.type) {
        case BUY_FRUITS:
            return{
                ...state,
                noOfFruits:state.noOfFruits-action.payload
            }
            
    
        default:
            return state;
    }
}