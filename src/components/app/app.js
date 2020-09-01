import React from "react";
import {Route, Switch} from 'react-router-dom';
import './app.css';
import {CartPage, HomePage} from "../pages";

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact />
            <Route
                path="/"
                component={CartPage} />
        </Switch>
    )
};

export default App;