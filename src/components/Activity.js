import React, { Component } from 'react';
import data from "./data"; 
import "../stylesheets/Activity.css"

const feed = data.activities;

function describe(action) {
    if (action === "archived_team") {
        return "archived the team ";
    } else if (action === "added_leads") {
        return "added new leads to ";
    } else if (action === "increased_quota") {
        return "increased ";
    }
}

class Activity extends Component {
	render() {
		return (
            <div className="activity">
                <div class="wrapper border-bottom">
                    <div class="inner">
                    <span id="title">Activity</span>
                    </div>
                </div>
                <div class="container">
                    <ul>{feed.map(f => 
                    <li key={f.id}><img id="avatar" src={f.person.avatar} alt="avatar"></img>
                        <span class="description">
                            <b>{f.person.name} </b>  
                            {describe(f.action)} <b>{f.target}</b>
                            {f.action === "increased_quota"
                            ? "'s quota"
                            : ""}
                            <p class="time">
                            {f.created_at}
                            </p></span></li>)}
                    </ul>
                </div>
            </div>
        );
    }
} 
export default Activity;