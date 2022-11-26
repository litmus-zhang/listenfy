import React from 'react';
import './Cards.css'
import { Card1 } from './Card';
import { Card2 } from './Card';
import { Card3}  from './Card';

const Cards =()=>{
    return(
        <div className='cards'>
            <h2>Now Trending!</h2>
            <div className='container'>
                <Card1/>
                <Card2/>
                <Card3/>
            </div>
        </div>
    )
}


export default Cards;