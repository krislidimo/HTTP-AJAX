import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList.js'
import NewFriendForm from './components/NewFriendForm.js'
import UpdateFriend from './components/UpdateFriend.js'
import DeleteFriend from './components/DeleteFriend.js'
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

  updateFriend = newFriend => {
    let newState = {
      friends: 
        this.state.friends.map(friend => {

          if (friend.id !== parseInt(newFriend.id)) {
            return friend
          } else {
            return newFriend
          }
        })
    }

    console.log(newState);

    this.setState({ newState });

    axios
      .post('http://localhost:5000/friends', {
        ...newFriend
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteFriend = friend => {
    let newFriendsList = this.state.friends.map( eachFriend => {
      if(eachFriend !== friend) {
        return eachFriend;
      }
    })
    this.setState({
      friends: newFriendsList
    });

    axios
      .delete('http://localhost:5000/friends', {
        ...friend
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="friends-list-wrapper">
          <h1>Friends List</h1>
          <FriendsList friends={this.state.friends}/>
        </div>
        <div className="form-wrapper">  
          <h1>Forms</h1>
          <NewFriendForm addNewFriend={this.addNewFriend} />
          <UpdateFriend updateFriend={this.updateFriend} />
          <DeleteFriend deleteFriend={this.deleteFriend} />
        </div>
      </div>
    );
  }
}

export default App;
