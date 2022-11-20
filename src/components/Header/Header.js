import React from 'react';
import './header.css'
import {Connect} from './connect';

function Header(){
    return(
        <div>
            <header className='header'>
                <h1>ListenFy</h1>
                <nav>
                    <Connect/>
                </nav>
            </header>
        </div>
    )
}

export default Header;

// flex p-2 bg-black text-white w-full justify-center