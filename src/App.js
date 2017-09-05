import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Commentbox from './CommentBox.js';
class App extends Component {
  constructor(){
     super();
     this.getComment= this.getComment.bind(this);
     this.handleClick= this.handleClick.bind(this);
     this.state = {
       currentTeam: '',
       oneTeamPlayer: ['Messi','Neymar','Suarez']
     }
  }
  getComment(event) {
    var newPlayer = event.target.value;
    this.setState({
      currentTeam: newPlayer
    });
  }
  handleClick(event) {
    var playerArray = this.state.oneTeamPlayer.slice();
    playerArray.push(this.state.currentTeam);
    this.setState({
      currentTeam: "",
      oneTeamPlayer: playerArray
    });
  }


  render() {
    var currentPlayer=[];
    for (var i in this.state.oneTeamPlayer){
      currentPlayer.push(
        <Commentbox
        key={i}
        comment={this.state.oneTeamPlayer[i]}
        removeComment={this.removeComment}
        />
      );
    }

    return (
      <div className="App">
        <h2>Week Challenge</h2>
     
      
      <section id="firstTeam">
      <label htmlFor="comment">Add Player to this team:</label>
      <input type="text" id="comment" name="comment" onChange={this.getComment} value={this.state.currentTeam} />
      <button id="addBtn" onClick={this.handleClick}>Add</button>
    </section>
    <section id="showcomments">
          <h2>There are {currentPlayer.length} players in this team</h2>
          {currentPlayer}
        </section>

    </div>
    );
  }
}

export default App;
