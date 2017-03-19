import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import './index.css'


class App extends Component {

    render() {
        return (
            <div>
                <h1> hello react router! </h1>
                <ul>
                    <li><IndexLink to="/" activeStyle={{color: 'red'}} activeClassName="active"> 首页</IndexLink></li>
                    <li><Link to="/about" activeStyle={{color: 'blue'}} activeClassName="active">关于</Link></li>
                    <li><Link to="/contact/lisi" activeStyle={{color: 'green'}} activeClassName="active">联系</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}


export default App
