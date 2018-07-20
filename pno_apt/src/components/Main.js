import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Splash from './Splash'
import Apartments from './Apartments'
import Apartment from './Apartment'
import Events from './Events'
import Expenses from './Expenses'

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/apartments" component={Apartments} />
            <Route path="/apartment/:number" component={Apartment} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/events" component={Events} />
        </Switch>
    </main>
)
export default Main;