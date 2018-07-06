import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import {SAVE_POST, FETCH_POST} from '../actions/types'
import {reducer as formReducer} from 'redux-form'

//initial state - to change later as state changes


const initialStatePost = {
  items: []
   //  item: {}
}


const initialState = {};
const middleware = [thunk];
// sets initial state to current state first time its called only

const postReducer = (state = initialStatePost, action) => {
  //console.log('reducer running', action);
  switch(action.type){
    case 'SUBMIT':
      return Object.assign({}, state, {postID: state.postID + 1}) // first creates new object and copys state
      // to new object, then overides state content with postID + 1, incrementing the PostId by 1, Later add
      //all the PostId information Header, Body, ect...
      case 'FETCH_POSTS': return{
        ...state, items: action.payload
      }

    case 'SAVE_POST':
    alert('Reached save post!')
    console.log("reached save: ", action.payload)
    return{
      ...state, items: state.items.concat(action.payload)
  //  ...state, posts: [...state].unshift(action.payload)
    };

      default:
      return state;

  }


}

/*
const form = (state = InitialStatePost, action) => {
  console.log('reducer form running', action)
  switch(action.type){


  }

} */

const store = createStore(combineReducers({posts: postReducer,  form: formReducer }), initialState, compose( applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose )); // create store

export default store; // exports the store to other componr
