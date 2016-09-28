import React, { Component } from 'react';
import Footer from './pages/footer';

class App extends Component {
	render() {
		return (
			<div>
				<p>Header here</p>

				<div className="container">
					{this.props.children}
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;  
