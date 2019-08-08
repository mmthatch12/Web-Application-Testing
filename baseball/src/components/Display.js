import React, { useState } from 'react';
import Dashboard from './Dashboard'

// this component will hold state

const Display  = () => {
    const[strikeCount, setStrikeCount] = useState(0)
    const[ballCount, setBallCount] = useState(0)

    return (
        <div>
            <h1>At Bat Tracker</h1>
            <div className='display'>
                <div className='strikes'>
                    <h2>Strikes</h2>
                    <h2 className='bord'>{strikeCount}</h2>
                </div>
                <div className='balls'>
                    <h2>Balls</h2>
                    <h2 className='bord'>{ballCount}</h2>
                </div>
            </div>
            
            <Dashboard 
                strikeCount={strikeCount}
                setStrikeCount={setStrikeCount}
                ballCount={ballCount}
                setBallCount={setBallCount}
            />
        </div>
    )
}

export default Display