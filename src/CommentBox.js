import React from 'react';

function CommentBox(props) {
  return(
    <p>{props.comment} <button onClick={props.removeComment}>x</button></p>
  );
}


 
export default CommentBox;