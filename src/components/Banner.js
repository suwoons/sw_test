import React, { Component } from 'react';
import data from "./data"; 
import "../stylesheets/Banner.css"

const currentUser = data.current_user;

class Banner extends Component {
    render() {
        return (
            <div class="row border-bottom">
                <div class="col-md-1point5">
                    <div class="brand">
                        NARWHAL
                    </div>
                </div>

                <div class="col border-left">
                    <div class="bannerText">
                    Teams
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="currentProfile">
                        <img id="inbox" src="https://i.ibb.co/b2mGpZ6/inbox-mail-2.png" alt="inbox-mail-2" border="0"></img>
                        <span class="badge">{currentUser.notifications_count}</span>
                        <p id="greeting">Hello, {currentUser.name}</p>
                        <a href="#">
                        <img id="profile" src={currentUser.avatar}></img>
                        <div class="triangle-down"></div></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;