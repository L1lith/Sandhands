import React, {Component} from 'react'
import AceEditor from 'react-ace'
import brace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/ambiance'
import titleCase from '@functions/titleCase'

class Sandbox extends Component {
  constructor(props) {
    super(props)
    this.state = {editors: ["input", "format"], messages: {}, valid: {}, values: {}};
    ['setValid','handleChange','onValid', 'setMessage', 'onError'].forEach(prop => this[prop] = this[prop].bind(this))
  }
  render() {
    return (
      <div className="sandbox">
        {this.state.editors.map( (name, index) => (
          <div key={index} className="editor">
            <h2 className="name">{titleCase(name)}</h2>
            <AceEditor value={this.state.values[name] || ""} className="input" mode="javascript" theme="ambiance" onChange={(...args)=>{this.handleChange(name, ...args)}}/>
            <p>Valid {this.state.valid[name] === true ? "✔" : "✖"}</p>
          </div>
        ))}
      </div>
    )
  }
  handleChange(editor, value) {
    const values = {...this.state.values}
    values[editor] = value
    this.setState({values})
    let object
    try {
      this.onValid(editor, eval("(" + value + ")"))
    } catch(error) {
      this.onError(editor, error)
    }
  }
  onError(editor, error) {
    console.error(error)
    this.setValid(editor, false)
  }
  setValid(editor, isValid) {
    console.log('sv', {editor, isValid, valid: this.state.valid})
    const valid = {...this.state.valid}
    valid[editor] = isValid === true
    this.setState({valid})
  }
  onValid(editor, object) {
    this.setValid(editor, true)
  }
  setMessage(editor, message) {
    const newMessages = {...this.state.messages}
    if (message === null) {
      delete newMessages[editor]
    } else {
      newMessages[editor] = message
    }
    this.setState({messages: newMessages})
  }
}

export default {path: "/sandbox", exact: true, component: Sandbox}
