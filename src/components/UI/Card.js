import React from 'react';
import "./Card.css";

function Card(props) {
  const classes = 'card ' + props.className; //classname can be set on your component
  return <div className={classes}>{props.children}</div>; //reserved to make this component a wrapper: value: opening and closing componets within this tag
}


export default Card;