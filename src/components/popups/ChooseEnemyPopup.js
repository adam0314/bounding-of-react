import React from "react";
import { enemies } from "../../utils/lists";

const ChooseEnemyPopup = props => {
    return (
        <div className="popup-enemy-dropdown">
            <div className="scroll-y flex-column">
                {enemies.map((enm, idx) => (
                    <button
                        key={idx}
                        className={"btn-no-bg btn-select-enemy sprite-enemy-" + ("000" + enm.id).slice(-3)}
                        onClick={() => props.onEnemyChosen(enm)}>
                            {enm.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ChooseEnemyPopup;