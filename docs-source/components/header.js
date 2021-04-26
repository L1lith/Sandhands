import React, { Component } from 'react'
import Link from 'next/link'
import '../styles/header.less'

class Header extends Component {
  render() {
    return (
      <header className="main">
        <h1 className="sitetitle">
          <Link href="/home.html">
            <a>Sandhands Docs</a>
          </Link>
        </h1>
        <ul>
          <li>
            <Link href="/format.html">
              <a>Format</a>
            </Link>
          </li>
          <li>
            <Link href="/methods.html">
              <a>Methods</a>
            </Link>
          </li>
          <li>
            <Link href="/sandbox.html">
              <a>Sandbox</a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/l1lith/sandhands">Source</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
