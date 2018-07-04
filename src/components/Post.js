import '../App.css';

import React , { Component } from 'react';
//import store from '../reducers/'
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/actions'


class Post extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchPosts();

  }



//  console.log('render', props)
  //const { onSubmit } = this.props
render(){
  console.log("this is the post reducer:", this.props.postReducer)
  const postItems = [].concat(this.props.posts).sort((a,b) => a.timestamp < b.timestamp).map(post => (
    <div key={post.id}>
    <h1>{post.title} </h1>
    <p> {post.body} </p>
    -----------------------------
    <p> Author:{post.author}</p>
    <p> Category: {post.category}</p>
    <br/>
    </div>

  ))

  return (
  <div>
  {postItems}
  </div>






  )
}
}

function mapStateToProps(state){
console.log('mapStateToProps', state);
  return {
    posts: state.posts.items // PostID: is the property passed into props

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
export default connect(mapStateToProps, {fetchPosts})(Post); // wrap our commponent with the one
//created by connect component and glues/adds/combines mapStateToProps to it.
