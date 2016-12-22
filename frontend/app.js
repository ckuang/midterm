var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

const App =React.createClass({
  getInitialState(){
    return({input:" ", list:[]
    })
  },
  
  handleChange(e){
    this.setState({input: e.target.value})
  },
  

  handleSubmit(e){
    e.preventDefault();
    this.setState({list: this.state.list.concat(this.state.input)})
    console.log(this.state.list)
    this.setState({text:""})
  },

receiveAPI(){
    var search = $('#movieDetail').val()
    var that = this
    $.ajax({
      url:"https://api.themoviedb.org/3/search/movie?api_key=" + "b2d9697fb9240cb03ec98c85e0aa4e00" + "&query=" + this.state.input,
      success: function(data) {
        var movieTitle = results.overview
        that.setState({present: true, src: movie})
      }
    })
  },

  // receiveAPI(){
  //   var search = $('#movieDetail').val()
  //   var url = 'http://api.themoviedb.org/3/' + this.handleChange ,

  //       key = '?&api_key=b2d9697fb9240cb03ec98c85e0aa4e00';
  //       $.ajax({
  //           type: 'GET',
  //           url: url + key,
  //           async: false,
  //           jsonpCallback: 'testing',
  //           contentType: 'application/json',
  //           dataType: 'jsonp',
  //           success: function(json) {
  //               console.dir(json);
  //           },
  //           error: function(e) {
  //               console.log(e.message);
  //           }
  //   });
  // },

  
  render(){
    return(
      <div>
        
        <form onSubmit={this.handleSubmit}>
          <label>
          <input type='movieDetail' placeholder="text-box" onChange={this.handleChange} value={this.state.input}></input>
          <button onClick={this.receiveAPI}>Add Movie to list</button>
          </label>
        </form>

        <ul>
        {this.state.list.map((el,key) => {
          return <li key={key}>{el}</li>
        })} 
        </ul>

      </div>

      )
  }
})


ReactDOM.render(<App />, document.getElementById('root'))
          // <input type="submit" value="Add Movie to list"/>