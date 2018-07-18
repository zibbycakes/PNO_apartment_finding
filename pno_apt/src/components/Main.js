import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Splash from './Splash'
import Apartments from './Apartments'

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/apartments" component={Apartments} />
        </Switch>
    </main>
)
export default Main;