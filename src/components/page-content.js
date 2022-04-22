import React from 'react'
import { Switch, Route } from 'react-router'

import Discussion from './discussion';
import Rules from './rules';
import WorkFlow from './workflow';

export default function ContentPage() {
  return (
    <div>

        <Switch>

            <Route exact path="/" component={Discussion} />

            <Route exact path="/rules" component={Rules}/>

            <Route exact path="/workflow" component={WorkFlow}/>

        </Switch>

    </div>

  )
}