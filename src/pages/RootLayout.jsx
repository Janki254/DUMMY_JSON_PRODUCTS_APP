import React from 'react';
import {Outlet} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import {useSelector} from 'react-redux';

const RootLayout = () => {
    const {isLoggedIn} = useSelector((state) => state.auth);
    return (
        <>
            <MainNavigation />
            <main>
                {isLoggedIn === true ? (
                    <h1>Welcome back...</h1>
                ) : (
                    <h1>Welcome...</h1>
                )}
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;
