import React, {Component} from 'react'
import AceEditor from 'react-ace'
import brace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/ambiance'
import titleCase from '@functions/titleCase'
import {sanitize, valid} from 'sandhands'
import objectToLiteralString from '@functions/objectToLiteralString'
import jsbeautifier from 'js-beautify'

class Sandbox extends Component {
  constructor(props) {
    super(props)
    this.state = {mode: "sanitize", editors: ["input", "format"], objects: {input: {userEmail: 12}, format: {userEmail: {_:String, email: true}}}, values: {input: "{userEmail: 12}", format: "{userEmail: {_: String, email: true}}"}, output: "{\n    _: [],\n    userEmail: [Invalid Type]\n}"};
    ['setMode', 'getOutput', 'setObject', 'handleChange', 'onError'].forEach(prop => this[prop] = this[prop].bind(this))
  }
  render() {
    return (
      <div className="sandbox">
        <div className="editors">
          {this.state.editors.map( (name, index) => (
            <div key={index} className="editor">
              <h2 className="name">{titleCase(name)}</h2>
              <AceEditor value={this.state.values[name] || ""} className="input" mode="javascript" theme="ambiance" onChange={(...args)=>{this.handleChange(name, ...args)}}/>
              <p>{this.state.objects[name] !== null ? "V" : "Inv"}alid Syntax {this.state.objects[name] !== null ? "✔" : "✖"}</p>
            </div>
          ))}
        </div>
        <div className="mode">
          <select className="modes" onChange={this.setMode}>
            <option value="sanitize">Sanitize</option>
            <option value="valid">Valid</option>
          </select>
        </div>
        {this.state.output === null ? null : this.state.mode === "sanitize" ? (
              <div className="output sanitize">
                <code>
                  {this.state.output}
                </code>
              </div>
            ) : this.state.mode === "valid" ? (
              <div className="output valid">
                <code>
                  {this.state.output}
                </code>
              </div>
            ) : null }
      </div>
    )
  }
  handleChange(editor, value) {
    const values = {...this.state.values}
    values[editor] = value
    this.setState({values})
    let object
    try {
      this.setObject(editor, eval("(" + value + ")"))
    } catch(error) {
      this.onError(editor, error)
    }
  }
  setMode(event) {
    const mode = event.target.value
    this.setState({mode, output: this.getOutput(this.state.objects, mode)})
  }
  onError(editor, error) {
    console.error(error)
    this.setObject(editor, null)
  }
  setObject(editor, object) {
    const objects = {...this.state.objects}
    objects[editor] = object
    this.setState({objects})
    if (objects.input !== null && objects.format !== null) {
      this.setState({output: this.getOutput(objects)})
    } else {
      this.setState({output: null})
    }
  }
  getOutput({input, format}, mode) {
    mode = mode || this.state.mode
    if (mode === "sanitize") {
      try {
        return jsbeautifier(objectToLiteralString(sanitize(input, format)))
      } catch(error) {
        console.error(error)
        this.setObject('format', null)
        return null
      }
    } else if (mode === "valid") {
      try {
        return valid(input, format).toString()
      } catch(error) {
        console.error(error)
        this.setObject('format', null)
        return null
      }
    } else {
      return null
    }
  }
}

export default {path: "/sandbox", exact: true, component: Sandbox}
