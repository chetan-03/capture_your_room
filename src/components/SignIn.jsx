import React from 'react'
import { Form, Button } from 'react-bootstrap'
const SignIn = () => {
    return (
        <div className="outter-main">
            <Form className='p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Sign In
                </Button>
            </Form>
        </div>
    )
}

export default SignIn
