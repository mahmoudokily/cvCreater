import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class SignUp extends Component {
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
					<h1>Sign Up</h1>
					<FormGroup>
						<Label for="name">username</Label>
						<Input type="text" id="name" placeholder="username" onChange={this.handleChange} />
					</FormGroup>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input type="email" id="email" placeholder="email" onChange={this.handleChange} />
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input type="password" id="password" placeholder="password " onChange={this.handleChange} />
					</FormGroup>
					<Button>Submit</Button>
					<span>Already have account ?? </span>
					<a href="/signin" className="redairct">Log in </a>
				</form>

			</div>
		)
	}
}

export default SignUp
