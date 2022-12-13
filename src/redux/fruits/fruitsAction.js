import { BUY_FRUITS } from "./fruitsActionTypes";

export function buyFruits(noOfFruits){
    return{
        type: BUY_FRUITS,
        payload:noOfFruits,
    }
}