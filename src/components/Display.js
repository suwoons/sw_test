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
        this.getTeams = this.getTeams.bind(this);
        this.handleFavoriteToggle = this.handleFavoriteToggle.bind(this);
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
    }

    handleFavoriteToggle(e, teamId) {
        e.preventDefault();
        console.log("toggle favourite");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("scu: ", this.props.tab !== nextProps.tab);
        return this.props.tab !== nextProps.tab ||
            this.state.displayedTeams !== nextState.displayedTeams
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

                <div id="teams-display" className="container">
                    <ul>{this.state.displayedTeams.map(t => 
                        (<li key={t.id} 
                            className={(t.is_archived === true
                                ? "archived"
                                : "")}>
                            <div class="row d-inline-flex w-100 ml-0" id="team_header">
                                <img id="team-image" src={t.image} alt="team_image"></img>
                                <span id="team-name">{t.name}
                                <p id="team-date">{t.created_at !== undefined
                                    ? "Created " + t.created_at
                                    : t.is_archived === true 
                                    ? "Archived"
                                    : ""}</p></span>
                                <span id="favorite-star">{t.is_archived === true
                                    ? ""
                                    : t.is_favorited === true
                                        ? <a href="#"><img src="https://i.ibb.co/dcJT5F7/star-filled.png" alt="star-filled"
                                            onMouseOver={(e) => e.target.src="https://i.ibb.co/wcyG9ws/star-outline.png"}
                                            onMouseLeave={(e) => e.target.src="https://i.ibb.co/dcJT5F7/star-filled.png"}
                                            onClick={(e) => this.handleFavoriteToggle(e, t.id)}/></a>
                                        : <a href="#"><img src="https://i.ibb.co/wcyG9ws/star-outline.png" alt="star-outline"
                                        onMouseOver={(e) => e.target.src="https://i.ibb.co/dcJT5F7/star-filled.png"}
                                        onMouseLeave={(e) => e.target.src="https://i.ibb.co/wcyG9ws/star-outline.png"}
                                        onClick={(e) => this.handleFavoriteToggle(e, t.id)}/></a>}
                                </span></div>

                            <div class="row d-inline-flex w-100 ml-0" id="team_info_wrapper">
                                <p>{t.description}</p></div>
                            
                            <div class="row d-inline-flex w-100 ml-0" id="team_stats">
                                <span id="team-campaigns">
                                    <img src="https://i.ibb.co/p2pMv5r/message.png" 
                                        style={{height: "40px", width: "41px", marginTop: "2px",marginRight: "-8px", marginBottom: "2px"}} alt="campaigns"/>
                                    {t.campaigns_count.toLocaleString('en')} Campaigns</span>
                                <span id="team-leads">
                                    <img src="https://i.ibb.co/Pw64dZ7/profile.png" 
                                    style={{height: "38px", width: "42px", marginTop: "3px", marginRight: "-8px", marginBottom: "4px"}} alt="leads"/>
                                    {t.leads_count.toLocaleString('en')} Leads</span>
                            </div>
                        </li>))}</ul>
                </div>
            </div>
        );
    }
} 
export default Display;