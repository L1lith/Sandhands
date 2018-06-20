import App from './app'
import {BrowserRouter} from 'react-router-dom'
import ReactDom from 'react-dom'

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
