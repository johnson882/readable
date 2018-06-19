import React from 'react'
import PostForm from './form'

class CreatePost extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
    //alert('Title:'+ values.body);
    savePost(values)
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

export const savePost = ({ title, body, author}) => ({

  payload: ( {

    timestamp: Date.now(),
    title,
    body,
    author,

  })
})
export default CreatePost
