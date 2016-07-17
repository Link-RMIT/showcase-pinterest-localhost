import React from 'react';
import { BasicPin } from './Pin.jsx';

export class UserPins  extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const list = this.props.pins;
        console.log(list);
        const pins_list = (list || []).map((pin)=>{
            return (
                <BasicPin pin={ pin } key={ pin._id } />
            );
        });
        return (
            <div id="pins">
                { pins_list }
            </div>
        )
    }
}
