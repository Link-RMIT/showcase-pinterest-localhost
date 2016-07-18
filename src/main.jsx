import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import App from './layouts/App.jsx';
import store from './layouts/store.js';

render(<Provider store={store}>
    <App />
</Provider>,document.getElementById('render-target'));
