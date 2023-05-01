import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';


const Login = () => {
const[error,setError]=useState('');
const[success,setSuccess]=useState('');
const location=useLocation();
console.log('login page location',location);
  
const from=location.state?.from?.pathname||'/category/0';  


    const {signInUser}=useContext(AuthContext)
    const navigate=useNavigate();

    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            setSuccess('Successfully logged in');
            navigate(from,{replace:true})
        })
        .catch(error=>{
              setError(error.message)
        })
    }
    return (
        <Container className='mx-auto w-25'>
            <h3>Please Log in</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
          
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br/>
                <Form.Text className="text-success">Don't have an account?
                    <Link to='/register'>Register</Link>
                </Form.Text>

                <Form.Text className="text-danger">
                       {error}
                    </Form.Text>
                <Form.Text className="text-success">
                     {success}
                    </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;