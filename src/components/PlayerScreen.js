import React from "react";
import PlayerDataTab from "./PlayerDataTab";
import "../styles/PlayerScreen.css";
import consts from "../utils/consts";
import { DieObj } from "../utils/classes";
import FightBaseTab from "./FightBaseTab";

const PlayerScreen = props => {
    const [currentTab, setCurrentTab] = React.useState(consts.tabs.playerData);

    const [hp, setHp] = React.useState(props.player.hp);
    const [dice, setDice] = React.useState([...props.player.dice]);
    const [enemyPower, setEnemyPower] = React.useState(props.player.enemyPower);
    const [enemy, setEnemy] = React.useState({});

    const setEnemyByCopy = enemy => {
        //todo: Include Enemy Power here
        setEnemy(Object.assign({}, enemy));
    }

    const addDie = value => {
        setDice([...dice, new DieObj(value)]);
    }

    const getItemDice = props.items.filter(x => x.type === consts.itemTypes.dice).reduce((acc, curr) => Array.prototype.concat(acc, curr.dice), []);

    const getAllDice = Array.prototype.concat(getItemDice, dice);

    return (
        <>
            {props.active ?
                currentTab === consts.tabs.playerData ?
                    <PlayerDataTab
                        playerObj={props.player}
                        hp={hp}
                        items={props.items}
                        dice={getAllDice}
                        enemyPower={enemyPower}
                        onEndTurnClick={props.onEndTurnClick}
                        onFightTabClick={() => setCurrentTab(consts.tabs.fightBase)}
                        onAddDieClick={addDie}
                    />
                    : <FightBaseTab
                        onEnemyChosen={setEnemyByCopy}
                        enemy={enemy}
                        onBackClick={() => setCurrentTab(consts.tabs.playerData)}
                        />
                : null}
        </>
    )
}

export default PlayerScreen;