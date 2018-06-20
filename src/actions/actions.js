import {SAVE_POST, FETCH_POSTS} from './types'
import axios from '../components/axios'
const uuidv4 = require('uuid/v4');



export const savePost = ({title, body, author, category})  =>({
  type: SAVE_POST,
  payload: axios.post('/posts', {
    id: uuidv4(),
    timestamp: Date.now(),
    title, body, author, category,
  } ).then(console.log('savePost')).then(res => console.log(res.data)),
  //const { title, body, author, category } = values;

})



export const fetchPost = () => pData=> dispatch => {


}
