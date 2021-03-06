import React, { Component } from 'react'
import AceEditor from '../components/editor'
import titleCase from '../functions/titleCase'
import * as sandhands from 'sandhands'
import { sanitize, details, valid, Format } from 'sandhands'
import objectToLiteralString from '../functions/objectToLiteralString'
import jsbeautifier from 'js-beautify'
import { version } from 'sandhands/package.json'
import Highlight from 'react-highlight'
import '../styles/sandbox.less'

class Sandbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'details',
      editors: ['input', 'format'],
      objects: { input: { userEmail: 12 }, format: { userEmail: 'email' } },
      values: { input: '{userEmail: 12}', format: '{userEmail: "email"}' },
      output: '{\n    userEmail: "Expected String"\n}'
    }
    ;['setMode', 'getOutput', 'setObject', 'handleChange', 'onError'].forEach(
      prop => (this[prop] = this[prop].bind(this))
    )
  }
  render() {
    return (
      <div className="sandbox">
        <div className="editors">
          {this.state.editors.map((name, index) => (
            <div key={index} className="editor">
              <h2 className="name">{titleCase(name)}</h2>
              <AceEditor
                value={this.state.values[name] || ''}
                className="input"
                mode="javascript"
                theme="ambiance"
                onChange={(...args) => {
                  this.handleChange(name, ...args)
                }}
              />
              <p>
                {this.state.objects[name] !== null ? 'V' : 'Inv'}alid Syntax{' '}
                {this.state.objects[name] !== null ? '✔' : '✖'}
              </p>
            </div>
          ))}
        </div>
        <div className="mode">
          <h3>Validation Method</h3>
          <select className="modes" onChange={this.setMode}>
            <option value="details">Details</option>
            <option value="sanitize">Sanitize</option>
            <option value="valid">Valid</option>
          </select>
        </div>
        <div className={'output ' + this.state.mode}>
          <Highlight className="javascript">{this.state.output}</Highlight>
        </div>
        <span className="version">Sandbox using Sandhands@{version}</span>
      </div>
    )
  }
  componentDidMount() {
    Object.assign(window, sandhands) // Assign the entire library to the window scope so we can use it in the sandbox
  }
  handleChange(editor, value) {
    const values = { ...this.state.values }
    values[editor] = value
    this.setState({ values })
    let object
    try {
      this.setObject(editor, eval('(' + value + ')'))
    } catch (error) {
      this.onError(editor, error)
    }
  }
  setMode(event) {
    const mode = event.target.value
    this.setState({ mode, output: this.getOutput(this.state.objects, mode) })
  }
  onError(editor, error) {
    console.error(error)
    this.setObject(editor, null)
  }
  setObject(editor, object) {
    const objects = { ...this.state.objects }
    objects[editor] = object
    this.setState({ objects })
    if (objects.input !== null && objects.format !== null) {
      this.setState({ output: this.getOutput(objects) })
    } else {
      this.setState({ output: null })
    }
  }
  getOutput({ input, format }, mode) {
    mode = mode || this.state.mode
    if (mode === 'details') {
      try {
        return jsbeautifier(objectToLiteralString(details(input, format)))
      } catch (error) {
        console.error(error)
        this.setObject('format', null)
        return null
      }
    } else if (mode === 'sanitize') {
      try {
        sanitize(input, format)
        return 'Error: null'
      } catch (error) {
        return 'Error: ' + error.message
      }
    } else if (mode === 'valid') {
      return valid(input, format).toString()
    } else {
      return 'There was an error'
    }
  }
}

export default Sandbox
