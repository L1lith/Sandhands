import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <p>Welcome to the Sandhands Documentation. Use the links above or check out the Sandbox to get started</p>
      </div>
    )
  }
}

export default {path: '/', exact: true, component: Home}
