import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Formats extends Component {
  render() {
    return (
      <div className="formats">
        <h1 className="pagetitle">Formats</h1>
        <p className="description">This section describes the input and output formats used by the sanitize and valid methods (<Link to="/methods">here</Link>).</p>
        <div className="format section">

        </div>
      </div>
    )
  }
}

export default {path: '/formats', exact: true, component: Formats}
