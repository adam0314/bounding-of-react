const utils = {
    tabs: {
        startScreen: "startScreen",
        playerData: "playerData"
    },
    getPlayerNameForId: id => {
        return id === 1 ? "Smutny gracz" : "Wesoły gracz";
    },
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i)
}

export default utils;