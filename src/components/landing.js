import React, { Component } from 'react';
import Pitch from '../components/pitch';
import Navbar from '../components/navbar';

export class Landing extends Component {

	render(){
		return (
			<div>
				<Navbar/>
				<Pitch/>
			</div>
				
			
		);
	}
}