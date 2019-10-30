
 import { createStore, combineReducers,applyMiddleware } from 'redux'
 import thunk from 'redux-thunk'
import postsReducers from '../reducers/postReducers'
import authorsReducers from '../reducers/authorReducer'
 const configureStore = () => {
     const store = createStore(combineReducers({
        posts:postsReducers,
        users:authorsReducers
     }),applyMiddleware(thunk))
     return store 
 }
 export default configureStore 