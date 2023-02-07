import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Root = () => {
    return (
        <>
    <NavigationBar></NavigationBar>
    <Outlet></Outlet>
    
        </>
    );
};

export default Root;