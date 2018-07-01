import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="main">
        <h1 className="sitetitle"><Link to="/Sandhands/">Sandhands Docs</Link></h1>
        <ul>
          <li><Link to="/Sandhands/format">Format</Link></li>
          <li><Link to="/Sandhands/methods">Methods</Link></li>
          <li><Link to="/Sandhands/sandbox">Sandbox</Link></li>
          <li><a href="https://github.com/l1lith/sandhands">Source</a></li>
        </ul>
      </header>
    )
  }
}

export default Header
