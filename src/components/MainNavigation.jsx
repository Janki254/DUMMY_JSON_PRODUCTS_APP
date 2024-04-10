import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../store/authSlice/authSlice';

const MainNavigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoggedIn} = useSelector((state) => state.auth);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(login());
        }
    }, [dispatch]);

    const onLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        navigate('/');
    };
    return (
        <Navbar bg='primary' expand='lg' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='#home'>DUMMY JSON PRODUCTS</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                {isLoggedIn === true && (
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto d-flex align-items-center'>
                            <NavLink
                                to='/home'
                                className='text-white text-decoration-none me-5'
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                to='/products'
                                className='text-white text-decoration-none me-5'
                            >
                                PRODUCTS
                            </NavLink>
                            <Button variant='danger' onClick={onLogout}>
                                Logout
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                )}
            </Container>
        </Navbar>
    );
};

export default MainNavigation;
