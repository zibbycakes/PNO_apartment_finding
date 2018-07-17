import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Splash from './Splash'

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Splash} />
        </Switch>
    </main>
)
export default Main;