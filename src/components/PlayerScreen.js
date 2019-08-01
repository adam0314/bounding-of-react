import React from "react";
import PlayerDataTab from "./PlayerDataTab";
import "../styles/PlayerScreen.css";
import consts from "../utils/consts";
import { DieObj } from "../utils/classes";
import FightBaseTab from "./FightBaseTab";
import utils from "../utils/utils";

const PlayerScreen = props => {
    const [currentTab, setCurrentTab] = React.useState(consts.tabs.playerData);

    const [hp, setHp] = React.useState(props.player.hp);
    const [dice, setDice] = React.useState([...props.player.dice]);
    const [enemyPower, setEnemyPower] = React.useState(props.player.enemyPower);
    const [enemy, setEnemy] = React.useState({});

    const setEnemyByCopy = enemy => {
        setEnemy(Object.assign({}, enemy, {dice: Array.prototype.concat(enemy.dice, utils.createDiceForEnemyPowerAndSign(enemyPower, enemy.sign))}));
    }

    const clearEnemy = () => {
        setEnemy({});
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
                        clearEnemy={clearEnemy}
                        enemy={enemy}
                        onBackClick={() => {
                            setCurrentTab(consts.tabs.playerData);
                            clearEnemy();
                        }}
                        />
                : null}
        </>
    )
}

export default PlayerScreen;