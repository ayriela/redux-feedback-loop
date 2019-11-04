import React, { Component } from 'react';
import Button from 'material-ui/core/Button';
import TextField from 'material-ui/core/TextField';
import Typography from 'material-ui/core/Typography';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class Comments extends Component {
    //set by default to the reduxstate value
    state={
        value: this.props.default
    }
    //update local state on typing
    setValue=(event)=>{
        this.setState({
            value: event.target.value,
        })
    }
    //update reduxState value
    setStore=(actionType)=>{
        this.props.dispatch({type: actionType, payload: this.state.value});
    }

  render() {
    return (
      <div className="comments">
       <Typography>Do you have anything else you'd like us to know?</Typography>
       <TextField
        id="outlined-multiline-static"
        label="Comments"
        multiline
        rows="3"
        defaultValue={this.props.default}
        onChange={this.setValue}
        className="textField"
        margin="normal"
        variant="outlined"
        fullWidth
        color="primary"
      />
       <Button 
       display="inline"
       className="back" 
       variant="outlined"
       color="primary"
       onClick={()=>{this.setStore('SET_COMMENTS'); this.props.history.push(this.props.direction.b);}}>PREVIOUS</Button>
       <Button 
       display="inline-block"
       className="next" 
       variant="contained"
       color="primary"
       onClick={()=>{this.setStore('SET_COMMENTS'); this.props.history.push(this.props.direction.f);}}>NEXT</Button>
      </div>
    );
  }
}

export default connect()(withRouter(Comments));
