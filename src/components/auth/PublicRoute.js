// Router wrapper component to handle public route
import { Route, useHistory } from 'react-router-dom'
import AppContext from 'store/AppContext';
import { useContext, useEffect } from 'react';

const PublicRoute = ({ component: Component, redirect = "/search", ...rest }) => {
    const { appState } = useContext(AppContext)
    const history = useHistory()

    useEffect(()=>{
        if(appState.isLoggedIn)
            history.push(redirect)
    }, [appState.isLoggedIn]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
    );
}
export { PublicRoute }
export default PublicRoute