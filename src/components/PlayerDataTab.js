import React from "react";
import utils from "../utils/utils";
import "../styles/sprites.css"

const PlayerDataTab = props => {

    const playerClassForId = props.playerObj.id === 1 ? "sprite-player1" : "sprite-player2";

    return (
        <section className="flex-fill">
            <h1 className="center-text">
                Gracz {props.playerObj.id} - {props.playerObj.name}
            </h1>
            <div className="flex-row-spacing">
                <div className="flex-column-twos-center">
                    <div className={playerClassForId} />
                </div>
                <div className="flex-row-twos">
                    {utils.range(1, props.hp).map(no => (
                        <div key={no} className="flex-center-col">
                            <div className="sprite-heart" />
                        </div>
                    ))}
                    {props.playerObj.maxHp > props.hp ?
                        <div className="flex-center-col">
                            <div className="sprite-add" />
                        </div> :
                        null}
                </div>
            </div>
            <div className="flex-row-spacing">
                <div className="flex-column-twos-center">
                    <label>TIMER</label>
                </div>
                <div className="flex-row-twos">
                    <div>
                        <div className="sprite-enemy-token-small" />
                    </div>
                    <div className="flex-center-col">
                        <label>+{props.enemyPower}</label>
                    </div>                    
                </div>
            </div>
            <div className="flex-center-col">
                <label className="center-text">Kości</label>
                <div className="dice-container">
                    {props.dice.map((die, idx) => (
                        <div key={idx}>
                            {die.toString()}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-center-col">
                <label className="center-text">Przedmioty</label>
                <div className="items-container">

                </div>
            </div>

            <div className="flex-grow">
                FILLER
            </div>
            <div>
                <button
                    className="btn-default"
                    onClick={props.onEndTurnClick}>
                    XD
                    </button>
                <button
                    className="btn-default"
                    onClick={props.onEndTurnClick}>
                    I'm Roxxxy Andrews and I'm here
                    </button>
                <button
                    className="btn-default"
                    onClick={props.onEndTurnClick}>
                    Zakończ turę
                    </button>
            </div>
        </section>
    );
}

export default PlayerDataTab;