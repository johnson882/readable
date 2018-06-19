import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

//initial state - to change later as state changes
const initialStateTest = {
  postID: 45

};

const InitialStatePost = {
Title: '',
Body: '',
Author: '',

}

const middleware = [thunk];
// sets initial state to current state first time its called only
const testReducer = (state = initialStateTest, action) => {
  console.log('reducer running', action);
  switch(action.type){
    case 'SUBMIT':
      return Object.assign({}, state, {postID: state.postID + 1}) // first creates new object and copys state
      // to new object, then overides state content with postID + 1, incrementing the PostId by 1, Later add
      //all the PostId information Header, Body, ect...

      default:
      return state;

  }


}

const form = (state = InitialStatePost, action) => {
  console.log('reducer form running', action)
  switch(action.type){


  }

}

const store = createStore(combineReducers({testReducer, form: formReducer}, applyMiddleware(...middleware)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // create store

export default store; // exports the store to other componr
