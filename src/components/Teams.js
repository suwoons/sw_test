import React, { Component } from 'react';
import data from "./data"; 
import "../stylesheets/Teams.css"

const teamsList = data.teams;

class Teams extends Component {
	render() {
		return (
            <div className="teams">
            <ul>
                {teamsList.map(t => (<li>{t.name}</li>))}
            </ul>
            </div>
        );
    }
} 
export default Teams;