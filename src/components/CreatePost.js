import React, { Component } from 'react'
import { connect } from 'react-redux';
import { savePost} from '../actions/actions'
import PostForm from './form'

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: '', body: '', author:'', category: ''}
  }



  submit = values => {
    // print the form values to the console
  //  values.preventDefualt();
    alert(values.category)

const post = {
  title: values.title,
  body: values.body,
  author: values.author,
  category: values.category
}

this.props.savePost(post);

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

const mapDispatchToProps(dispatch){
  return{
    addPost: (values) => {
      dispatch({
        type: "addPost",
        payload: values
      });
    }

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)
*/

export default connect(null, { savePost})(CreatePost);
//export default CreatePost
