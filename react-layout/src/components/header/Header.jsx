import React from 'react';
import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';
import Login from './login/Login';

function Header() {
    return (
        <div className='w-full flex justify-between'>
            <div className='w-1/6'>
                <Logo />
            </div>
            <div className='w-1/2'>
                <Navigation />
            </div>
            <div className='w-1/6'>
                <Login />
            </div>
        </div>
    )
}

export default Header;
