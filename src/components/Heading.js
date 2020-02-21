import React, { Component } from 'react';
import data from "./data"; 
import "../stylesheets/Heading.css"

class Heading extends Component {
    render() {
        return (
            <div class="title">
                <img src="https://i.ibb.co/Jv7WkyL/teams-grey.png" alt="teams-grey" border="0"></img>
                <span class="title-words">Teams</span>
                <button class="create">CREATE NEW TEAM</button>
            </div>
        );
    }
}

export default Heading;