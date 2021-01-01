// Login Page
import { Card, CardTitle, CardBody, CardFooter, Button, Form, FormInput, FormGroup } from "shards-react";
import useAuth from 'hooks/useAuth'
import AppContext from 'store/AppContext';
import { useContext } from 'react';


const LoginPage = () => {
    const { login } = useAuth()
    const { appState } = useContext(AppContext)

    /* Handle login form Submit
    --------------------------------------------------- */
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const credentials = { username: e.target.username.value, password: e.target.password.value }
        login(credentials)
    }

    /*-------------------------------------------------- */

    return (
        <div className="login-page">
            <Form onSubmit={handleLoginSubmit}>
                <Card style={{ maxWidth: "300px" }}>
                    <CardBody>
                        <CardTitle>Login</CardTitle>
                        <FormGroup>
                            <label htmlFor="#username">Username</label>
                            <FormInput defaultValue="luke" name="username" id="#username" placeholder="Username" />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="#password">Password</label>
                            <FormInput defaultValue="19BBY" name="password" type="password" id="#password" placeholder="Password" />
                        </FormGroup>
                        {appState.loginError && <h4>{appState.loginError}</h4>}
                    </CardBody>
                    <CardFooter>
                        <Button type="submit">Login</Button>
                    </CardFooter>
                </Card>
            </Form>
        </div>
    )
}

export { LoginPage }
export default LoginPage