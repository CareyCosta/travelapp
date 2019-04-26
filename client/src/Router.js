import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VacationsList from './VacationsList';

const Router = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={VacationsList}/>
        </Switch>
    </BrowserRouter>
);

export default Router;