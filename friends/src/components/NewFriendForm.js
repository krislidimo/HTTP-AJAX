import React from 'react';
import '../App.css';

class NewFriendForm extends React.Component {
	constructor() {
		super();
		this.state = {
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
		this.props.addNewFriend({...this.state});
	}

	render() {
	  return (
	    <form className="forms" onSubmit={this.submitHandle}>
	    	<h2>Add A New Friend!</h2>
	    	<input name='name' value={this.state.name} onChange={this.updateState} placeholder='Name'></input>
	    	<input name='age' value={this.state.age} onChange={this.updateState} placeholder='Age'></input>
	    	<input name='email' value={this.state.email} onChange={this.updateState} placeholder='Email'></input>
	    	<button>Save New Friend</button>
	    </form>
	  );
	}
}

export default NewFriendForm;