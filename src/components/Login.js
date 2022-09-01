import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Login = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    try {
      e.preventDefault();
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
      console.log(user);
      // const API_URL = 'http://192.168.11.9:8081/api/auth/';
      // const res = await axios.post(API_URL, user);
      // localStorage.setItem('token', JSON.stringify(res.data));
      console.log('here');
      navigate('../home', { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className='shadow rounded bg-white'>
      <Form onSubmit={login} className='p-3'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            name='username'
            defaultValue={user.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            defaultValue={user.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
