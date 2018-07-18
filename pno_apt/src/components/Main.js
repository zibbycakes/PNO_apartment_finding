import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Splash from './Splash'
import Apartments from './Apartments'
import Apartment from './Apartment'

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/apartments" component={Apartments} />
            <Route path="/apartment/:number" component={Apartment} />
        </Switch>
    </main>
)
export default Main;