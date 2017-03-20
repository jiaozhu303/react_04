import React, { Component } from 'react'

export default class About extends Component {

  render(){
    console.log(this.props);
    return <h1> About Us ! - {this.props.params.who} - {this.props.params.wh}</h1>
  }
}

