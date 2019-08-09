import { ThrowObj, DieObj } from "./classes";
import utils from "./utils";

const fightManager = {
    containsItem: (items, itemId) => {
        return (items.filter(item => item.id === itemId).length === 1) // exactly 1 item with given id
    },
    // containsItemId: (itemsIds, itemId) => {
    //     return (itemsIds.filter(itemIdd => itemIdd === itemId).length === 1) // exactly 1 item with given id
    // },
    applyItem10: (throws) => {
        const item10Eff = (thr, idx) => {
            return (idx % 2 === 1
                ? new ThrowObj({
                    dieVal: thr.dieVal,
                    dieThrow: thr.dieThrow + 1,
                    sign: thr.sign
                })
                : thr);
        }; // Each even throw +1
        return throws.map(item10Eff);
    },
    applyItem11: (throws) => {
        const item11Eff = (thr, idx) => {
            return (idx % 2 === 0
                ? new ThrowObj({
                    dieVal: thr.dieVal,
                    dieThrow: thr.dieThrow - 1,
                    sign: thr.sign
                })
                : thr);
        }; // Each odd throw -1
        return throws.map(item11Eff);
    },
    applyItem12: (throws) => {
        const item12Eff = (outArray, thr) => {
            if (thr.dieVal === 6 ){
                let newDice =["2", "2", "2"].map(val => new DieObj(utils.getStringSignForSign(thr.sign) + val));
                return Array.prototype.concat(outArray, utils.throwDice(newDice));
            } else {
                return [...outArray, thr];
            }
        }; // Each d6 throw converts to 3d2
        return throws.reduce(item12Eff, []);
    },
    applyItem14: (throws) => {
        const item14Eff = (thr) => {
            return (thr.dieVal === 2
                ? new ThrowObj({
                    dieVal: thr.dieVal,
                    dieThrow: thr.dieThrow * 2,
                    sign: thr.sign
                })
                : thr)
        }; // Each d2 throw multiplies by 2
        return throws.map(item14Eff);
    },

    applyPassivesExcept13: (items, initialThrows, setThrows) => {
        //debugger;
        let tempThrows = [...initialThrows];
        if (fightManager.containsItem(items, 12)) {
            tempThrows = fightManager.applyItem12(tempThrows);
        }
        if (fightManager.containsItem(items, 10)) {
            tempThrows = fightManager.applyItem10(tempThrows);
        }
        if (fightManager.containsItem(items, 11)) {
            tempThrows = fightManager.applyItem11(tempThrows);
        }
        if (fightManager.containsItem(items, 14)) {
            tempThrows = fightManager.applyItem14(tempThrows);
        }
        setThrows(tempThrows);
    },
    applyItem: (itemId, throws, setThrows) => {
        switch (itemId) {
            case 10:
                fightManager.applyItem10(throws, setThrows);
                return;
            default:
                return;
        }
    }
}

export default fightManager;