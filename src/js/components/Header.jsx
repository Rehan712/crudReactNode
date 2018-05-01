import React from 'react';

class Header extends React.Component{
	constructor(){
		super();
	}

	render(){
		return (
			<div className="header">
				<div className="textSearchName">this is text box</div>
				<div className="textSearchRollNo">this is text box</div>
			</div>
		)
	}
}

export default Header;