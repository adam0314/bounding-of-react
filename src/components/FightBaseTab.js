import React from "react";
import EnemyGrid from "./grids/EnemyGrid";
import DiceGrid from "./grids/DiceGrid";
import _ from "lodash";

const FightBaseTab = props => {
    const [fightStarted, setFightStarted] = React.useState(false);

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
                        setFightStarted(true);
                    }} />
                <button
                    className="btn-back"
                    onClick={props.onBackClick} />
            </div>
        </>;

    const inFightTab =
        null;

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

export default FightBaseTab;