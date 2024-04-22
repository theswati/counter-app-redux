import store from "./redux/store.js"
import {increase,decrease,reset} from "./redux/actions/counterAction.js"

//getState()
//dispatch()

//getState() is a method that returns the current state value of the redux store.

//dispatch() helps you to perform an action.

//flow:how it is working

// js->store->reducer(logic)->reducer will return value to store->store will ans back to js.


console.log (store.getState()) //0

store.dispatch(increase())//happens

//store.dispatch({type:"INCREASE"})

console.log(store.getState())//1

store.dispatch(decrease())
// //store.dispatch({type:"INCREASE"})
console.log(store.getState())//2


store.dispatch(reset())//
console.log(store.getState())
