import './Card.css';

// import React from "react";

const Card = (props) =>{
    // const classes = 'card' + props.className; 
    return <div className="card">{props.children}</div>
}

export default Card