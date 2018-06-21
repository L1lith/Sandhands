import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="main">
        <h1 className="sitetitle"><Link to="/">Sandhands Documentation</Link></h1>
        <ul>
          {[["Github", "https://github.com/l1lith/sandhands"]].map(([text, link], index) => (
            <li><Link key={index} to={link}>{text}</Link></li>
          ))}
        </ul>
      </header>
    )
  }
}

export default Header
