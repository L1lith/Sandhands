import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="main">
        <h1 className="sitetitle"><Link to="/">Sandhands Documentation</Link></h1>
      </header>
    )
  }
}

export default Header
