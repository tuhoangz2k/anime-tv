import React from 'react';
import { Outlet } from 'react-router-dom';

function Home(props) {
    return (
        <>
            <Outlet />
        </>
    );
}

export default Home;
