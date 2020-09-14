import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {ListPage} from './pages/ListPage'
import {DiagramPage} from './pages/DiagramPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'
import {ThreePage} from './pages/ThreePage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/list" exact>
          <ListPage />
        </Route>
        <Route path="/diagram" exact>
          <DiagramPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Route path="/three">
          <ThreePage />
        </Route>
        <Redirect to="/list" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
