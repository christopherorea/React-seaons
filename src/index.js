import React from 'react';
import ReactDom from 'react-dom';
import Season from './season';
import Load from './load';

class App extends React.Component{

	state = {lat: null, errorMessage: ''};

	render(){
		return(
			this.renderContent()
		);
	}

	renderContent(){
		if(this.state.lat !== null){
			return(
				<Season lat={this.state.lat} />
			);
		}

		if(this.state.errorMessage !== ''){
			return(
				<h1>ERROR: {this.state.errorMessage}</h1>
			)
		}
		return(
			<Load message='Please, accept location request'/>
		);
	}

	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({lat: position.coords.latitude});
			},
			err => {
				this.setState({errorMessage: err.message});
			}
		);
	}
}

ReactDom.render(<App />, document.querySelector('#root'));