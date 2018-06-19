import React, {Component} from 'react';
import { reduxForm, Field, SubmissionError, Form, Text, Radio, RadioGroup, TextArea, Checkbox} from 'redux-form'
import '../App.css';
import { connect } from 'react-redux';



class CreatePost extends Component{
  input() {
    return(
      <div>

    <textarea name={'Title1'}type="text"> </textarea>
      </div>
    )
  }
  submit({Title}, dispatch) {
    alert( JSON.stringify(Title))
    console.log(Title)
  }

 createRenderer((input, label) {
   return(
    <input {...input} placeholder={label} />)
  }

  render() {
    const { handleSubmit } = this.props;

return (
  <form onSubmit={handleSubmit(this.submit.bind(this))}>
  <label>Title</label>
  <Field name='Title' component={createRenderer} />
  <br/>
  <label>body</label>
  <Field name='Body' component={createRenderer} />
  <br/>
  <label>Author</label>
  <Field name='Author' component={createRenderer} />
  <br/>
  <button type='submit'> Submit</button>
   </form>
)

  }
}

export default reduxForm({
  form: 'CreatePostForm',
  destroyOnUnmount: false
})(CreatePost)



// adds dispatch to props, in this case onAddToStateClick, then add to the wrap below
// wrap our commponent with the one
//created by connect component and glues/adds/combines mapStateToProps to it.
