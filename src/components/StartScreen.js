import React from 'react';

const StartScreen = props => (
    <section className="StartScreen flex-fill-center">
        <div>
            <h1>Kto zaczyna?</h1>
        </div>        
        <div className="flex-row">
            <div className="flex-column">
                <button className="player-choice-button player-1-button" onClick={() => props.onPlayerClick(1)}></button>
                {/* <h1>Smutny gracz</h1> */}
            </div>
            <div className="flex-column">
                <button className="player-choice-button player-2-button" onClick={() => props.onPlayerClick(2)}></button>
                {/* <h1>Wesoły gracz</h1> */}
            </div>
        </div>
    </section>
);

export default StartScreen;