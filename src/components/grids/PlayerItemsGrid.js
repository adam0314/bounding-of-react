import React from "react";
import utils from "../../utils/utils";

const PlayerItemsGrid = props => {

    // let [rowsCount, itemsInLastRow] = utils.get3RowsCountAndRemainder(props.items);

    // const lastRow = rowNo => {
    //     return rowsCount === rowNo;
    // }

    return (
        <>
            <div className="item-buttons-ctnr">
                <button
                    className="btn-add-item"
                    onClick={() => props.addItem(true)}>
                </button>
                <button
                    className="btn-remove-item"
                    onClick={() => props.addItem(true)}>
                </button>
            </div>
            <div className="items-container">
                <div className="scroll-y flex-row-wrap">
                    {props.items.map((item, idx) => (
                        <div
                            className={"item flex-column-thirds " + utils.getBgForItem(item)}
                            key={idx}>
                            {item.toString()}
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default PlayerItemsGrid;