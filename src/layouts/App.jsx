import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import Bootstrap from 'bootstrap-without-jquery';
import { store } from './store.js';
import Nav from "./Nav.jsx";
import { MyPins } from './components/MyPins.jsx'
import { Add } from './components/Add.jsx'

class Layout extends React.Component {
    render(){
        console.log(Object.keys(this.props.children||{}));
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        )
    }
}

class Index extends React.Component {
    render(){
        return (<div><Add /><hr /> <MyPins /></div>)
    }
}

export default class App extends React.Component {
    render(){
        console.log('render app');
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Index} />
                    <Route path="my-pins" name="my-pins" component={MyPins}></Route>
                    <Route path="add" name="add" component={Add}></Route>
                </Route>
            </Router>
        );
    }
}


/*
function login_required(target){
    const render = target.prototype.render;
    console.log('==========');
    console.log(target.prototype.onSubmit);
    target.prototype.render = (...args)=>{
        return Meteor.userId() && render.apply(this,args) || (
            <div className="row-fluid">
                <div className="alert alert-danger">
                    You can't get here! Please log-in.
                </div>
            </div>
        )
    }
    console.log(target.prototype.onSubmit);
    console.log('==========');
}
[Add,MyPins].forEach(login_required);
*/
