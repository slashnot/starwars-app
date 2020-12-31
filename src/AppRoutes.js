import React from "react";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";

const AppRoutes = props => {
    return (

        <Router>
            <Switch>
                <Route exact path="/" render={() => <h1>Home</h1>} />
                <Route exact path="/search" render={() => <h1>Search</h1>} />
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