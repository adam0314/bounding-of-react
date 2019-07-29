import React from "react";
import {connect} from "react-redux";
import consts from "../utils/consts";

const AddItemPopup = props => {

    const getBgForItem = item => {
        switch (item.type) {
            case consts.itemTypes.dice:
                return "btn-item-dice";
            case consts.itemTypes.passive:
                return "btn-item-passive";
            case consts.itemTypes.consumable:
                return "btn-item-consumable";
            default:
                return "";
        }
    }

    const chooseItem = item => {
        props.setUsed({
            itemId: item.id,
            playerId: props.playerId
        });
        props.closePopup();
    }

    return (
        <section className="flex-fill-center Popup" style={{display: props.display}}>
            <div className="flex-center-row">
                <div className="add-items-container">
                    {props.items.map((item, idx) => (
                        <button
                            className={`item popup-item-button flex-column-center ${getBgForItem(item)}`}
                            key={idx}
                            onClick={() => chooseItem(item)}>
                            {item.toString()}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return { items: state.filter(item => item.usedBy === 0) };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsed: (value) => dispatch({
            type: "SET_USED",
            itemId: value.itemId,
            usedBy: value.playerId})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemPopup);