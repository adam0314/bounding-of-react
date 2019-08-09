import React from "react";
import EnemyGrid from "./grids/EnemyGrid";
import DiceGrid from "./grids/DiceGrid";
import _ from "lodash";
import ThrowsGrid from "./grids/ThrowsGrid";
import consts from "../utils/consts";
import utils from "../utils/utils";
import {connect} from "react-redux";
import fightManager from "../utils/fightManager";
import UseItemPopup from "./popups/UseItemPopup";


const FightBaseTab = props => {
    const [fightStarted, setFightStarted] = React.useState(false);
    const [useItemPopupState, setUseItemPopupState] = React.useState(0);
    const [playerThrows, setPlayerThrows] = React.useState([]); // Array of ThrowObjs
    const [enemyThrows, setEnemyThrows] = React.useState([]); // same as above
    const [playerScoreModifiers, setPlayerScoreModifiers] = React.useState(
        props.items.filter(item => item.usedBy === props.playerObj.id && item.id === 13)
    );

    // functs

    const startFight = () => {
        // Setting initial throws
        let initialPlayerThrows = utils.throwDice(props.playerDice);
        fightManager.applyPassivesExcept13(
            props.items.filter(item => item.usedBy === props.playerObj.id),
            initialPlayerThrows,
            setPlayerThrows);

        setEnemyThrows(utils.throwDice(props.enemy.dice));
        setFightStarted(true);
    }

    const toggleUseItemsPopup = playerId => {
        if (playerId === 1) {
            // Popup for player 1
            switch (useItemPopupState) {
                case 1:
                    setUseItemPopupState(0);
                    return;
                case 2:
                    setUseItemPopupState(1);
                    return;
                default:
                    setUseItemPopupState(1);
                    return;
            }
        } else {
            // Popup for player 2
            switch (useItemPopupState) {
                case 1:
                    setUseItemPopupState(2);
                    return;
                case 2:
                    setUseItemPopupState(0);
                    return;
                default:
                    setUseItemPopupState(2);
                    return;
            }
        }
    }

    // end functs

    // jsx

    const beforeFightTab =
        <>
            <div className="flex-center-col">
                <label className="center-text">Kości wroga</label>
                <DiceGrid
                    dice={_.isEmpty(props.enemy) ? [] : props.enemy.dice} />
            </div>
            <div className="flex-row-space-even">
                <button
                    className="btn-fight"
                    onClick={() => {
                        console.log("start fight");
                        startFight();
                    }} />
                <button
                    className="btn-back"
                    onClick={props.onBackClick} />
            </div>
        </>;
    
    const switchUseItemPopupRender = (statee) => {
        switch (statee) {
            case 1:
                return <UseItemPopup
                    player={1}
                    items={props.items.filter(item =>
                        (item.usedBy === 1 && item.type === consts.itemTypes.consumable && item.usableInFight))}
                />;
            case 2:
                return <UseItemPopup
                    player={2}
                    items={props.items.filter(item =>
                        (item.usedBy === 2 && item.type === consts.itemTypes.consumable && item.usableInFight))}
                />;
            default:
                return null;
        }
    }

    const inFightTab =
        <>
            <ThrowsGrid
                owner="player"
                spriteTex={props.playerObj.id === 1 ? "sprite-player1" : "sprite-player2"}
                throws={playerThrows}
                throwsScoreModifiers={playerScoreModifiers}
                />
            <ThrowsGrid
                owner="enemy"
                spriteTex={props.enemy.type !== consts.enemyTypes.player ?
                    "sprite-enemy-token" : props.playerObj.id === 1 ?
                    "sprite-player2" :
                    "sprite-player1"}
                throws={enemyThrows}
                throwsScoreModifiers={[]}
                />
            <div className="flex-row-space-even" style={{height: "15vh"}}>
                <button
                    className="btn-add-item-1 btn-square"
                    onClick={() => toggleUseItemsPopup(1)}/>
                <button
                    className="btn-add-item-2 btn-square"
                    onClick={() => toggleUseItemsPopup(2)}/>
                <button className="btn-next btn-square" />
            </div>
            {switchUseItemPopupRender(useItemPopupState)}            
        </>;

    // jsx end

    return (
        <section className="flex-fill">
            <div className="height-40pc">
                <div className="flex-fill-space-even">
                    <div className="flex-center-row-align">
                        <EnemyGrid
                            enemy={props.enemy}
                            onEnemyChosen={props.onEnemyChosen} />
                    </div>
                </div>
            </div>
            <div className="flex-grow flex-fill-space-even">
                {fightStarted ? inFightTab : beforeFightTab}
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {items: state}
}

export default connect(mapStateToProps)(FightBaseTab);