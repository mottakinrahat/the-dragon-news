import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {
    const[error,setError]=useState('');
    const[success,setSuccess]=useState('');
    const [accepted,setAccepted]=useState(false);
    const {createUser}=useContext(AuthContext)
 

    const handleRegister=(e)=>{
      e.preventDefault();
      const form=e.target;
      const name=form.name.value;
      const ImageUrl=form.photo.value;
      const email=form.email.value;
      const password=form.password.value;
   console.log(name,ImageUrl,email,password);
  createUser(email,password)
  .then(result=>{
    const CreatedUser=result.user;
    console.log(CreatedUser)
    setSuccess('Registration completed successfully');
  })
  .catch(error=>{
     setError(error.message);
  })
    }

    const handleAccepted=(event)=>{
        console.log(event.target.checked);
        setAccepted(event.target.checked);
    }
    return (
        <Container className='mx-auto w-25'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" required/>
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter URL" required/>
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept<Link to='/terms'> Terms and conditions</Link></>} />
                </Form.Group>
          
                <Button variant="primary" disabled={!accepted} type="submit">
                    Submit
                </Button>
                <br/>
                <Form.Text className="text-success">Already have an account?
                    <Link to='/login'>Login</Link>
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

export default Register;