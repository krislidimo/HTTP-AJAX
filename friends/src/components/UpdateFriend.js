import React from 'react';
import '../App.css';

class UpdateFriend extends React.Component {
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
		this.props.updateFriend({...this.state});
	}

	render() {
	  return (
	    <form className="forms" onSubmit={this.submitHandle}>
	    	<h2>Update Friend</h2>
	    	<input name='id' value={this.state.id} onChange={this.updateState} placeholder='ID'></input>
	    	<input name='name' value={this.state.name} onChange={this.updateState} placeholder='Name'></input>
	    	<input name='age' value={this.state.age} onChange={this.updateState} placeholder='Age'></input>
	    	<input name='email' value={this.state.email} onChange={this.updateState} placeholder='Email'></input>
	    	<button>Update Friend</button>
	    </form>
	  );
	}
}

export default UpdateFriend;