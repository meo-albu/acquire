import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {  useSelector } from 'react-redux'

import PrivateRoute from './PrivateRoute'
import { Game } from '../Game/Game'
import { Home } from '../Home'

export const Routes = () => {
  const auth = useSelector(state => state.authReducer)
  return (
    <>
      {auth.isAuthenticated && <Redirect to={{pathname: "/game"}}/> }
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/game" component={Game}/>
        <Route path="*" component={() => "404 - NOT FOUND"} />
      </Switch>
    </>
  )
}
