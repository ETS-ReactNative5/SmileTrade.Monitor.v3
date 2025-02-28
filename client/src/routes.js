import React from 'react';
import { Switch, Route } from 'react-router-dom'

import App from './App'
import Dashboard from './components/views/Dashboard';
import Tracer from './components/views/Tracer';
import CreditEmail from './components/views/CreditEmail';
import CpWorstdate from './components/views/CpWorstdate';
import Deal from './components/views/Deal';

const Roster = () => (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path="/Tracer" component={Tracer} />
        <Route path="/Email" component={CreditEmail} />
        <Route path="/Worstdate" component={CpWorstdate} />
        <Route path="/Deal" component={Deal} />
    </Switch>
)

export default Roster;