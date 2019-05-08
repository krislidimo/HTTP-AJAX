import React from 'react';
import '../App.css';

function Friend(props) {
  return (
    <div className="Friend">
      <div>Name: {props.friend.name}</div>
      <div>Age: {props.friend.age}</div>
      <div>Email: {props.friend.email}</div>
    </div>
  );
}

export default Friend;