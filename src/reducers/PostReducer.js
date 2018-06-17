import { createStore } from 'redux';

//initial state - to change later as state changes
const initialState = {
  postID: 25

};

// sets initial state to current state first time its called only
const reducer = (state = initialState, action) => {
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



export default reducer;
