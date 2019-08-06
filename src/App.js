import React from 'react';
import './App.css';
import Header from './components/header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import SignUp from './components/user/signup';
import SignIn from './components/user/signin';
import Home from './components/home'
import CVForm from './components/cvform'



function App() {
	return (
		<BrowserRouter>
			<div className="App">

				<Header />

				<Route exact path="/" component={Home} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/create" component={CVForm} />





			</div>



		</BrowserRouter>

	);
}

export default App;
