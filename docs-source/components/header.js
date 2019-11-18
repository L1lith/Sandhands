import React, {Component} from 'react'
import Link  from 'next/Link'
import '../styles/header.less'


class Header extends Component {
  render() {
    return (
      <header className="main">
        <h1 className="sitetitle"><Link href="/Sandhands/"><a>Sandhands Docs</a></Link></h1>
        <ul>
          <li><Link href="/Sandhands/format"><a>Format</a></Link></li>
          <li><Link href="/Sandhands/methods"><a>Methods</a></Link></li>
          <li><Link href="/Sandhands/sandbox"><a>Sandbox</a></Link></li>
          <li><a href="https://github.com/l1lith/sandhands">Source</a></li>
        </ul>
      </header>
    )
  }
}

export default Header
