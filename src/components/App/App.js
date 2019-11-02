import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Rank from '../Rank/Rank';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';


class App extends Component {
  //set text for ranking feeling displays
  understand='How well do you feel you understand the content this week?';
  feel='How are you feeling this week?';
  support='How supported are you feeling?';

  //set directions for routes
  direction={
    understanding:{
      f: '/feeling',
      b: '/',
    },
    feeling:{
      f: '/support',
      b: '/understanding',
    },
    support:{
      f:'/comment',
      b: '/feeling',
    },
    comment:{
      f: '/review',
      b: '/support',
    },
    review:{
      f: '/',
      b: '/comment'
    },
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
        <ul>
            <li>
            </li>
            <li>
              <Link to="/feeling">Feeling</Link>
            </li>
            <li>
              <Link to="/understanding">Understanding</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
          </ul>
          <Route exact path="/feeling" render={()=><Rank action='SET_FEELING' stringContent={this.feel} default={this.props.feeling}/>}/>
          <Route exact path="/understanding" render={()=><Rank action='SET_UNDERSTANDING' stringContent={this.understand} default={this.props.understanding}/>}/>
          <Route exact path="/support" 
          render={()=>
          <Rank action='SET_SUPPORT' 
          stringContent={this.support} 
          default={this.props.support}
          direction={this.direction.support}/>}/>
          <Route exact path="/comments" 
          render={()=>
          <Comments default={this.props.comments} direction={this.direction.comments}/>}/>
          <Route exact path="/review" render={()=><Review direction={this.direction.review}/>}/>
          </Router>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
