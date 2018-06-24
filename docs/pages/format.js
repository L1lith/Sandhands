import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Format extends Component {
  render() {
    return (
      <div className="format">
        <h1 className="pagetitle">Format</h1>
        <p className="description">This section describes the format input used by Sandhands which defines how it should sanitize the input.</p>
        <div className="string section">
          <h2 className="name">Strings</h2>

        </div>
      </div>
    )
  }
}

export default {path: '/format', exact: true, component: Format}
