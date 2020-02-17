import React, { Component } from 'react';
import data from "./data"; 
import "../stylesheets/Navigation.css"

class Navigation extends Component {
    render() {
        return (
            <nav class="nav-side-menu">
                <div class="navbar-nav">

                <a class="nav-brand" href="#">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHQAJY4NuiaXg/company-logo_200_200/0?e=2159024400&v=beta&t=FD4ZXXzYyEpngTbUtoev5HrB8wpOXExlbh4BfRuiopE"/>
                </a>

                <a class="nav-item nav-link" href="#">Messages</a>
                <a class="nav-item nav-link active" href="#">Teams</a>
                <a class="nav-item nav-link" href="#">Profile</a>
                <a class="nav-item nav-link" href="#">Stats</a>
                <a class="nav-item nav-link" href="#" style={{position: "absolute", bottom: "0"}} >Help</a>
                </div>
            </nav>
        );
    }
}

export default Navigation;