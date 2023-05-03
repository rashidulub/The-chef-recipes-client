import React, { createContext, useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const {createUser}= useContext(AuthContext);

    const handleRegister = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form . email. value;
        const password = form . password.value;
        const photo = form.photo.value;

        console.log(name, email, password);

        createUser (email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
        })

        .catch(error=>{
            console.log(error);
        }) 
    }

    return (
        <Container className='w-25 mx-auto mt-5'>
        <h2>Register Please</h2>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" >
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="name" required />

            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo URL" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
               
                type="checkbox" 
                name='accept' 
                label={<>Accept <Link className='text-decoration-none ' to='/trems'>Trams And Condition</Link></>} />
            </Form.Group>
            <Button className='w-100' variant="primary" type="submit">
                Register
            </Button>
            <p className='mt-2'>Already Have An Account? <Link className='text-danger text-decoration-none' to='/login'>Login</Link></p>
            <Form.Text className="text-success">

            </Form.Text>
            <Form.Text className="text-danger">

            </Form.Text>
        </Form>

    </Container>
    );
};

export default Register;