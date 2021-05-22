import { combineReducers } from 'redux'
 import CarouselReducer from './CarouselReducer'

const  rootReducer = combineReducers({
    CarouselReducer
})

export default (state, action) =>{
    
    return rootReducer( state, action);
}
  