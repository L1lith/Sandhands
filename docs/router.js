import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {join} from 'path'

const required = require.context('./pages/', true, /\.js$/)

const routes = required.keys().map(key => required(key)).map(module => module.__esModule === true ? module.default || {} : module)

export default (
  <Switch>
    {routes.map((options, index) => (
      <Route key={index} {...options} />
    ))}
  </Switch>
)
