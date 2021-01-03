import React from "react"
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom"

import { PublicRoute, PrivateRoute } from 'components/auth'

// Pages
import { LoginPage } from "components/pages/LoginPage"
import { SearchPage } from "components/pages/SearchPage"

// Layouts
import { DefaultLayout } from 'components/layouts'


const AppRoutes = props => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage} />
                <PrivateRoute exact path="/search" component={DefaultLayout} />
                <Route path="*" render={() => <h1>404</h1>} />
            </Switch>
        </Router>
    )
}

export {
    AppRoutes
}
export default AppRoutes