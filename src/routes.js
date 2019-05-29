import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Goals from '../src/components/goals/Goals';
import Stats from '../src/components/stats/Stats';
import Account from '../src/components/account/Account';

export default function routes(){
    return(
        <Switch>
            <Route exact path ='/' component={App} />
            <Route path ='/goals' component={Goals} />
            <Route path ='/stats' component={Stats} />
            <Route path ='/account' component={Account} />
        </Switch>
    )
}