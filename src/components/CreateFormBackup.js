import React, {Component} from 'react';
import { reduxForm } from 'redux-form'
import '../App.css';
import { connect } from 'react-redux';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "this is the value"

    }
  //  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

handleSubmit(values) {
      // submit logic goes here
      console.log(values)
    //  alert('handleForm ' + e );
      //console.log('submit',e.target.value)
      //this.props.addPostToStore(e)




    }

onChange(val){
        console.log('onSubmit')
    }

  render() {
    console.log('props',this.props)
//const { onSubmit } = this.props //pass onSubmit from
    return (
      <div>
      <h1> Submit a post!</h1>
      <form  onSubmit={this.handleSubmit}>
      <div>
        <p>Title:</p>
        <textarea type="text" />
      </div>
      <br/>
      <article>
        <p>Article:</p>
        <textarea className="article" type="text"/>
      </article>
      <p>Author:</p>
      <textarea type="text" />


      <input type="submit" value="Submit" />
      </form>




      </div>

  )
}
}

function mapStateToProps(state){
console.log('mapStateToProps', state);
  return {
    postID: state.postID // PostID: is the property passed into props
  }
}

// adds dispatch to props, in this case onAddToStateClick, then add to the wrap below
function mapDispatchToProps(dispatch){
   return {
     addPostToStore: (data) => {dispatch(data)}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePost); // wrap our commponent with the one
//created by connect component and glues/adds/combines mapStateToProps to it.
