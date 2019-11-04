import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter } from 'react-router-dom';



class Review extends Component {
    state={
        dialog: false,
    }
    //function to post the submission to the database
    submitFeedback=()=>{
        const feedback={
            feeling: this.props.feeling,
            understanding: this.props.understanding,
            support: this.props.support,
            comments: this.props.comments,
        }
        axios({
            method: 'POST',
            url: '/feedback/submit',
            data: feedback,
          }).then(() =>{
            this.openDialog();
          }).catch( error =>
            console.log(`error in POST ${error}`)
          )
    }
    //function to open dialog
    openDialog=()=>{
        this.setState({
            dialog: true,
        });
    }
    //function to close dialog and route to home
    closeDialog=()=>{
        this.setState({
            dialog: false,
        });
        //reset the redux state
        this.props.dispatch({type: 'RESET'});
        console.log(`closed dialog route next`);
        this.props.history.push(this.props.direction.f);

    }

  render() {
    return (
      <div className="review">
            <Card className="reviewCard" style={{backgroundColor: '#CBFAD0'}}>
                <Typography>Please Review your Feedback:</Typography>
                <Typography>Feelings: {this.props.feeling}</Typography>
                <Typography>Understanding: {this.props.understanding}</Typography>
                <Typography>Support: {this.props.support}</Typography>
                <Typography>Comments: {this.props.comments}</Typography>
                <Button variant="contained" color="primary" style={{margin: "5px"}}
                onClick={this.submitFeedback}>Submit</Button><br></br>
                <Button variant="outlined" color="primary" 
                onClick={()=>this.props.history.push(this.props.direction.b)}>Go Back</Button>
            </Card>
            {/*Dialog Hit on Feedback Submission*/}
            <Dialog
                
                open={this.state.dialog}
                onClose={this.closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" style={{backgroundColor:'#CBFAD0'}}>{"Submission Received"}</DialogTitle>
                <DialogContent style={{backgroundColor:'#CBFAD0'}}>
                    <DialogContentText id="alert-dialog-description">
                        Thanks for your feedback! </DialogContentText>
                </DialogContent>
                <DialogActions style={{backgroundColor:'#CBFAD0'}}>
                    <Button onClick={this.closeDialog} variant="contained" color="primary">
                        Close</Button>
                </DialogActions>
            </Dialog>
      </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
    return reduxState;
}

export default connect(mapReduxStateToProps)(withRouter(Review));
