import React from 'react';

const Dashboard = ({ strikeCount, setStrikeCount, ballCount, setBallCount }) => {
    const strikeHandle = () => {
        if(strikeCount <=1 ) {
            setStrikeCount(strikeCount + 1)
        } else {
            setStrikeCount(0);
            setBallCount(0)
        }
    }

    


    return (
        <div>
            <button onClick={strikeHandle}>Strike</button>
            <button onClick={() => {ballCount >= 3 ? setBallCount(ballCount - ballCount) : setBallCount(ballCount + 1)}}>Ball</button>
        </div>
    )
}

export default Dashboard

// <button onClick={() => }>Ball</button>
// <button onClick={() => }>Foul</button>
// <button onClick={() => }>hit</button>

//strikeCount >= 2 ? setStrikeCount(0) && setBallCount(0) : setStrikeCount(strikeCount + 1)}