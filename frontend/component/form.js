import React from 'react';
import $ from 'jquery';
// import Debug from 'react-debug'

const Form =React.createClass({
	getInitialState(){
		return({input:"", list:[], overview:"", title:""})
	},
	handleChange(e){
		this.setState({input: e.target.value})
	},
	handleSubmit(e){
		e.preventDefault();
		this.setState({list: this.state.list.concat(this.state.input)})
		// console.log(this.state.list)
		// this.setState({input:""})
		
		var key = "b2d9697fb9240cb03ec98c85e0aa4e00"
		$.ajax({
			url:"https://api.themoviedb.org/3/search/movie?api_key="+ key + "&query="+ this.state.input+"",
			success: (data) => {
				this.setState({overview: data.results[0].overview})
				this.setState({title: data.results[0].title })
			}
		})
	},
	listClick(){
	console.log(this.state.title)
	console.log(this.state.overview)
	},
	render(){
		return(
			<div>
				
				<form onSubmit={this.handleSubmit}>
					<label>
					<input type='textbox' placeholder="write movie title" onChange={this.handleChange} value={this.state.input}></input>
					</label>
					<input type="submit" />
				</form>

				<h2>{this.state.title}</h2>
				<span/>
				{this.state.overview}
				<ul>
				{this.state.list.map((el,key) => {
					return <li onClick={this.listClick} key={key}>{el}</li>
				})}	
				</ul>
			</div>

			)
	}
})

export default Form;
