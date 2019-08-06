import React, { Component } from 'react'

class Home extends Component {
render() {
return (
<div className=' container body'>
	<h1 class="title">free cv creater</h1>
	<a href='/create' className="btn btn-primary"> Create My Cv</a>
	<button className="btn btn-primary"> My History</button>
	<button className="btn btn-primary"> Templetes</button>
</div>
)
}
}

export default Home
