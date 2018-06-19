import React from 'react'
import PostForm from './form'

class CreatePost extends React.Component {
  submit = values => {
    // print the form values to the console

    alert(values.category)

const post = {
  title: values.title,
  body: values.body,
  author: values.author,
  category: values.category
}

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
