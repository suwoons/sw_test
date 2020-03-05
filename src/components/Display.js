import React, { Component } from 'react';
import data from "./data"; 
import "../stylesheets/Display.css";

const teamsList = data.teams;
var archivedTeamsList = [];
var favoritedTeamsList = [];

for (var i = 0; i < teamsList.length; i++) {
    if (teamsList[i].is_archived === true) {
        // add to archived teams list
        archivedTeamsList[archivedTeamsList.length] = teamsList[i];
    }

    if (teamsList[i].is_favorited === true) {
        // add to favorites list
        favoritedTeamsList[favoritedTeamsList.length] = teamsList[i];
    }
}

function length(obj) {
    return Object.keys(obj).length;
}

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedTeams: teamsList, // implement getTeams function; change to []
        };
        this.Teams = this.getTeams.bind(this);
    }

    getTeams(tab) {
        var response;
        console.log("arg tab: ", tab);

        if (tab === "All") {
            response = teamsList;
        } else if (tab === "Archived") {
            response = archivedTeamsList;
        } else if (tab === "Favorites") {
            response = favoritedTeamsList;
        } else {
            console.error("Invalid tab");
        }
        this.setState({displayedTeams: response});
        console.log("response: ", response);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("scu: ", this.props.tab !== nextProps.tab);
        return this.props.tab !== nextProps.tab ||
            this.state.displayedTeams !== nextState.displayedTeams;
    }

    componentDidMount() {
        this.getTeams(this.props.tab);
    }

    componentDidUpdate() {
        this.getTeams(this.props.tab);
    }

	render() {
        console.log("display tab: ", this.props.tab);
        console.log("display teams: ", this.state.displayedTeams);

		return (
            <div className="teams">
                <div class="wrapper border-bottom">
                    <div class="inner">
                    <span id="title">
                        All Teams
                    </span>
                    <span id="showing">
                        Showing {this.state.displayedTeams.length} out of {length(teamsList)} teams
                    </span>
                    </div>
                </div>

                <div class="container">
                    <ul>{this.state.displayedTeams.map(t => 
                        (<li key={t.id} >
                            <div class="row d-inline-flex w-100 ml-0" id="team_header">{t.name}</div>
                            <div class="row d-inline-flex w-100 ml-0" id="team_info">{t.description}</div>
                            <div class="row d-inline-flex w-100 ml-0" id="team_stats">stats</div>
                        </li>))}</ul>
                </div>
            </div>
        );
    }
} 
export default Display;