import React from "react";
import { MyPin} from './Pin.jsx';
import { connect } from 'react-redux';
import store from '../store.js';

@connect((store)=>{

    return  {pins: (store ? store.pins : [])};
})
export class MyPins extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.assign(this.state || {}, props);
    }
    render(){
        console.log("====================");
        console.log(store.getState());
        console.log(this.props);
        console.log("====================");
        const list = this.props.pins;
        const pins_list = (list || []).map((pin)=>{
            return (
                <MyPin pin={ pin } key={ pin._id }/>
            );
        });
        return (
            <div id="pins">
                <h1>My Pins</h1>
                { pins_list }
            </div>
        )
    }
}

/*
MyPins.propTypes = {
    pins: React.PropTypes.array.isRequired,
}
*/
