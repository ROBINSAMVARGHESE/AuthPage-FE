import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            onLogin({ email, password });
            navigate('/home');
        } else {
            alert("Please fill in both fields.");  // Basic validation alert
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="form-wrapper">
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <Button 
                variant="primary" 
                type="submit" 
                disabled={!email || !password}  // Disable button if fields are empty
            >
                Login
            </Button>
        </Form>
    );
};

export default LoginForm;
