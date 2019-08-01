import React from "react";
import EnemyGrid from "./grids/EnemyGrid";
import DiceGrid from "./grids/DiceGrid";
import _ from "lodash";

const FightBaseTab = props => {
    return (
        <section className="flex-fill-space-even">
            <div className="flex-center-row">
                <EnemyGrid
                    enemy={props.enemy}
                    onEnemyChosen={props.onEnemyChosen}/>
            </div>
            <div className="flex-center-col">
                <label className="center-text">Kości wroga</label>
                <DiceGrid
                    dice={_.isEmpty(props.enemy) ? [] : props.enemy.dice}/>
            </div>
            <div className="flex-row-space-even">
                <button
                    className="btn-fight"
                    onClick={() => console.log("start fight")}/>
                <button
                    className="btn-back"
                    onClick={props.onBackClick}/>
            </div>
        </section>
    )
}

export default FightBaseTab;