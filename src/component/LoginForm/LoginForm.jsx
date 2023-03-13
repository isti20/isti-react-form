import {Container, Form, Button} from 'react-bootstrap';
import { useState } from 'react';

function Login() {
    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    return (
        <Container>
            <Form>
                <h2 className="mb-3">Login Form</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter email"
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    name="password"
                    placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login;