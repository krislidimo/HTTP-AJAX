import React from 'react';
import Friend from './Friend.js';
import '../App.css';

function FriendsList(props) {
  return (
    <div className="FriendsList">
      {props.friends.map( friend => {
          return <Friend key={friend.id} friend={friend}/>
        })}
    </div>
  );
}

export default FriendsList;