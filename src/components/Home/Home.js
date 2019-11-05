import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="home">
       <Typography>Welcome to the Feedback Tracker!</Typography>
       <Typography>Click below to get started.</Typography>
       <Button 
       display="block"
       className="new" 
       variant="contained"
       color="primary"
       onClick={()=>this.props.history.push('/feeling')}>Leave New Feedback!</Button>
      </div>
    );
  }
}

export default withRouter(Home);
