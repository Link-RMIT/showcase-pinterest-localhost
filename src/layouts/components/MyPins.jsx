import React from "react";
import { MyPin} from './Pin.jsx';

export class MyPins extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.assign(this.state || {}, props);
    }
    onDelete(pin){
        console.log(pin);
        this.setState({
            pins: this.state.pins.filter((p)=>{return p._id != pin._id}),
        });
    }
    render(){
        const list = this.state.pins;
        const pins_list = (list || []).map((pin)=>{
            return (
                <MyPin pin={ pin } key={ pin._id } onDelete={ this.onDelete.bind(this) }/>
            );
        });
        return (
            <div id="pins">
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
