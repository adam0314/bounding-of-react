const consts = {
    gameStates: {
        prepared: "prepared",
        active: "active"
    },
    tabs: {
        playerData: "playerData",
        fightBase: "fightBase"
    },
    sign: {
        negative: "neg",
        neutral: "neu",
        positive: "pos"
    },
    itemTypes: {
        dice: "dice",
        passive: "passive",
        consumable: "consumable"
    },
    enemyTypes: {
        normal: "normal",
        boss: "boss",
        player: "player"
    },

    // Die chances and stuff
    diePerEnemyPower: 6, //has to be even
    dieMaxToAdd: 30, //this too
    dieMatchingTypeChance: 0.8
}

export default consts;