import { createStore, combineReducers } from 'redux'
import ProductReducer from '../components/ProductReducer';

const rootReducer = combineReducers({
    list: ProductReducer
})

const saveToLocalStorage = (state) => {
    try{
      const serializedState = JSON.stringify(state)
     localStorage.setItem('state', serializedState)
 }catch(e){
     console.log(e);
 }
 }
 
 const loadFromLocalStorage = () => {
    try{
      const serializedState = localStorage.getItem('state')
     if(serializedState === null) return undefined
     return JSON.parse(serializedState)}
     catch(e){
         console.log(e)
     }
 }
 
 const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState);
store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;