import React, {Component} from 'react'
import AceEditor from 'react-ace'
import brace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/ambiance'

class Sandbox extends Component {
  constructor(props) {
    super(props)
    this.state = {theme: null}
    window.setTheme = themeName => {
      this.setState({theme: themeName})
    }
  }
  render() {
    return (
      <div className="sandbox">
        <div className="editor-titles">
          <h2>Input Data</h2><h2>Format Object</h2>
        </div>
        <div className="editors">
          <AceEditor className="input" mode="javascript" theme="ambiance" onChange={this.handleChange.bind(this, "input")}/>
          <AceEditor className="input" mode="javascript" theme="ambiance" onChange={this.handleChange.bind(this, "format")}/>
        </div>
      </div>
    )
  }
  handleChange(editor, value) {
    let object
    try {
      object = eval("(" + value + ")")
    } catch(error) {
      this.evalError(editor)
      return
    }
    setObject(editor, object)
  }
  evalError(editor) {

  }
  setObject(editor, object) {
    
  }
}

export default {path: "/sandbox", exact: true, component: Sandbox}
