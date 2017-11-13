import React from "react";

const SavedArt = props => 
	<div className="container">
    <li className="list-group-item">
      <h4>
        <span>
          <a href={props.url} target="_blank"><em>{props.title}</em></a>
        </span>
        <span className="btn-group pull-right">
          <button className="btn btn-primary" onClick={() => props.handleDeleteButton(props._id)}>Remove</button>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
  </div>

export default SavedArt;
