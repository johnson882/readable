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
  render() {
    return <PostForm onSubmit={this.submit} />
  }
}

export default CreatePost
