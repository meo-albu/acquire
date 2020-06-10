import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Game } from '../Game/Game'
import PrivateRoute from './PrivateRoute'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => "HOME"} />
      <PrivateRoute exact path="/game" component={Game}/>
      <Route path="*" component={() => "404 - NOT FOUND"} />
    </Switch>
  )
}
