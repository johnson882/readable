import React, { Component } from 'react'
import { connect } from 'react-redux';
import { savePost } from '../actions/actions'
import PostForm from './form'

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: '', body: '', author:'', category: ''}
  }



  submit = values => {

const post = {
  title: values.title,
  body: values.body,
  author: values.author,
  category: values.category
}

console.log(this.props.savePost(post));
//dispatch(post)
  }

  // savePost action

  render() {
    return <PostForm onSubmit={this.submit} />
  }
}

/*
const mapStateToProps(state){
  return{}
};
*/


function mapDispatchToProps(dispatch) {
  return {
    savePost: (post) => dispatch({type: 'SAVE_POST', payload: post}),
  }
};


//export default connect(null,mapStateToProps)(CreatePost)


export default connect(null, {savePost})(CreatePost);
//export default CreatePost
