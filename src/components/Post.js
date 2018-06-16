import '../App.css';

import React from 'react';
//import store from '../reducers/'
import { connect } from 'react-redux';

function onSubmit(val){
        debugger;
    }

function Post(props){

  console.log('render', props)
  //const { onSubmit } = this.props
  return (
    <div>
    <h1> Submit a post!</h1>
    <form onSubmit={ (e)=> {onSubmit}  }>
    <div>
      <p>Title:</p>
      <textarea type="text" />
    </div>
    <br/>
    <article>
      <p>Article:</p>
      <textarea class="article" type="text"/>
    </article>
    <p>Author:</p>
    <textarea type="text" />


    <input type="submit" value="Submit" />
    </form>




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
