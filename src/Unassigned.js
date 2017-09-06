import React from 'react';

function Unassigned(props) {
  return(
    <p>{props.comment}<button onClick={props.assigntoBarca}>Real</button> <button>Barca </button></p>
  );
}


export default Unassigned;