import consts from "./consts";

const utils = {
    getPlayerNameForId: id => {
        return id === 1 ? "Smutny gracz" : "Wesoły gracz";
    },
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),
    get3RowsCountAndRemainder: (items) => {
        let itemCount = items.length;
        return [ Math.floor(itemCount / 3), itemCount % 3 ]
    },
    getBgForItem: item => {
        switch (item.type) {
            case consts.itemTypes.dice:
                return "sprite-dice";
            case consts.itemTypes.passive:
                return "sprite-passive";
            case consts.itemTypes.consumable:
                return "sprite-consumable";
            default:
                return "";
        }
    },
    getBgForDieSign: sign => {
        switch (sign) {
            case consts.sign.positive:
                return "sprite-die-pos";
            case consts.sign.neutral:
                return "sprite-die-neu";
            case consts.sign.negative:
                return "sprite-die-neg";
            default:
                return "";
        }
    }
    // getItemForId: id => {
    //     return
    // }
}

export default utils;