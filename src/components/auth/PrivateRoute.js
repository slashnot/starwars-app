// Router wrapper component to handle private routes
import { Route, useHistory } from 'react-router-dom'
import AppContext from 'store/AppContext';
import { useContext, useEffect } from 'react';

const PrivateRoute = ({ component: Component, redirect = "/", ...rest }) => {
    const { appState } = useContext(AppContext)
    const history = useHistory()

    useEffect(()=>{
        if(!appState.isLoggedIn)
            history.push(redirect)
    }, [appState.isLoggedIn]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
    );
}
export { PrivateRoute }
export default PrivateRoute
