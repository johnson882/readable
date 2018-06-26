import {SAVE_POST, FETCH_POSTS} from './types'
import axios from '../components/axios'
const uuidv4 = require('uuid/v4');




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




export const fetchPosts = () => dispatch => ({
  type: FETCH_POSTS,
  payload: axios.get('/posts').then(res => dispatch({type: 'FETCH_POSTS', payload: res.data}))
})
