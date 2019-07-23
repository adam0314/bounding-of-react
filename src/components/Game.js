import React from 'react';
import '../styles/App.css';
import StartScreen from './StartScreen';
import PlayerScreen from './PlayerScreen';
import {PlayerObj} from "../utils/classes";
import utils from "../utils/utils";

const Game = () => {    
    const [currentTab, setCurrentTab] = React.useState(utils.tabs.startScreen);
    const [currentPlayerId, setCurrentPlayerId] = React.useState(1);

    const startGame = playerId => {
        setCurrentPlayerId(playerId);
        setCurrentTab(utils.tabs.playerData);
    }

    const changePlayer = () => {
        if (currentPlayerId === 1) {
            setCurrentPlayerId(2);
        } else {
            setCurrentPlayerId(1);
        }
    }

    const getTabComponent = () => {
        switch (currentTab) {
            case utils.tabs.startScreen:
                return <StartScreen onPlayerClick={startGame}/>;
            case utils.tabs.playerData:
                return (
                    <>
                        {utils.range(1, 2).map(id => (
                            <PlayerScreen
                                key={id}
                                player={new PlayerObj(id)}
                                active={currentPlayerId === id}
                                onEndTurnClick={changePlayer}
                            />
                        ))}
                    </>
                );
            default:
                return null;
        }
    }

    return (
        <section className="App-bg App-fill">
            {getTabComponent()}
        </section>
    );
}

export default Game;