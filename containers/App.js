import React, {Component} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import './index.css'


class App extends Component {

    constructor(props){
        super(props)
        this.sub1 = this.sub1.bind(this);
    }

    sub1(e){
        e.preventDefault();
        let name = e.target.elements.name.value;
        let user = e.target.elements.user.value;
        const path = `/about/${name}/${user}`;
        // browserHistory.push(path);
        this.context.router.setRouteLeaveHook(this.props.router, () => {
            return "are you sure?"
        });
        this.context.router.push( path );
    }

    render() {
        return (
            <div>
                <h1> hello react router! </h1>
                <ul>
                    <li><IndexLink to="/" activeStyle={{color: 'red'}} activeClassName="active"> 首页</IndexLink></li>
                    <li><Link to="/about/zhang/wang" activeStyle={{color: 'blue'}} activeClassName="active">关于</Link></li>
                    <li><Link to="/contact/lisi" activeStyle={{color: 'green'}} activeClassName="active">联系</Link></li>
                </ul>
                <form onSubmit={this.sub1}>
                    user:<input type="text" name="user"/>
                    name:<input type="text" name="name"/>
                    <button type="submit">提交</button>
                </form>
                {this.props.children}
            </div>
        )
    }
}
App.contextTypes = {
    router: React.PropTypes.object
}

export default App
