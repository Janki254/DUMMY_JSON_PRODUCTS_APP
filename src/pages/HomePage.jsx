import React from 'react';
import {useSelector} from 'react-redux';

const HomePage = () => {
    const {user} = useSelector((state) => state.auth);
    return (
        <>
            <h2> Hello {user ? user.firstName : 'Guest'}</h2>
        </>
    );
};

export default HomePage;
