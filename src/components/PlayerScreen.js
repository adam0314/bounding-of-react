import React from "react";

const PlayerScreen = props => {
    const [hp, setHp] = React.useState(props.player.hp);
    const [items, setItems] = React.useState(props.player.items);
    const [dice, setDice] = React.useState(props.player.dice);
    const [enemyPower, setEnemyPower] = React.useState(props.player.enemyPower);

    return (
        <>
            {props.active ?
            <section>
                <div>
                    Gracz {props.player.id} - {props.player.name}
                </div>
                <button onClick={props.onEndTurnClick}>Zakończ turę</button>
            </section>
            : null}
        </>
    )
}

export default PlayerScreen;