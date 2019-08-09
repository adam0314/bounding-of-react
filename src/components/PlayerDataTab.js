import React from "react";
import utils from "../utils/utils";
import "../styles/sprites.css";
import AddItemPopup from "./popups/AddItemPopup";
import PlayerItemsGrid from "./grids/PlayerItemsGrid";
import DiceGrid from "./grids/DiceGrid";

const PlayerDataTab = props => {

    const [displayAddItemPopup, setDisplayAddItemPopup] = React.useState(false);

    const playerId = props.playerObj.id;
    const playerClassForId = playerId === 1 ? "sprite-player1" : "sprite-player2";

    return (
        <>
            {displayAddItemPopup ?
                <AddItemPopup
                    playerId={props.playerObj.id}
                    closePopup={() => setDisplayAddItemPopup(false)}
            /> : null}
            <section className="flex-fill">
                <h1 className="center-text">
                    Gracz {playerId} - {props.playerObj.name}
                </h1>
                <div className="flex-row-spacing">
                    <div className="flex-column-twos-center">
                        <div className={playerClassForId + " sprite-player-fixed-size"} />
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
                    <DiceGrid
                        dice={props.dice}
                    />
                </div>
                <div className="flex-center-col">
                    <label className="center-text">Przedmioty</label>
                    <PlayerItemsGrid
                        items={props.items}
                        addItem={setDisplayAddItemPopup}
                    />
                </div>
                <div className="flex-grow" />
                <div className="flex-row-end">
                    <button
                        className="btn-default"
                        onClick={props.onFightTabClick}>
                        Walcz!
                        </button>
                    <button
                        className="btn-default"
                        onClick={props.onEndTurnClick}>
                        Zakończ turę
                        </button>
                </div>
            </section>
        </>
    );
}

export default PlayerDataTab;