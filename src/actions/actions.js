import {SAVE_POST, FETCH_POSTS} from './types'
import axios from '../components/axios'
const uuidv4 = require('uuid/v4');



/*
export const savePost = postData => dispatch => {
    const {title, body, author, category} = postData;
    console.log(title)
  axios('/posts', {
    id: uuidv4(),
    timestamp: Date.now(),
    title, body, author, category,
  } )
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: SAVE_POST,
        payload: post
      })
    );
};
*/
/*
export function savePost(values){
  const {title, body, author, category} = values;

  const data = {
    id: uuidv4(),
    timestamp: Date.now(),
    title, body, author, category }

    return dispatch => {
      axios.post( '/post', data ).then(res => console.log(res.data))
    }

}

*/

function savePostStore(data) {
    return {
        type: SAVE_POST,
        payload: data
    };
}





export const savePost = ({title, body, author, category}) => dispatch =>({

  type: SAVE_POST,
  payload: axios.post('/posts', {
    id: uuidv4(),
    timestamp: Date.now(),
    title, body, author, category,
  } ).then(res => (dispatch({type: 'SAVE_POST', payload: res.data}))),
  //const { title, body, author, category } = values;

})



export const fetchPost = () => pData=> dispatch => {


}
