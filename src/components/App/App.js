import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//import components
import Home from '../Home/Home';
import Rank from '../Rank/Rank';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';



class App extends Component {
  //set text for ranking feeling displays
  understand = 'How well do you feel you understand the content this week?';
  feel = 'How are you feeling this week?';
  support = 'How supported are you feeling?';

  //set directions for routes f-forward and b-back 
  direction = {
    feeling: {
      f: '/understanding',
      b: '/',
    },
    understanding: {
      f: '/support',
      b: '/feeling',
    },
    support: {
      f: '/comments',
      b: '/understanding',
    },
    comments: {
      f: '/review',
      b: '/support',
    },
    review: {
      f: '/',
      b: '/comments'
    },
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <Router>
          <Route exact path="/"
            component={Home} />
          <Route exact path="/feeling"
            render={() =>
              <Rank action='SET_FEELING'
                //send label, current redux value, and direction info
                stringContent={this.feel}
                default={this.props.feeling}
                direction={this.direction.feeling} />} />
          <Route exact path="/understanding"
            render={() =>
              <Rank action='SET_UNDERSTANDING'
                //send label, current redux value, and direction info
                stringContent={this.understand}
                default={this.props.understanding}
                direction={this.direction.understanding} />} />
          <Route exact path="/support"
            render={() =>
              <Rank action='SET_SUPPORT'
                //send label, current redux value, and direction info
                stringContent={this.support}
                default={this.props.support}
                direction={this.direction.support} />} />
          <Route exact path="/comments"
            render={() =>
              <Comments
                //send current redux value, and direction info
                default={this.props.comments}
                direction={this.direction.comments} />} />
          <Route exact path="/review"
            render={() =>
              <Review
                //send direction info
                direction={this.direction.review} />} />
        </Router>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
