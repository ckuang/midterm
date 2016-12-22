var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
//step 3: keeping track of 3 things withing their state
  getInitialState: function (){
    return {
    text: "",
    movieList: "",
    movie: ""
    }
  },

  handleChange:function(text){
    this.setState({text: this.handleChange})
  },
  
  handleSubmit:function(text){
    this.setState({text:this.handleSubmit})
  },

render: function(){
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Write Movie Title"/>
        <input type="submit" onClick={this.handleChange} value="Add Movie To List" />
        <ul>{this.state.text}</ul>
      </form>
    </div>
  )
}

});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
