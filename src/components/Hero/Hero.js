import React from 'react';
import './Hero.css';
import {ConnectB} from '../Header/connect';

const Hero =()=>{
    return(
        <div className='Hero'>
            <div className='intro'>
                <h1>Welcome To <strong>ListenFy</strong> <br/>The Home of Quality Music</h1>
                <div className='btn'>
                    <ConnectB/>
                </div>
            </div>
        </div>
    )
}


export default Hero;









