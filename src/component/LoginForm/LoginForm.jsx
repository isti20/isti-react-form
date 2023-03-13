import {Container, Form, Button} from 'react-bootstrap';
import { useState } from 'react';

function Login() {
    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((values) => ({
            ...values,
            [name]:value
        }));
        // console.log(user);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Test", user);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h2 className="mb-3">Login Form</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter email"
                    onChange={handleInputChange} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login;