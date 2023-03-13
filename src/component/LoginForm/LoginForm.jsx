import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import * as Validator from 'validatorjs';

function Login() {
    const [user, setUser] = useState({
        email:"",
        password:"",
        errors:[],
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

        const {email, password} = user;

        let data = {
            email,
            password,
        };
          
        let rules = {
            email: 'required|email',
            password: 'required|min:8'
        };
          
        let validation = new Validator(data, rules, {
            required: ":attribute tidak boleh kosong",
            email: "Email tidak valid",
            min: "Minimal :attribute :min karakter",
        });

        validation.passes(); // true

        setUser({
            email,
            password,
            errors: [
                ...validation.errors.get('email'),
                ...validation.errors.get('password'),
            ],
        });
        alert(`Email: ${user.email} \nPassword: ${user.password}`)
        // console.log("Test", validation.errors.all());
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
                    value={user.email}
                    onChange={handleInputChange} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleInputChange} />
                </Form.Group>

                <ul>
                    {user.errors.map((item, i) => (
                        <li key={i} className="text-danger">{item}</li>
                    ))}
                </ul>

                <Button 
                variant="primary" 
                type="submit"
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login;