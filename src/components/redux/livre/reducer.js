
import { ajouter } from "./type"
import { supp } from "./type"  
const InisalStat={
        livre: 0
    }
export const reducer=(state=InisalStat,action)=>{
    
    switch (action.type) {
        case ajouter:
            return{
                ...state,
                livre:state.livre+1
            }
        case supp:
            return{
                ...state,
                livre:state.livre-1
            }
        default:
            return state;
    }
}