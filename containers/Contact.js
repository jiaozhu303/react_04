import React, { Component } from 'react'

export default class Contact extends Component {

  render(){
    return <h1> Contact Me - {this.props.params.who}</h1>
  }
}
