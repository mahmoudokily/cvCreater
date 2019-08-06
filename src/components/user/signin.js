import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class SignIn extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			password: '',
			email: ''
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state)
	}





	render() {
		return (
			<div className='container signup'>
				<form onSubmit={this.handleSubmit}>
					<h1>Sign in</h1>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input type="email" id="email" placeholder="email" onChange={this.handleChange} />
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input type="password" id="password" placeholder="password " onChange={this.handleChange} />
					</FormGroup>
					<Button>Submit</Button>
					<span>create new account  ?? </span>
					<a href="/signup" className="redairct">aign up </a>
				</form>

			</div>
		)
	}
}

export default SignIn;
