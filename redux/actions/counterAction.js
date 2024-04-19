// for every group of action we make action creator file

//counter App-file-counterAction.js

//cart App-new file-cartAction.js

//used to call an action

import{INCREASE,DECREASE,RESET} from "./actionTypes.js"

export function increase(){
    return{
        type:INCREASE,
    }
}

export function decrease(){
    return{
        type:DECREASE
    }
}

export function reset(){
    return{
        type:RESET
    }
}

