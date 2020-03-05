import React, { Component } from 'react';
import Activity from './Activity';
import Heading from './Heading';
import Display from './Display';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tab: "All",
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange = (tabName) => {
      this.setState({tab: tabName});
      console.log("changed to: ", tabName);
  }

  render() {
    return(
      <div class="col" style={{padding: "0"}}>
      <div class="top" style={{height: "110px",
        backgroundColor: "white"}}>
        <div class="col-md-12">
          <Heading tab={this.state.tab} handleTabChange={this.handleTabChange.bind(this)}></Heading>
        </div>
      </div>

      <div class="main h-100">
        <div class="col-md-12" 
          style={{padding: "0px", 
          backgroundColor: "rgb(239,242,245)", marginBottom: "40px"}}>

          <div class="row">
            <div class="col-md-display" name="display">
              <Display tab={this.state.tab} handleTabChange={this.handleTabChange.bind(this)}></Display>
            </div>

            <div class="col-md-activity" name="activity">
              <Activity></Activity>
            </div>
          </div>

        </div>
      </div>
      </div>
    );
  }
}

export default Main;