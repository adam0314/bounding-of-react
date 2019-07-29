const consts = {
    tabs: {
        startScreen: "startScreen",
        playerScreen: "playerData"
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
    itemsList: [
        {
            "id": 0,
            "name": "Drobniaki",
            "dice": ["2", "2", "2", "2", "2"],
            "type": "dice"
        },
        {
            "id": 1,
            "name": "Ying Yang",
            "dice": ["+6", "-6"],
            "type": "dice"
        },
        {
            "id": 2,
            "name": "Trojkat",
            "dice": ["3", "+3", "-3"],
            "type": "dice"
        },
        {
            "id": 3,
            "name": "RPG 101",
            "dice": ["20"],
            "type": "dice"
        },
        {
            "id": 4,
            "name": "Jednoreki bandyta",
            "dice": ["50", "-20", "-20"],
            "type": "dice"
        },
        {
            "id": 5,
            "name": "Szczescie",
            "dice": ["+7", "+3"],
            "type": "dice"
        },
        {
            "id": 6,
            "name": "Pech",
            "dice": ["-6", "-4"],
            "type": "dice"
        },
        {
            "id": 7,
            "name": "Piwko",
            "dice": ["18"],
            "type": "dice"
        },
        {
            "id": 8,
            "name": "Kasztan",
            "dice": ["+10", "-5"],
            "type": "dice"
        },
        {
            "id": 9,
            "name": "Sciaga",
            "dice": ["-10", "+5"],
            "type": "dice"
        },
        {
            "id": 10,
            "name": "Kupione lajki",
            "effect": "Kazdy parzysty rzut +1",
            "type": "passive"
        },
        {
            "id": 11,
            "name": "Pozytywna reforma",
            "effect": "Kazdy nieparzysty rzut -1",
            "type": "passive"
        },
        {
            "id": 12,
            "name": "W kupie sila",
            "effect": "Kazdy rzut k6 zamieniany na 3k2",
            "type": "passive"
        },
        {
            "id": 13,
            "name": "Loteria",
            "effect": "Jesli suma rzutu parzysta, podwajamy, jesli nie, polowimy",
            "type": "passive"
        },
        {
            "id": 14,
            "name": "Sztuczka z moneta",
            "effect": "Kazdy rzut k2 pomnoz przez 2",
            "type": "passive"
        },
        {
            "id": 15,
            "name": "Jestes zwyciezca",
            "effect": "Wartosc bezwzgledna z rzutu",
            "type": "consumable"
        },
        {
            "id": 16,
            "name": "Punkt widzenia",
            "effect": "Wynik mnozony przez -1",
            "type": "consumable"
        },
        {
            "id": 17,
            "name": "All in",
            "effect": "Odrzuc wynik, zsumuj kosci, i rzuc suma",
            "type": "consumable"
        },
        {
            "id": 18,
            "name": "Duzo promili",
            "effect": "Nie tracisz HP za przegranie tej walki",
            "type": "consumable"
        },
        {
            "id": 19,
            "name": "500+",
            "effect": "Wygrana walka daje 1 monete",
            "type": "passive"
        },
        {
            "id": 20,
            "name": "Wytrych",
            "effect": "Dziala jak klucz",
            "type": "consumable",
            "usable_in_fight": false
        },
        {
            "id": 21,
            "name": "Plaster",
            "effect": "Przywraca 1 HP",
            "type": "consumable",
            "usable_in_fight": false
        }
    ]	
}

export default consts;