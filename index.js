import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute, Redirect, browserHistory} from 'react-router';
import App from './containers/App';
import Contact from './containers/Contact';
import About from './containers/About';
import Home from './containers/Home';


const router = (
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRoute components={Home}/>
            <Route path="/about/:who" components={About}/>
            <Route path="/contact/:who" components={Contact}/>
            <Redirect from="/about" to="/about/redirect"/>
        </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('app'));
