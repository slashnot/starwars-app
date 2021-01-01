// Router wrapper component to handle public routes
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, redirect, ...rest }) => {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
    console.log(isLoggedIn)

    return (
        <Route {...rest} render={props => (
            isLoggedIn ?
                <Redirect to={redirect} />
                : <Component {...props} />
        )} />
    );
}
export default PublicRoute