import App from './app'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from 'react'
import {join} from 'path'


const stylesRequireContext = require.context('./styles', true, /\.less$/)
stylesRequireContext.keys().forEach(stylesRequireContext)

function run() {
  const root = document.getElementById('root')
  if (root === null) throw new Error("Can't Find Document Root")
  console.log('Launching App')
  ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, root)
}

if (document.readyState === "complete") {
  run()
} else {
  window.addEventListener('load', run)
}
