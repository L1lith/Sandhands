import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Sanitizer extends Component {
  render() {
    return (
      <div className="sanitizer">
        <h1 className="pagetitle">Sanitizer</h1>
        <p className="description">
          The sanitizer object is a special object which we can use to extend the library&#39;s methods to use our own custom formats.
        </p>
      </div>
    )
  }
}

export default {path: "/sandbox", exact: true, component: Sanitizer}
