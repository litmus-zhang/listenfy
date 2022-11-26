import React from 'react';
import './Cards.css';
import album from './albumcover.jpg';
import album2 from './albumcover2.png';
import album3 from './albumcover3.png';
import Play from './Play';


export const Card1 = ()=>{
    return(
        <div className='card'>
            <div className='subcard'>
                <img src={album} alt="album disc"/>
                <div className='details'>
                    <div>
                        <h3>Shege</h3>
                        <p>Lukman Litmus</p>
                    </div>
                    <Play/>
                </div>
            </div>
        </div>
    )
}
export const Card2 = ()=>{
    return(
        <div className='card'>
            <div className='subcard'>
                <img src={album2} alt="album disc"/>
                <div className='details'>
                    <div>
                    <h3>This is Me</h3>
                    <p>Daytoner</p>
                    </div>
                    <Play/>
                </div>
            </div>
        </div>
    )
}
export const Card3 = ()=>{
    return(
        <div className='card'>
            <div className='subcard'>
                <img src={album3} alt="album disc"/>
                <div className='details'>
                    <div>
                    <h3>Blossom</h3>
                    <p>Jude O.C</p>
                    </div>
                    <Play/>
                </div>
            </div>
        </div>
    )
}
