import React from "react";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import { PublicRoute, PrivateRoute } from 'components/auth'

// Pages
import { LoginPage } from "components/pages/LoginPage";
import { SearchPage } from "components/pages/SearchPage";


const AppRoutes = props => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage} />
                <PrivateRoute exact path="/search" component={SearchPage} />
                <Route path="*" render={() => <h1>404</h1>} />
            </Switch>
        </Router>
    )
}

export {
    AppRoutes
}
export default AppRoutes