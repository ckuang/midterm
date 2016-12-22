import React from 'react';
import {render} from 'react-dom';
import Form from './component/form.js'

var App = React.createClass({
	render(){
		return(
			<div>
					 <span/>
					 <h4>No summary ...</h4>
					{this.props.children}
					<Form />
			</div>
			)
	}
});


render(
	<App />,
	document.getElementById('root')
	)
