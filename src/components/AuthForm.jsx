import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux';
import {userLogin} from '../store/authSlice/authIndex';
import {useNavigate} from 'react-router-dom';

const AuthForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() !== '' || password.trim() !== '') {
            console.log(username, password);
            dispatch(userLogin({username, password}));
            navigate('/home');
        }
    };
    return (
        <>
            <Card className='p-4 mt-5 shadow-sm' style={{width: '30rem'}}>
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Text className='text-muted font-bold'>
                            Note : Both Field is reqiried
                        </Form.Text>
                    </Form.Group>
                    <Button
                        variant='primary'
                        type='submit'
                        className='w-100'
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Form>
            </Card>
        </>
    );
};

export default AuthForm;
