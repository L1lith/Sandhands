import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1 className="status-code">404</h1>
        <h2 className="status-text">Page Not found</h2>
        <h1 className="return">
          <Link href="/Sandhands/">Return Home</Link>
        </h1>
      </div>
    )
  }
}

export default NotFound
