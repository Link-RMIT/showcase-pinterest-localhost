import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const uuid = () => {
    //http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}



const reducer = (state={
    pins: [],
},action) => {
    switch(action.type){
    case 'ADD_PIN':
        let pin = Object.assign({},action.payload);
        pin._id = uuid();
        return {...state, pins: [...state.pins, pin]};
    case 'REMOVE_PIN':
        return {...state, pins: state.pins.filter((p)=>{{
            return p._id != action.payload;
        }})};
    };
    return state;
};


//export default createStore(reducer, middleware)
const middleware = applyMiddleware(thunk, logger());
export default createStore(reducer, middleware);
