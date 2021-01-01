import React from "react";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";

// Pages
import { LoginPage } from "components/pages/LoginPage";
import { SearchPage } from "components/pages/SearchPage";


const AppRoutes = props => {
    return (

        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/details" render={() => <h1>Details</h1>} />
                <Route path="*" render={() => <h1>404</h1>} />
            </Switch>
        </Router>
    )
}

export {
    AppRoutes
}
export default AppRoutes