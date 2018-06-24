import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class redirectLocation extends Component {
  render() {
    let pathname = "/" + this.props.location.pathname.split('/').slice(2).join('/')
    return (<Redirect to={pathname}/>)
  }
}

export default {path: '/sandhands/*', component: redirectLocation}
