import { createStore } from "redux";
import consts from "../utils/consts";
import { ItemObj } from "../utils/classes";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_UNUSED":
            return state.map(item => 
                item.id === action.itemId ? { ...item, usedBy: 0 } : item)
        case "SET_USED":
            return state.map(item => 
                item.id === action.itemId ? { ...item, usedBy: action.usedBy } : item)
        default:
            return state;
    }
}

const store = createStore(reducer, consts.itemsList.map(x => new ItemObj(x)))

export default store;