import utils from "./utils";

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
                this.sign = utils.sign.positive;
                this.value = Number(value.slice(1));
                break;
            case "-":
                this.signChar = "-";
                this.sign = utils.sign.negative;
                this.value = Number(value.slice(1));
                break;
            default:
                this.signChar = "";
                this.sign = utils.sign.neutral;
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