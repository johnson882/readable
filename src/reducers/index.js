import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import {SAVE_POST, FETCH_POST} from '../actions/types'
import {reducer as formReducer} from 'redux-form'

//initial state - to change later as state changes


const initialStatePost = {
  posts: []
   //  item: {}
}

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
        ...state, posts: action.payload
      }

    case 'SAVE_POST':
    alert('Reached save post!')
    console.log("reached save: ", action.payload)
    return{
      ...state, posts: state.posts.concat(action.payload)
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

const store = createStore(combineReducers({postReducer,  form: formReducer }),compose( applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())); // create store

export default store; // exports the store to other componr
