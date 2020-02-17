import React, { Component } from 'react';
import data from "./data"; 
import "../stylesheets/Activity.css"

const feed = data.activities;

class Activity extends Component {
	render() {
		return (
            <div className="activity">
            <ul>
                {feed.map(f => <li>{f.person.name}: {f.action}</li>)}
            </ul>
            </div>
        );
    }
} 
export default Activity;