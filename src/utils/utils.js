const utils = {
    tabs: {
        startScreen: "startScreen",
        playerScreen: "playerData"
    },
    getPlayerNameForId: id => {
        return id === 1 ? "Smutny gracz" : "Wesoły gracz";
    },
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),
    sign: {
        negative: "neg",
        neutral: "neu",
        positive: "pos"
    }
}

export default utils;