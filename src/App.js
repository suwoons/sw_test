import React, { Component } from 'react';
import './App.css';
import Activity from './components/Activity';
import Banner from './components/Banner';
import Heading from './components/Heading';
import Navigation from './components/Navigation';
import Teams from './components/Teams';

class App extends Component {
  render() {
      return (
        <div>
          <header>
            <link rel="stylesheet" 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
            crossorigin="anonymous"></link>
          </header>
          
          <body>
            <main class="container-fluid">
              <div class="row" style={{minHeight: "100vh"}}>
                <div class="col-md-nav">
                  <Navigation></Navigation>
                </div>
                
                <div class="col-md-rest">
                  <div class="top">
                    <div class="col-md-12">
                      <Banner></Banner>
                    </div>
                  </div>

                  <div class="top" style={{height: "110px",
                    backgroundColor: "white"}}>
                    <div class="col-md-12">
                      <Heading></Heading>
                    </div>
                  </div>

                  <div class="main h-100">
                    <div class="col-md-12" 
                    style={{padding: "0px", 
                    backgroundColor: "rgb(239,242,245)"}}>

                      <div class="row">
                        <div class="col-md-teams" name="teams">
                          <Teams></Teams>
                        </div>

                        <div class="col-md-activity" name="activity">
                          <Activity></Activity>
                        </div>
                      </div>

                    </div>
                  </div>

                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" 
                  integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" 
                  crossorigin="anonymous"></script>
                  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" 
                  integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" 
                  crossorigin="anonymous"></script>
                  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" 
                  integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" 
                  crossorigin="anonymous"></script>                
                </div>
              </div>
              </main>
            </body>
        </div>
      );
  }
}

export default App;
