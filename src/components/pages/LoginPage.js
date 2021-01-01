// Login Page
import { Button } from "shards-react";
import AppContext from 'store/AppContext';
import { useContext } from 'react';


const LoginPage = props => {
    const { appState, appDispatch } = useContext(AppContext)
    console.log(props)

    const handleClick = () => {
        appDispatch({ type: "CHANGE_NAME" })
        props.history.push ("/search")
    }

    return (
        <div className="login-page">
            <Button onClick={handleClick}>Primary</Button>
            <h1>{appState.user}</h1>
        </div>
    )
}

export { LoginPage }
export default LoginPage