import React, {Component} from 'react'
import Routes from './router'
import Header from '@components/header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        {Routes}
      </div>
    )
  }
}

export default App
