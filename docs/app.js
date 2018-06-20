import React, {Component} from 'react'
import Routes from './router'

console.log({Routes})

class App extends Component {
  render() {
    return (
      <div className="app">
        {Routes}
      </div>
    )
  }
}

export default App
