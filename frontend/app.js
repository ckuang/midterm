var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


// var Display = React.createClass({
// 	render: function(){
// 		return(
// 				<div>
// 					<h1>{this.state.movie.results[0].title}</h1>
// 					<img src={'https://image.tmdb.org/t/p/w500/' +
// 					 this.state.movie.results[0].poster_path} />
// 					 <p>{this.state.movie.results[0].overview}</p>
// 				</div>
// 	)}
// })

var App = React.createClass({
	// getInitialState: function(){
	// 	return {text: "", list: [], movie: [] }
	// },
	// handleChange: function(event){

	// 	this.setState({text: event.target.value})
	// },
	// addItem: function(event){
	// 	event.preventDefault()
	// 	this.setState({
	// 		list: this.state.list.concat(this.state.text), 
	// 		text: ''
	// 	})
	// },
	// display: function(event){
		
	// 	var that = this;
	// 	var key = '44a60050cb312f958944220fcb82ccc5&query=';
	// 	var item = event.target.innerHTML
	// 	//item does not get item being clicked, so i used a 'hello to get the info from the ajax call'
	// 	$.ajax({
	// 		url: 'https://api.themoviedb.org/3/search/movie?api_key=' + key + item,
	// 		type: "GET",
	// 		success: function(data){
	// 			console.log(data)
	// 			that.setState({movie: data})

	// 		}
	// 	})
		
	// },
	render: function(){
				
		return (
			<div>	
				
				<p>hello</p>
				<form >
					<input/>
					<input type = "submit" value= "add movie list" />
				</form>
			
				
			</div>
		)
	}
})

ReactDOM.render(<App/>, document.getElementById('root'));



// <Display />	
// 				

