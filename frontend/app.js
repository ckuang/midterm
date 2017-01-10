import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const Search = React.createClass({
	getInitialState() {
		return {input: '', title:'', summary:'', list:[]}
	},
	handleSubmit(event) {
		event.preventDefault()
		this.setState({list: this.state.list.concat(this.state.input)})

		$.ajax({
			url:"https://api.themoviedb.org/3/movie/550?api_key=" + "68eb466ca897baf7a62975f97c5f32bc" + this.state.input,
			success: (data) => {
				this.setState({title: data.title})
				this.setState({summary: data.summary})
			}
		})
	},
	handleChange(event) {
		this.setState({input: event.target.value})
	},
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="movie title" onChange={this.handleChange} value={this.state.input}/>
					<input type="submit" />
				</form>
				<h4>{this.state.title}</h4>
				<h4>{this.state.summary}</h4>
					<ul>
						{this.state.list.map((element, key) => {
							return <li key={key}>{element}</li>
						})}
					</ul>
			</div>
		)
	}
})

const App = React.createClass({
	render() {
		return (
			<div>
				<h4>*Summary*</h4>
				<br />
				{this.props.children}
				<Search />
			</div>
		)
	}
})

ReactDOM.render(<App/>, document.getElementById('root'))