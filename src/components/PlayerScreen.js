import React from "react";
import PlayerDataTab from "./PlayerDataTab";
import "../styles/PlayerScreen.css"

const PlayerScreen = props => {
    const [hp, setHp] = React.useState(props.player.hp);
    const [items, setItems] = React.useState([]);
    const [dice, setDice] = React.useState([...props.player.dice]);
    const [enemyPower, setEnemyPower] = React.useState(props.player.enemyPower);

    return (
        <>
            {props.active ?
                <PlayerDataTab
                    playerObj={props.player}
                    hp={hp}
                    items={items}
                    dice={dice}
                    enemyPower={enemyPower}
                    onEndTurnClick={props.onEndTurnClick}
                />
                : null}
        </>
    )
}

export default PlayerScreen;