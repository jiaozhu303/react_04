import React, { Component } from 'react'

export default class About extends Component {

  render(){

    return <h1> About Us ! - {this.props.params.who}</h1>
  }
}
