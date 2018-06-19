import React from 'react'
import { Field, reduxForm } from 'redux-form'

let PostForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">Title</label>
        <Field name="title" component="textarea" type="text" />
      </div>
      <br/>
      <div>
        <label htmlFor="Body">Body</label>
        <Field name="body" component="textarea" type="text" />
      </div>
      <br/>
      <div>
        <label htmlFor="Author">Author</label>
        <Field name="author" component="textarea" type="text" />
      </div>
      <br/>
      <div>
        <label htmlFor="Category">Category</label>
        <Field name="category" component="input" type="text" />
      </div>
      <br/>
      <button type="submit">Submit</button>
    </form>
  )
}

PostForm = reduxForm({
  // a unique name for the form
  form: 'post'
})(PostForm)

export default PostForm
