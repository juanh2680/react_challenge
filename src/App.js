import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Unassigned from './Unassigned';
import Commentbox from './CommentBox.js';
class App extends Component {
  constructor() {
    super();
    this.getComment = this.getComment.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getCommentReal = this.getCommentReal.bind(this);
    this.handleClickReal = this.handleClickReal.bind(this);
    this.getCommentUnassigned= this.getCommentUnassigned.bind(this);
    this.handleClickUnassigned= this.handleClickUnassigned.bind(this);
    this.state = {
      currentTeam: '',
      oneTeamPlayer: ['Messi', 'Neymar', 'Suarez'],
      secondTeamPlayer: ['Ronaldo', 'Bale', 'Marcelo'],
      otherTeam: '',
      unassigned: '',
      unassignedTeam: ['Ivan','Hunter','Chris'],
    }
  }
  
  getComment(event) {
    var newPlayer = event.target.value;
    this.setState({
      currentTeam: newPlayer
    });
  }
  getCommentUnassigned(event) {
    var newPlayerUnassigned = event.target.value;
    this.setState({
      unassigned: newPlayerUnassigned
    });
  }
  getCommentReal(event) {
    var newPlayerReal = event.target.value;
    this.setState({
      otherTeam: newPlayerReal
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
  handleClickUnassigned(event) {
    var playerArrayUn = this.state.unassignedTeam.slice();
    playerArrayUn.push(this.state.unassigned);
    this.setState({
      unassigned: "",
      unassignedTeam: playerArrayUn
    });
  }

  handleClickReal(event) {
    var playerArrayReal = this.state.secondTeamPlayer.slice();
    playerArrayReal.push(this.state.otherTeam);
    this.setState({
      otherTeam: "",
      secondTeamPlayer: playerArrayReal
    });
  }


  render() {
    var currentPlayer = [];
    var currentPlayerRealMadrid = [];
    var emptyPlayer = [];

    for (var i in this.state.secondTeamPlayer) {
      currentPlayerRealMadrid.push(
        <Commentbox
          key={i}
          comment={this.state.secondTeamPlayer[i]}
          removeComment={this.removeComment}
        />
      );
    }

    for (var i in this.state.oneTeamPlayer) {
      currentPlayer.push(
        <Commentbox
          key={i}
          comment={this.state.oneTeamPlayer[i]}
          removeComment={this.removeComment}
        />
      );
    }
    for (var i in this.state.unassignedTeam) {
      emptyPlayer.push(
        <Unassigned
          key={i}
          comment={this.state.unassignedTeam[i]}
          removeComment={this.removeComment}
        />
      );
    }

    return (
      <div>
        <div className="section1">
          <h2> Real Madrid </h2>
          <section id="secondTeam">
            <label htmlFor="comment">Add Player to this Real Madrid:</label>
            <input type="text" id="comment" name="comment" onChange={this.getCommentReal} value={this.state.otherTeam} />
            <button id="addBtn" onClick={this.handleClickReal}>Add</button>
          </section>
          <section id="showcommentsreal">
            <h2>There are {currentPlayerRealMadrid.length} players in Real Madrid</h2>
            {currentPlayerRealMadrid}
          </section>
        </div>
        <div className="section2">
          <h2>Barcelona</h2>
          <section id="firstTeam">
            <label htmlFor="comment">Add Player to this Barcelona:</label>
            <input type="text" id="comment" name="comment" onChange={this.getComment} value={this.state.currentTeam} />
            <button id="addBtn" onClick={this.handleClick}>Add</button>
          </section>
          <section id="showcomments">
            <h2>There are {currentPlayer.length} players in Barca</h2>
            {currentPlayer}
          </section>
        </div>
        <div className="middleSection">
          <h2>Unassigned</h2>
          <section id="unassigned">
            <label htmlFor="comment">Add Player to this Unassigned:</label>
            <input type="text" id="comment" name="comment" onChange={this.getCommentUnassigned} value={this.state.unassigned} />
            <button id="addBtn" onClick={this.handleClickUnassigned}>Add</button>
          </section>
          <section id="showcomments">
            <h2>There are {emptyPlayer.length} players in Unassigned</h2>
            {emptyPlayer}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
