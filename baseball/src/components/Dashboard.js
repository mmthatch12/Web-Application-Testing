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

    const ballHandle = () => {
        if(ballCount <=2 ) {
            setBallCount(ballCount + 1)
        } else {
            setBallCount(0);
            setStrikeCount(0);
        }
    }

    const foulHandle = () => {
        if(strikeCount <=1 ) {
            setStrikeCount(strikeCount + 1)
        } 
    }

    return (
        <div>
            <button onClick={strikeHandle}>Strike</button>
            <button onClick={ballHandle}>Ball</button>
            <button onClick={foulHandle}>Foul</button>
            <button onClick={() => {setStrikeCount(0); setBallCount(0)}}>Hit</button>
        </div>
    )
}

export default Dashboard
