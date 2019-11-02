import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';


import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';


class App extends Component {
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
          <Route exact path="/feeling" component={Feeling}/>
          <Route exact path="/understanding" render={()=><Understanding understanding={this.props.understanding}/>}/>
          <Route exact path="/support" component={Support}/>
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/review" component={Review}/>
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
