import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  render() {
    return null
  }
  static async componentDidMount({ res }) {
    Router.push('/home')
    return {}
  }
}
