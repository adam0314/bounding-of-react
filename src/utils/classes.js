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
        this.dice = [];
        this.enemyPower = 0;
        //todo
    }
}