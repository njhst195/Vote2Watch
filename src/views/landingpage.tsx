import React, {Component} from 'react';
import { Button } from 'reactstrap';
import logo from "./vote2watch10.png"

class App extends Component {
  render() {
    return(
      <div className="App">
        <br /><br />
        <img src={logo} alt="Vote2Watch Logo" style={{width: '85%', maxWidth: 700}}/>
        <br /><br /><br /><br />
        <div />

        <a href="createroompage">
          <Button color="primary" active={true} size="lg">Create a Room</Button>
        </a>

        <br /><br />

        <a href="joinroompage">
          <Button color="secondary" active={true} size="lg">Join a Room</Button>
        </a>

        <br /><br /><br /><br />
      
        <div style={{display: 'table', margin: '0px auto', maxWidth: 700, width: '80%'}}>
          <p style={{textAlign: 'center', fontSize: 22}}>
            Vote2Watch is web application for voting and selecting movies
            for a group of people to watch. Create a room and invite your friends to 
            votes sessions where they can submit movie titles 
            for the group to vote or veto on. May the best movie with the most votes win.
          </p>
        </div>
        
      </div>
    )
  }

}

export default App;