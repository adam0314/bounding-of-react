import { createStore } from "redux";
import { items } from "../utils/lists";

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

const store = createStore(reducer, items)

export default store;