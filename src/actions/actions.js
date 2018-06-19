import {SAVE_POST, FETCH_POSTS} from 'types.js'


export const savePost = () => dispatch => {
  //const { title, body, author, category } = values;
  fetch('http://localhost:3001/posts', { headers: { 'Authorization': 'whatever-you-want' }).then(res => res.json()).then(
    
  );
};

export const fetchPost = () => pData=>dispatch => {


}
