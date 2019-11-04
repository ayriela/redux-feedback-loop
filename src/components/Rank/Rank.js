import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class Rank extends Component {
    marks = [
        {
            value: 0,
            label: '0-Very Stressed',
        },
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5-Feeling Ok.',
        },
        {
            value: 6,
            label: '6',
        },
        {
            value: 7,
            label: '7',
        },
        {
            value: 8,
            label: '8',
        },
        {
            value: 9,
            label: '9',
        },
        {
            value: 10,
            label: 'Feeling Great!-10',
        },
    ];

    state={
        value: 5,
    };

    setValue=(value)=>{
        this.setState({
            value: value,
        })
    }
      
    setStore=(actionType)=>{
        this.props.dispatch({type: actionType, payload: this.state.value});
        this.props.history.push(this.props.direction.f);
    }

    
  render() {
    return (
      <div className="slide">
        <Typography id="discrete-slider" gutterBottom>
        {this.props.stringContent}
        </Typography>
        <Slider
        defaultValue={this.props.default}
        aria-valuetext={this.marks.label}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        range="false"
        value={this.marks.value}
        marks={this.marks}
        step={null}
        min={0}
        max={10}
        onChange={(e, val) => this.val = val}
        onChangeCommitted={() => this.setValue(this.val)}
      />
        <Button className="back" onClick={()=>this.props.history.push(this.props.direction.b)}>PREVIOUS</Button>
       <Button className="next" onClick={()=>this.setStore(this.props.action)}>NEXT</Button>
       <pre>{JSON.stringify(this.state, null,2)}</pre>
      </div>
    );
  }
}

export default connect()(withRouter(Rank));
