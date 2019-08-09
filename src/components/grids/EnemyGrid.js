import React from "react";
import ChooseEnemyPopup from "../popups/ChooseEnemyPopup";
import _ from "lodash";
import consts from "../../utils/consts";

const EnemyGrid = props => {
    const [showPopup, setShowPopup] = React.useState(false);
    const [sprites, setSprites] = React.useState({
        enemy: "sprite-enemy-token",
        name: "Wybierz wroga",
        diceAllowed: "sprite-allowed-dice-02",
        enemySign: "sprite-heart-empty"
    }); // [enemy-sprite, enemy-name (not a sprite actually), enemy-allowed-dice, enemy-sign (heart)]

    React.useEffect(() => {
        console.log("[EnemyGrid.js] effect loaded, sprites set");
        if (_.isEmpty(props.enemy)) {
            setSprites({
                enemy: "sprite-enemy-token",
                name: "Wybierz wroga",
                diceAllowed: "sprite-allowed-dice-02",
                enemySign: "sprite-heart-empty"
            });
        } else {
            setSprites({
                enemy: "sprite-enemy-" + ("000" + props.enemy.id).slice(-3),
                name: props.enemy.name,
                diceAllowed: "sprite-allowed-dice-" + props.enemy.getStringForAllowedDiceSprite(),
                enemySign: (() => {
                    switch (props.enemy.sign) {
                        case consts.sign.positive:
                            return "sprite-heart-orange";
                        case consts.sign.negative:
                            return "sprite-heart-blue";
                        default:
                            return "sprite-heart-red";
                    }
                })()
            });
        }
        return () => {
            console.log("[EnemyGrid.js] clearing effect hook");
        }
    }, [props.enemy]);

    const toggleShowPopup = () => {
        setShowPopup(!showPopup);
    }
    const chooseEnemy = enemy => {
        props.onEnemyChosen(enemy);
        toggleShowPopup();
    }

    return (
        <>
            <div className="enemy-container">
                <div className="flex-grow flex-row">
                    <div className="flex-grow-2x flex-column">
                        <div
                            className={"flex-grow " + sprites.enemy} />
                        <div className="enemy-name">
                            {sprites.name}
                        </div>
                    </div>
                    <div className="flex-grow flex-column">
                        <div
                            className={"flex-grow " + sprites.diceAllowed}/>
                        <div
                            className={"flex-grow " + sprites.enemySign}/>
                    </div>
                </div>
                <div className="enemy-dropdown-cntr">
                    <button
                        className={"btn-dropdown " + (showPopup ? "btn-dropdown-rotate-180" : "")}
                        onClick={() => toggleShowPopup()}>
                    </button>
                    {showPopup ?
                        <ChooseEnemyPopup
                            onEnemyChosen={chooseEnemy}/>
                        : null}
                </div>
            </div>
        </>
    );
}

export default EnemyGrid;