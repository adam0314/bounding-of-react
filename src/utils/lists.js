import consts from "./consts";
import { ItemObj, EnemyObj } from "./classes";

export const lists = {
    itemsList: [
        {
            id: 0,
            name: "Drobniaki",
            dice: ["2", "2", "2", "2", "2"],
            type: consts.itemTypes.dice
        },
        {
            id: 1,
            name: "Ying Yang",
            dice: ["+6", "-6"],
            type: consts.itemTypes.dice
        },
        {
            id: 2,
            name: "Trójkat",
            dice: ["3", "+3", "-3"],
            type: consts.itemTypes.dice
        },
        {
            id: 3,
            name: "RPG 101",
            dice: ["20"],
            type: consts.itemTypes.dice
        },
        {
            id: 4,
            name: "Jednoręki bandyta",
            dice: ["50", "-20", "-20"],
            type: consts.itemTypes.dice
        },
        {
            id: 5,
            name: "Szczęście",
            dice: ["+7", "+3"],
            type: consts.itemTypes.dice
        },
        {
            id: 6,
            name: "Pech",
            dice: ["-6", "-4"],
            type: consts.itemTypes.dice
        },
        {
            id: 7,
            name: "Piwko",
            dice: ["18"],
            type: consts.itemTypes.dice
        },
        {
            id: 8,
            name: "Kasztan",
            dice: ["+10", "-5"],
            type: consts.itemTypes.dice
        },
        {
            id: 9,
            name: "Sciąga",
            dice: ["-10", "+5"],
            type: consts.itemTypes.dice
        },
        {
            id: 10,
            name: "Kupione lajki",
            effect: "Kazdy parzysty rzut +1",
            type: consts.itemTypes.passive
        },
        {
            id: 11,
            name: "Pozytywna reforma",
            effect: "Kazdy nieparzysty rzut -1",
            type: consts.itemTypes.passive
        },
        {
            id: 12,
            name: "W kupie siła",
            effect: "Kazdy rzut k6 zamieniany na 3k2",
            type: consts.itemTypes.passive
        },
        {
            id: 13,
            name: "Loteria",
            effect: "Jesli suma rzutu parzysta, podwajamy, jesli nie, polowimy",
            type: consts.itemTypes.passive
        },
        {
            id: 14,
            name: "Sztuczka z monetą",
            effect: "Kazdy rzut k2 pomnoz przez 2",
            type: consts.itemTypes.passive
        },
        {
            id: 15,
            name: "Jesteś zwyciezcą",
            effect: "Wartosc bezwzgledna z rzutu",
            type: consts.itemTypes.consumable
        },
        {
            id: 16,
            name: "Punkt widzenia",
            effect: "Wynik mnozony przez -1",
            type: consts.itemTypes.consumable
        },
        {
            id: 17,
            name: "All in",
            effect: "Odrzuc wynik, zsumuj kosci, i rzuc suma",
            type: consts.itemTypes.consumable
        },
        {
            id: 18,
            name: "Dużo promili",
            effect: "Nie tracisz HP za przegranie tej walki",
            type: consts.itemTypes.consumable
        },
        {
            id: 19,
            name: "500+",
            effect: "Wygrana walka daje 1 monete",
            type: consts.itemTypes.passive
        },
        {
            id: 20,
            name: "Wytrych",
            effect: "Dziala jak klucz",
            type: consts.itemTypes.consumable,
            usableInFight: false
        },
        {
            id: 21,
            name: "Plaster",
            effect: "Przywraca 1 HP",
            type: consts.itemTypes.consumable,
            usableInFight: false
        }
    ],
    enemiesList: [
        {
            id: 0,
            name: "Moneciarz",
            dice: ["2", "2", "2", "2", "2"],
            sign: consts.sign.neutral,
            diceAllowed: [consts.sign.neutral, consts.sign.positive],
            type: consts.enemyTypes.normal
        },
        {
            id: 1,
            name: "Krzywooki",
            dice: ["20", "-3"],
            sign: consts.sign.neutral,
            diceAllowed: [consts.sign.neutral, consts.sign.positive, consts.sign.negative],
            type: consts.enemyTypes.normal
        },
        {
            id: 2,
            name: "Błyskotek",
            dice: ["6", "6", "+3", "+3"],
            sign: consts.sign.neutral,
            diceAllowed: [consts.sign.neutral, consts.sign.positive],
            type: consts.enemyTypes.normal
        },
        {
            id: 3,
            name: "Deszczowiec",
            dice: ["-7"],
            sign: consts.sign.negative,
            diceAllowed: [consts.sign.negative],
            type: consts.enemyTypes.normal
        },
        {
            id: 4,
            name: "Taplacz",
            dice: ["3", "3", "3", "-10", "-10"],
            sign: consts.sign.negative,
            diceAllowed: [consts.sign.negative, consts.sign.positive],
            type: consts.enemyTypes.normal
        },
        {
            id: 5,
            name: "Złotoskrzydły",
            dice: ["+6", "+6"],
            sign: consts.sign.positive,
            diceAllowed: [consts.sign.negative, consts.sign.positive],
            type: consts.enemyTypes.normal
        },
        {
            id: 6,
            name: "Czteroskrzydły",
            dice: ["5", "5", "5", "5"],
            sign: consts.sign.neutral,
            diceAllowed: [consts.sign.neutral],
            type: consts.enemyTypes.normal
        },
        {
            id: 7,
            name: "Kolekcjoner",
            dice: ["2", "3", "4", "5", "6"],
            sign: consts.sign.neutral,
            diceAllowed: [consts.sign.neutral, consts.sign.positive, consts.sign.negative],
            type: consts.enemyTypes.normal
        },
        {
            id: 101,
            name: "Władca much",
            dice: ["15", "15"],
            dicePhase2: ["10", "+2", "+2", "+2", "+2", "+2"],
            dicePhase3: ["40", "-20"],
            sign: consts.sign.neutral,
            diceAllowed: [consts.sign.neutral, consts.sign.positive, consts.sign.negative],
            type: consts.enemyTypes.boss
        }
    ]
}

export const items = lists.itemsList.map(x => new ItemObj(x));
export const enemies = lists.enemiesList.map(x => new EnemyObj(x));

export default lists;