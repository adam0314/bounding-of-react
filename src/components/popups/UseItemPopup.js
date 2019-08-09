import React from "react";
import utils from "../../utils/utils";
import { connect } from "react-redux";

const UseItemPopup = props => {


    return (
        <div className="popup-use-items">
            <div className="flex-column flex-fill-100pc">
                <div className={"sprite-player"+props.player+" flex-grow-2x sprite-center"}/>
                <div className="scroll-y flex-grow-3x">
                    {props.items.map((item, idx) => (
                        <button
                            className={`popup-item popup-item-button flex-column-center ${utils.getBgForItem(item)}`}
                            key={idx}
                            onClick={() => console.log(item)}>
                            {item.toString()}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsed: (value) => dispatch({
            type: "SET_USED",
            itemId: value.itemId,
            usedBy: value.playerId
        })
    }
};

export default connect(null, mapDispatchToProps)(UseItemPopup);