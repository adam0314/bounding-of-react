import React from "react";
import {connect} from "react-redux";
import utils from "../../utils/utils";

const AddItemPopup = props => {

    const chooseItem = item => {
        props.setUsed({
            itemId: item.id,
            playerId: props.playerId
        });
        props.closePopup();
    }

    return (
        <section className="flex-fill-center Popup" style={{ display: "flex" }}>
            <div className="flex-center-row">
                <button
                    className="btn-close btn-close-popup"
                    onClick={() => props.closePopup()} />
                <div className="add-items-container">
                    <div className="scroll-y">
                        {props.items.map((item, idx) => (
                            <button
                                className={`popup-item popup-item-button flex-column-center ${utils.getBgForItem(item)}`}
                                key={idx}
                                onClick={() => chooseItem(item)}>
                                {item.toString()}
                            </button>
                        ))}
                    </div>

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