import React from 'react';
import '../App.css';

class DeleteFriend extends React.Component {
	constructor() {
		super();
		this.state = {
			id: '',
			name: '',
			age: '',
			email: ''
		}
	}

	updateState = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	submitHandle = event => {
		event.preventDefault();
		this.props.deleteFriend({...this.state});
	}

	render() {
	  return (
	    <form className="forms" onSubmit={this.submitHandle}>
	    	<h2>Delete Friend</h2>
	    	<input name='id' value={this.state.id} onChange={this.updateState} placeholder='ID'></input>
	    	<button>Delete Friend</button>
	    </form>
	  );
	}
}

export default DeleteFriend;