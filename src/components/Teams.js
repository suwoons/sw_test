import React, { Component } from 'react';
import data from "./data"; 
import "../stylesheets/Teams.css"

const teamsList = data.teams;

function length(obj) {
    return Object.keys(obj).length;
}

class Teams extends Component {
	render() {
		return (
            <div className="teams">
                <div class="wrapper border-bottom">
                    <div class="inner">
                    <span id="title">
                        All Teams
                    </span>
                    <span id="showing">
                        Showing {length(teamsList)} out of {length(teamsList)} teams
                    </span>
                    </div>
                </div>
                <div class="container">
                <ul>{teamsList.map(t => (<li key={t.id} >{t.name}</li>))}</ul>
                </div>
            </div>
        );
    }
} 
export default Teams;