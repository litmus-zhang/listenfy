import React from 'react';
import './Cards.css'
import { Card } from './Card';

const Cards =()=>{
    return(
        <div className='cards'>
            <h2>Now Trending!</h2>
            <div className='container'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}


export default Cards;