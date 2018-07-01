import React, {Component} from 'react'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <p>Welcome to the Sandhands Documentation. Use the links above to get started</p>
      </div>
    )
  }
}

export default {path: '/Sandhands/', exact: true, component: Home}
