import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class CVForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			sex: '',
			marital: '',
			address: '',
			telefono: '',
			nationality: '',
			origin: '',
			newSchool: '',
			newCourse: '',
			newSkill: '',
			NewLangauge: '',
			NewLevel: '',
			education: [],
			courses: [],
			skills: [],
			langauges: [],
			work: [],
			startDate: '',
			endDate: '',
			about: '',
			companyAddress: '',
			comapnyPhone: '',
			companyEmail: '',
			Note: '',
			Position: '',





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
	addEducation = (e) => {
		e.preventDefault();
		if (this.state.newSchool === '') {
			return false;
		}
		let newSchool = {
			name: this.state.newSchool,
			startDate: this.state.startDate,
			endDate: this.state.enddate
		}

		this.setState({
			education: [...this.state.education, newSchool],
			newSchool: '',
			startDate: '',
			endDate: ''
		})
	}
	handleNewLangauge = (e) => {
		e.preventDefault();
		let currentLangauge = {
			name: this.state.NewLangauge,
			level: this.state.NewLevel
		}
		this.setState({
			langauges: [...this.state.langauges, currentLangauge],
			NewLevel: '',
			NewLanguge: ''
		})
	}
	addTrining = (e) => {
		e.preventDefault();
		if (this.state.newCourse === '') {
			return false;
		}
		let newCourse = {
			name: this.state.newCourse,
			date: this.state.startDate,
		}
		this.setState({
			courses: [...this.state.courses, newCourse],
			newCourse: '',
			startDate: '',
			endDate: '',
		})
	}
	addWork = (e) => {
		e.preventDefault();
		if (this.state.newWork === '') {
			return false;
		}
		let newWork = {
			nameOfCompany: this.state.newWork,
			startDate: this.state.startDate,
			endDate: this.state.endDate,
			companyAddress: this.state.companyAddress,
			comapnyPhone: this.state.comapnyPhone,
			companyEmail: this.state.companyEmail,
			Position: this.state.Position,
			Note: this.state.Note

		}
		this.setState({
			work: [...this.state.work, newWork],
			newWork: '',
			startDate: '',
			endDate: '',
			companyAddress: "",
			comapnePhone: '',
			companyEmail: '',
			Position: '',
			Note: '',
			newSkill: ''

		})
	}
	addSkills = (e) => {
		e.preventDefault();
		let newSkill = {
			text: this.state.newSkill
		}
		this.setState({
			skills: [...this.state.skills, newSkill],
			newSkill: ''
		})

	}
	deleteLink(id) {
		this.setState({
			education: this.state.education.filter(edu => edu._id !== id),
			courses: this.state.courses.filter(course => course._id !== id),
			work: this.state.work.filter(w => w._id !== id),
			skills: this.state.skills.filter(skill => skill._id !== id),
			langauges: this.state.langauges.filter(lanuage => lanuage._id !== id)




		})

	}




	render() {
		return (
			<div className='container signup'>
				<form onSubmit={this.handleSubmit}>
					<h1>Create New Cv </h1>
					<FormGroup>
						<Label for="firstname">firstname</Label>
						<Input type="text" id="firstname" placeholder="firstname" onChange={this.handleChange} />
					</FormGroup>
					<FormGroup>
						<Label for="lastname">lastname</Label>
						<Input type="text" id="lastname" placeholder="lastname" onChange={this.handleChange} />
					</FormGroup>
					<FormGroup>
						<Label for="adress">Address</Label>
						<Input type="text" id="address" placeholder="address" onChange={this.handleChange} />
					</FormGroup>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input type="email" id="email" placeholder=" email" onChange={this.handleChange} />
					</FormGroup>
					<FormGroup>
						<Label for="telefono">Telefone</Label>
						<Input type="number" id="telefono" placeholder="Telefone Nubmer" onChange={this.handleChange} />
					</FormGroup>

					<FormGroup>
						<Label for="nationality">Nationality</Label>
						<Input type="text" id="nationality" placeholder="your Nationality" onChange={this.handleChange} />
					</FormGroup>
					<FormGroup>
						<Label for="sex">sex</Label>
						<Input type="select" id="sex" onChange={this.handleChange} required>
							<option disabled value="male">Male</option>

							<option value="male">Male</option>
							<option value="female">Female</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="marital">Marital status</Label>
						<Input type="select" id="marital" onChange={this.handleChange} required>
							<option disabled value="single">Single</option>
							<option value="single">Single</option>
							<option value="married">Married</option>

						</Input>
					</FormGroup>

					<FormGroup>
						<Label for="origin">place of birth</Label>
						<Input onChange={this.handleChange} type="text" id="origin" placeholder="place of birth" onChange={this.handleChange} />
					</FormGroup>
					<div className="Education">
						<h3>Education</h3>
						<FormGroup>
							<Label for="newSchool">Name of institute or school</Label>
							<Input type="text" id="newSchool" placeholder="Name of institute or school" onChange={this.handleChange} value={this.state.newSchool} />
						</FormGroup>
						<FormGroup>
							<Label for="startDate">start Date</Label>
							<Input
								onChange={this.handleChange} value={this.state.startDate}
								type="month"
								id="startDate"
								placeholder="start date"
							/>
						</FormGroup>
						<FormGroup>
							<Label for="enddate">end Date</Label>
							<Input
								onChange={this.handleChange} value={this.state.enddate}
								type="month"
								id="enddate"
								placeholder="end date"
							/>
						</FormGroup>
						{this.state.education.map((edu) => {
							return (
								<div className="form-group">
									<ul>
										<li id={edu._id} >
											{edu.name} <span onClick={() => this.deleteLink(edu._id)}>&times;</span>
										</li>
									</ul>

								</div>
							)
						})}
						<button onClick={this.addEducation}>add </button>

					</div>
					<div className="tryning">
						<h3>Additional training</h3>
						<FormGroup>
							<Label for="newCourse">Name of Course</Label>
							<Input type="text" onChange={this.handleChange} value={this.state.newCourse} id="newCourse" placeholder="Name of institute or school" />
						</FormGroup>
						<FormGroup>
							<Label for="startDate"> Date</Label>
							<Input
								onChange={this.handleChange} value={this.state.startDate}
								type="month"
								id="startDate"
								placeholder="start date"
							/>
						</FormGroup>
						{this.state.courses.map((course) => {
							return (
								<div className="form-group">
									<ul>
										<li id={course._id} >
											{course.name} <span onClick={() => this.deleteLink(course._id)}>&times;</span>
										</li>
									</ul>

								</div>
							)
						})}

						<button onClick={this.addTrining}>add </button>
					</div>
					<div className="work">
						<h3>work experience</h3>
						<FormGroup>
							<Label for="newWork">Name of company</Label>
							<Input type="text" onChange={this.handleChange} value={this.state.newWork} id="newWork" placeholder="Name of company " />
						</FormGroup>
						<FormGroup>
							<Label for="Position">Position</Label>
							<Input type="text" onChange={this.handleChange} value={this.state.Position} id="Position" placeholder="Position " />
						</FormGroup>
						<FormGroup>
							<Label for="exampleDate">start Date</Label>
							<Input
								onChange={this.handleChange} value={this.state.startDate}
								type="month"
								id="startDate"
								placeholder="start date"
							/>
						</FormGroup>
						<FormGroup>
							<Label for="endDate">end Date</Label>
							<Input
								onChange={this.handleChange} value={this.state.endDate}
								type="month"
								id="endDate"
								placeholder="start date"
							/>
						</FormGroup>
						<FormGroup>
							<Label for="companyAddress">company Address</Label>
							<Input type="text" onChange={this.handleChange} value={this.state.companyAddress} id="companyAddress" placeholder="company Address" />
						</FormGroup>
						<FormGroup>
							<Label for="comapnyPhone">comapne Phone</Label>
							<Input type="number" onChange={this.handleChange} value={this.state.comapnyPhone} id="comapnyPhone" placeholder="comapne Phone " />
						</FormGroup>
						<FormGroup>
							<Label for="companyEmail">company Email</Label>
							<Input type="text" onChange={this.handleChange} value={this.state.companyEmail} id="companyEmail" placeholder="company Email " />
						</FormGroup>
						<FormGroup>
							<Label for="Note">Note</Label>
							<Input type="textarea" onChange={this.handleChange} value={this.state.Note} id="Note" placeholder="Note" />
						</FormGroup>
						{this.state.work.map((w) => {
							return (
								<div className="form-group">
									<ul>
										<li id={w._id} >
											{w.nameOfCompany} <span onClick={() => this.deleteLink(w._id)}>&times;</span>
										</li>
									</ul>

								</div>
							)
						})}
						<button onClick={this.addWork}>add </button>

					</div>
					<div className="">
						<h3> skills</h3>
						<FormGroup>
							<Label for="newWork">Skills</Label>
							<Input type="text" onChange={this.handleChange} value={this.state.newSkill} id="newSkill" placeholder="new Skill" />
						</FormGroup>
						{this.state.skills.map((skill) => {
							return (
								<div className="form-group">
									<ul>
										<li id={skill._id} >
											{skill.text}
											<span onClick={() => this.deleteLink(skill._id)}>&times;</span>
										</li>
									</ul>

								</div>
							)
						})}
						<button onClick={this.addSkills}>add</button>
					</div>
					<div className="langauges">
						<h3> languges</h3>
						<FormGroup>
							<label for='NewLangauge'>langauges</label>
							<select id='NewLangauge' value={this.state.NewLanguge} onChange={this.handleChange}>
								<option showOnly>languge</option>
								<option value='Arabic '>Arabic </option>
								<option value='English'>English</option>
								<option value='German'>German</option>
								<option value='Italian'>Italian</option>
								<option value='French'>French</option>
							</select>
						</FormGroup>
						<FormGroup>

							<select id='NewLevel' n value={this.state.NewLevel} onChange={this.handleChange}>
								<option showOnly>level</option>
								<option value='native '>native </option>
								<option value='Beginner'>Beginner</option>
								<option value='intermediate'>intermediate</option>
								<option value='fluent'>fluent</option>

							</select>
						</FormGroup>
						{this.state.langauges.map((lanuage) => {
							return (
								<div className="form-group">
									<ul>
										<li id={lanuage._id} >
											{lanuage.name} <span onClick={() => this.deleteLink(lanuage._id)}>&times;</span>
										</li>
									</ul>

								</div>
							)
						})}

						<button onClick={this.handleNewLangauge}>add</button>
					</div>
					<FormGroup>
						<Label for="about">About</Label>
						<Input type="textarea" id="about" onChange={this.handleChange} />
					</FormGroup>

					<Button>Submit</Button>
					<span>create new account  ?? </span>
					<a href="/signup" className="redairct">aign up </a>
				</form>

			</div>
		)
	}
}

export default CVForm;
