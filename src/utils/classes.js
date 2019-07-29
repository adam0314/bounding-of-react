import consts from "./consts";
import _ from "lodash";

export class PlayerObj {
    constructor(id = 0){
        this.id = id;
        switch (id) {
            case 1:
                this.name = "Smutny gracz";
                break;
            case 2:
                this.name = "Wesoły gracz";
                break;
            default:
                this.name = "WTF";
                break;
        }
        this.hp = 3;
        this.items = [];
        this.dice = [
            new DieObj("+6"),
            new DieObj("+6"),
            new DieObj("+6")
        ];
        this.enemyPower = 0;
        this.maxHp = 3;
        //todo
    }
}

export class DieObj {
    constructor(value, itemId = -1){
        let firstChar = value.substring(0, 1);
        switch (firstChar) {
            case "+":
                this.signChar = "+";
                this.sign = consts.sign.positive;
                this.value = Number(value.slice(1));
                break;
            case "-":
                this.signChar = "-";
                this.sign = consts.sign.negative;
                this.value = Number(value.slice(1));
                break;
            default:
                this.signChar = "";
                this.sign = consts.sign.neutral;
                this.value = Number(value);
                break;
        }
        if (itemId > -1){
            this.itemId = itemId;
        }
    }

    toString = () => {
        return this.signChar + this.value;
    }	
}

export class ItemObj {
    constructor(value) {
        this.id = value.id;
        this.name = value.name;
        this.type = value.type;
        if (this.type !== consts.itemTypes.dice) {
            this.effect = value.effect;
        } else {
            this.effect = value.dice.reduce((prev, curr) => prev + curr + " ", 0);
            this.dice = value.dice.map(x => new DieObj(x));
        }
        if (_.has(value, "usable_in_fight")) {
            this.usable_in_fight = value.usable_in_fight;
        } else {
            this.usable_in_fight = true;
        }

        this.usedBy = 0;
    }

    toString = () => {
        return this.name;
    }
}