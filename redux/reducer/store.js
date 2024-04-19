import { createStore } from "redux";//older
import counterReducer from "./counterReducer.js";


const store=createStore(counterReducer)

export default store;