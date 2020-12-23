const Editor = props => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default
    require('brace/mode/javascript')
    require('brace/theme/ambiance')

    return <Ace {...props} />
  }

  return null
}

class IsomorphicEditor extends React.Component {
  state = { mounted: false }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render = () => (this.state.mounted ? <Editor {...this.props} /> : null)
}

export default IsomorphicEditor
