import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class Review extends Component {
    state={
        dialog: false,
    }

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
          }). then(() =>{
            this.openDialog();
          }).catch( error =>
            console.log(`error in POST ${error}`)
          )
    }

    openDialog=()=>{
        this.setState({
            dialog: true,
        });
    }
    
    closeDialog=()=>{
        this.setState({
            dialog: false,
        });
        console.log(`closed dialog route next`);

    }
    

  render() {
    return (
      <div className="review">
            <Typography>Please Review your Feedback!</Typography>
            <Card>
                <Typography>Feelings: {this.props.feeling}</Typography>
                <Typography>Understanding: {this.props.understanding}</Typography>
                <Typography>Support: {this.props.support}</Typography>
                <Typography>Comments: {this.props.comments}</Typography>
            </Card>
            <CardActionArea>
                <Button>Go Back</Button>
                <Button onClick={this.submitFeedback}>Submit</Button>
            </CardActionArea>
            <Dialog
                open={this.state.dialog}
                onClose={this.closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Submission Received"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Thanks for your feedback! </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.closeDialog} color="primary">
                        Close</Button>
                </DialogActions>
            </Dialog>
          <pre>{JSON.stringify(this.props,null,2)}</pre>
      </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);
