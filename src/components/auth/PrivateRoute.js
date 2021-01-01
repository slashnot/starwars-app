// Router wrapper component to handle private routes
import { Redirect, Route, useHistory } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import AppContext from 'store/AppContext';

const PrivateRoute = ({ component: Component, redirect = "/", ...rest }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : null
    const { appState } = useContext(AppContext)
    const history = useHistory()

    useEffect(() => {
        if (!appState.isLoggedIn)
            history.push(redirect)
    }, [appState.isLoggedIn]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Route {...rest} render={props => (
            !isLoggedIn ?
                <Redirect to={redirect} />
                : <Component {...props} />
        )} />
    );
}
export { PrivateRoute }
export default PrivateRoute