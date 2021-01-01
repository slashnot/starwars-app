// Router wrapper component to handle public routes
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, redirect = "/search", ...rest }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : null

    return (
        <Route {...rest} render={props => (
            isLoggedIn ?
                <Redirect to={redirect} />
                : <Component {...props} />
        )} />
    );
}
export { PublicRoute }
export default PublicRoute