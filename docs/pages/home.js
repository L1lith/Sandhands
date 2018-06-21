import React, {Component} from 'react'

class Home extends Component {
  render() {
    return (
      <p>This is the home page.</p>
    )
  }
}

export default {path: '/', exact: true, component: Home}
