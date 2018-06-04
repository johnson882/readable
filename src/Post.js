
import React from 'react';
import { connect } from 'react-redux';

function Post(props){ console.log('render', props)
  return (
    <div>
      <h1>Posts! </h1>
      <h2>A post Title </h2>
      <p>postID: {props.postID}</p>
      <button onClick={props.onAddToStateClick}>Submit post</button>
    </div>

  )

}

function mapStateToProps(state){
console.log('mapStateToProps', state);
  return {
    postID: state.postID // PostID: is the property passed into props
  }
}

// adds dispatch to props, in this case onAddToStateClick, then add to the wrap below
function mapDispatchToProps(dispatch){
  return{
    onAddToStateClick: () => {console.log('added Post to store');
    const action = {type: 'SUBMIT'};
    dispatch(action);
  }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post); // wrap our commponent with the one
//created by connect component and glues/adds/combines mapStateToProps to it.
