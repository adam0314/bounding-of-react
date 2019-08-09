import consts from "./consts";
import { DieObj, ThrowObj } from "./classes";
import _ from "lodash";

const utils = {
    getPlayerNameForId: id => {
        return id === 1 ? "Smutny gracz" : "Wesoły gracz";
    },
    getStringSignForSign: sign => {
        switch (sign) {
            case consts.sign.positive:
                return "+";
            case consts.sign.negative:
                return "-";
            default:
                return "";
        }
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
    },

    createDiceForEnemyPowerAndSign: (enemyPower, sign) => {
        // Arguments: enemyPower (int), enemySign (enum, NOT symbol)
        // Returns an array of DiceObj's, with mostly matching sign
        if (enemyPower === 0) {
            return [];
        }
        console.log("buff enemy");
        let dice = [];
        let totalDieToAdd = enemyPower * consts.diePerEnemyPower;
        debugger;
        while (totalDieToAdd > 0) {
            let dieToAdd = _.sample(utils.range(1, Math.min(totalDieToAdd / 2, consts.dieMaxToAdd / 2)).map(x => x * 2));
            totalDieToAdd -= dieToAdd;
            dice = [...dice, new DieObj(utils.random.rollForDieSign(sign) + dieToAdd)]
        }
        return dice;
    },
    formatDieThrowToString: (dieThrow) => {
        return (dieThrow.sign === consts.sign.positive
            ? "+" + dieThrow.dieThrow
            : "" + dieThrow.dieThrow);
    },
    getColorCssForSign: sign => {
        switch (sign) {
            case consts.sign.negative:
                return "text-blue";
            case consts.sign.positive:
                return "text-orange";
            default:
                return "text-grey";
        }
    },
    throwDice: dice => {
        return dice.map(die => (new ThrowObj({
            dieVal: die.value,
            dieThrow: die.throwDie(),
            sign: die.sign
        })))
    },
    getPassivesItemsId: items => {
        return items.filter(item => item.type === consts.itemTypes.passive).map(item => item.id);
    },

    random: {
        rollForDieSign: sign => {
            // Returns symbol, not enum
            if (Math.random() < consts.dieMatchingTypeChance) {
                // Returns matching sign with above chance
                return utils.getStringSignForSign(sign);
            } else {
                // Returns random other sign
                let filteredSignsArray = Object.values(consts.sign).filter(x => x !== sign);
                return utils.getStringSignForSign(_.sample(filteredSignsArray));
            }
        }
    }
}

export default utils;