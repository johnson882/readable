import React from 'react'
import PostForm from './form'

class CreatePost extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
    //dispatch('')
  }
  render() {
    return <PostForm onSubmit={this.submit} />
  }
}

export default CreatePost
