import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList.js'
import NewFriendForm from './components/NewFriendForm.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addNewFriend = friend => {
    console.log(friend);
    this.setState({
      friends: [...this.state.friends, {
        id: this.state.friends.length+1,
        ...friend
      }]
    });

    axios
      .post('http://localhost:5000/friends', {
        id: this.state.friends.length+1,
        ...friend
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <FriendsList friends={this.state.friends}/>
        <NewFriendForm addNewFriend={this.addNewFriend} />
      </div>
    );
  }
}

export default App;
