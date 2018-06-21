import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <p>This is the home page.</p>
      </div>
    )
  }
}

export default {path: '/', exact: true, component: Home}
