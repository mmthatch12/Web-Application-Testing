import React, { useState } from 'react';
import Dashboard from './Dashboard'

// this component will hold state

const Display  = () => {
    const[strikeCount, setStrikeCount] = useState(0)
    const[ballCount, setBallCount] = useState(0)

    return (
        <div>
            <h1>From Display.js</h1>
            <h2>Strikes</h2>
            <h2>{strikeCount}</h2>

            <h2>Balls</h2>
            <h2>{ballCount}</h2>
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