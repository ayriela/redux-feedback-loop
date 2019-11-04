import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Rank extends Component {
    marks = [
        {
            value: 0,
            label: '0-Very Stressed',
        },
        {
            value: 1,
            label: '',
        },
        {
            value: 2,
            label: '',
        },
        {
            value: 3,
            label: '',
        },
        {
            value: 4,
            label: '',
        },
        {
            value: 5,
            label: '5-Feeling Ok.',
        },
        {
            value: 6,
            label: '',
        },
        {
            value: 7,
            label: '',
        },
        {
            value: 8,
            label: '',
        },
        {
            value: 9,
            label: '',
        },
        {
            value: 10,
            label: 'Feeling Great!-10',
        },
    ];

    state = {
        value: this.props.default,
    };

    setValue = (value) => {
        this.setState({
            value: value,
        })
    }

    setStore = (actionType) => {
        this.props.dispatch({ type: actionType, payload: this.state.value });
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
                <Button className="back" 
                variant="outlined" color="primary"
                onClick={() => {this.setStore(this.props.action); this.props.history.push(this.props.direction.b);}}>PREVIOUS</Button>
                <Button className="next" 
                variant="contained" color="primary"
                onClick={() => this.setStore(this.props.action)}>NEXT</Button>
            </div>
        );
    }
}

export default connect()(withRouter(Rank));
