import { createStore } from "redux";//older
import counterReducer from "./reducer/counterReducer.js";


const store=createStore(counterReducer)

export default store;