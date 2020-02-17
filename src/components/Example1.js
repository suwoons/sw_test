import React, { Component } from 'react';
import data from "./data"; 

const teamsList = data.teams;

class Example1 extends Component {
	render() {
		return (
            <ul>
                {teamsList.map(t => (<li>{t.name}</li>))}
            </ul>
        );
    }
} 
export default Example1;