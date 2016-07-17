import React from "react";
import { PublicPin } from './Pin.jsx'

export class AllPins extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const list = this.props.pins;
        console.log(list);
        const pins_list = (list || []).map((pin)=>{
            return (
                <PublicPin pin={ pin } key={ pin._id } />
            );
        });
        return (
            <div id="pins">
                { pins_list }
            </div>
        )
    }/*
    render(){
        return (<div>all pins</div>)
    }*/
}


