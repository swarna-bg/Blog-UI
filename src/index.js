// html - <script src="./js/react.js"></script>

//es2015 (es6) module loading - react, angular (by default)
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
//import {startSetPosts} from './actions/posts'
import 'bootstrap/dist/css/bootstrap.min.css';
const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
//store.dispatch(startSetPosts())


const ele=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(ele, document.getElementById('root'))



//common js module laoding - node, express
//const express= require('express')