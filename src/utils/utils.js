const utils = {
    getPlayerNameForId: id => {
        return id === 1 ? "Smutny gracz" : "Wesoły gracz";
    },
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i)
    // getItemForId: id => {
    //     return
    // }
}

export default utils;