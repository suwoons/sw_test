import React, { Component } from 'react';
import "../stylesheets/Navigation.css"

class Navigation extends Component {
    componentDidMount() {
        var navButtons = document.getElementById("navbar-container").getElementsByClassName("nav-item nav-link")
        for (var i = 0; i < navButtons.length; i++) {
            navButtons[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                console.log("here")
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            })
        }
    }
    
    render() {
        return (
            <nav className="nav-side-menu" id="navbar-container">
                <div className="navbar-nav">

                <img src="https://i.ibb.co/VSnBN2v/whale.png" alt="whale" border="0" />

                <a className="nav-item nav-link" href="#">
                    <img src="https://i.ibb.co/p2pMv5r/message.png" alt="messages" border="0" 
                    style={{width: "95%", height: "140%", marginTop:"-7px"}}/></a>
                <a className="nav-item nav-link active" href="#">
                <img src="https://i.ibb.co/48vcwXG/teams.png" alt="teams" border="0" 
                    style={{width: "95%", height: "140%", marginTop:"-8px"}}/></a>
                <a className="nav-item nav-link" href="#">
                <img src="https://i.ibb.co/Pw64dZ7/profile.png" alt="profile" border="0" 
                    style={{width: "95%", height: "125%", marginTop:"-5px"}}/></a>
                <a className="nav-item nav-link" href="#">
                <img src="https://i.ibb.co/x7Tgq0q/stats.png" alt="stats" border="0" 
                    style={{width: "95%", height: "135%", marginTop: "-9px"}}/></a>
                <a className="nav-item nav-link" href="#" style={{position: "absolute", bottom: "0"}} >
                    <img src="https://i.ibb.co/T1b2hjK/question.png" alt="help" border="0" 
                    style={{width: "70%", marginLeft: "7px"}}/></a>
                </div>
            </nav>
        );
    }
}

export default Navigation;