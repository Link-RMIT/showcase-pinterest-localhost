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
        const list = this.props.pins;
        const pins_list = (list || []).map((pin)=>{
            return (
                <MyPin pin={ pin } key={ pin._id }/>
            );
        });
        return (
            <div>
                <h1 style={{clear:'both',width:'100%'}}>My Pins</h1>
                <div id="pins">

                    { pins_list }
                </div>
            </div>
        )
    }
}

/*
   MyPins.propTypes = {
   pins: React.PropTypes.array.isRequired,
   }
 */
