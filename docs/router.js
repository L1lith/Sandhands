import React, {Component} from 'react'
import {Switch, Router} from 'react-router-dom'
import {join} from 'path'

const routes = require.context(join(__dirname, '/pages'), true, /\.js$/)

console.log(routes)

export default (
  <Switch>
    {routers.map((options, index) => (
      <Route index={index} {...options} />
    ))}
  </Switch>
)
