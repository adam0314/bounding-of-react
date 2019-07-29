import React from "react";
import PlayerDataTab from "./PlayerDataTab";
import "../styles/PlayerScreen.css";
import consts from "../utils/consts";
import { DieObj } from "../utils/classes";
import { connect } from "react-redux";

const PlayerScreen = props => {
    const [hp, setHp] = React.useState(props.player.hp);
    const [dice, setDice] = React.useState([...props.player.dice]);
    const [enemyPower, setEnemyPower] = React.useState(props.player.enemyPower);

    const addDie = value => {
        setDice([...dice, new DieObj(value)]);
    }

    const getItemDice = props.items.filter(x => x.type === consts.itemTypes.dice).reduce((acc, curr) => Array.prototype.concat(acc, curr.dice), []);

    const getAllDice = Array.prototype.concat(getItemDice, dice);

    return (
        <>
            {props.active ?
                <PlayerDataTab
                    playerObj={props.player}
                    hp={hp}
                    items={props.items}
                    dice={getAllDice}
                    enemyPower={enemyPower}
                    onEndTurnClick={props.onEndTurnClick}
                    onAddDieClick={addDie}
                />
                : null}
        </>
    )
}

export default PlayerScreen;