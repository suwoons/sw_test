import React, { Component } from 'react';
import data from "./data"; 
import "../stylesheets/Banner.css"

const currentUser = data.current_user;

class Banner extends Component {
    render() {
        return (
            <div class="row border-bottom">
                <div class="col-md-1point5 border-right">
                    <div class="brand">
                        NARWHAL
                    </div>
                </div>

                <div class="col">
                    <div class="bannerText">
                    Teams
                    </div>
                </div>

                <div class="col-md-3 border-left">
                    <div class="currentProfile">
                        Hello, {currentUser.name}
                        <img src={currentUser.avatar}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;