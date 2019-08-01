import React from 'react';
import '../styles/App.css';
import '../styles/buttons.css';
import "../styles/flex.css";

import StartScreen from './StartScreen';
import PlayerScreen from './PlayerScreen';
import {PlayerObj} from "../utils/classes";
import utils from "../utils/utils";
import consts from '../utils/consts';
//import { ItemObj } from "../utils/classes";
import { connect } from "react-redux";

const Game = props => {    
    const [gameState, setGameState] = React.useState(consts.gameStates.prepared);
    const [currentPlayerId, setCurrentPlayerId] = React.useState(1);
    //const [items, setItems] = React.useState(consts.itemsList.map(x => new ItemObj(x)));

    const startGame = playerId => {
        setCurrentPlayerId(playerId);
        setGameState(consts.gameStates.active);
    }

    const changePlayer = () => {
        if (currentPlayerId === 1) {
            setCurrentPlayerId(2);
        } else {
            setCurrentPlayerId(1);
        }
    }

    //const setItemAsUsed = (itemId, playerId) => {
    //    //debugger;
    //    let item = items.filter(it => it.id === itemId)[0];
    //    setItems([...items.filter(it => it !== item), Object.assign({}, item, {usedBy: playerId})]);
    //}

    const getItemsForPlayer = (playerId) => {
        return props.items.filter(it => it.usedBy === playerId);
    }

    const getTabComponent = () => {
        switch (gameState) {
            case consts.gameStates.prepared:
                return <StartScreen onPlayerClick={startGame}/>;
            case consts.gameStates.active:
                return (
                    <>
                        {utils.range(1, 2).map(id => (
                            <PlayerScreen
                                key={id}
                                player={new PlayerObj(id)}
                                items={getItemsForPlayer(id)}
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

const mapStateToProps = state => {
    return {items: state}
}

export default connect(mapStateToProps)(Game);