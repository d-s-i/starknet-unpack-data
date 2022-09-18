export class CombatConstants {

    /**
     * @dev - Values coming from https://github.com/BibliothecaForAdventurers/realms-contracts/blob/main/contracts/settling_game/utils/game_structs.cairo::TroopId
     */
    static TROOPS_NAMES_TO_IDS = {
        "Skirmisher": 1,
        "Longbow": 2,
        "Crossbow": 3,
        "Pikeman": 4,
        "Knight": 5,
        "Paladin": 6,
        "Ballista": 7,
        "Mangonel": 8,
        "Trebuchet": 9,
        "Apprentice": 10,
        "Mage": 11,
        "Arcanist": 12,
        "Goblin": 13
    } as const;

    static TROOPS_IDS_TO_NAMES = {
        1: "Skirmisher",
        2: "Longbow",
        3: "Crossbow",
        4: "Pikeman",
        5: "Knight",
        6: "Paladin",
        7: "Ballista",
        8: "Mangonel",
        9: "Trebuchet",
        10: "Apprentice",
        11: "Mage",
        12: "Arcanist",
        13: "Goblin"
    } as const;

    static ALL_TROOPS_IDS = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13
    ] as const;

    /**
     * @dev - Values coming from https://github.com/BibliothecaForAdventurers/realms-contracts/blob/main/contracts/settling_game/L06_Combat.cairo
     */
    static TROOPS_SLOTS = {
        "attacking": 1,
        "defending": 2
    } as const;

    static ATTACK_TYPES = {
        "COMBAT_TYPE_ATTACK_VS_DEFENSE": 1,
        "COMBAT_TYPE_WISDOM_VS_AGILITY": 2
    } as const;

    static TROOPS_TYPES_NAMES_TO_IDS = {
        "RangedNormal": 1,
        "RangedMagic": 2,
        "Melee": 3,
        "Siege": 4
    } as const;

    static TROOPS_TYPES_IDS_TO_NAMES = {
        1: "RangedNormal",
        2: "RangedMagic",
        3: "Melee",
        4: "Siege"
    } as const;

    static TROOPS_PROPS = {
        Type: {
            "Skirmisher": 1,
            "Longbow": 1,
            "Crossbow": 1,
            "Pikeman": 3,
            "Knight": 3,
            "Paladin": 3,
            "Ballista": 4,
            "Mangonel": 4,
            "Trebuchet": 4,
            "Apprentice": 2,
            "Mage": 2,
            "Arcanist": 2,
            "Goblin": 3,
        },
        Tier: {
            "Skirmisher": 1,
            "Longbow": 2,
            "Crossbow": 3,
            "Pikeman": 1,
            "Knight": 2,
            "Paladin": 3,
            "Ballista": 1,
            "Mangonel": 2,
            "Trebuchet": 3,
            "Apprentice": 1,
            "Mage": 2,
            "Arcanist": 3,
            "Goblin": 1
        },
        Building: {
            "Skirmisher": 8,
            "Longbow": 8,
            "Crossbow": 8,
            "Pikeman": 6,
            "Knight": 6,
            "Paladin": 6,
            "Ballista": 9,
            "Mangonel": 9,
            "Trebuchet": 9,
            "Apprentice": 7,
            "Mage": 7,
            "Arcanist": 7,
            "Goblin": 0
        },
        Agility: {
            "Skirmisher": 8,
            "Longbow": 10,
            "Crossbow": 12,
            "Pikeman": 2,
            "Knight": 3,
            "Paladin": 4,
            "Ballista": 5,
            "Mangonel": 3,
            "Trebuchet": 4,
            "Apprentice": 6,
            "Mage": 8,
            "Arcanist": 10,
            "Goblin": 3
        },
        Attack: {
            "Skirmisher": 6,
            "Longbow": 8,
            "Crossbow": 10,
            "Pikeman": 6,
            "Knight": 8,
            "Paladin": 10,
            "Ballista": 8,
            "Mangonel": 10,
            "Trebuchet": 12,
            "Apprentice": 6,
            "Mage": 8,
            "Arcanist": 10,
            "Goblin": 8
        },
        Armor: {
            "Skirmisher": 2,
            "Longbow": 3,
            "Crossbow": 4,
            "Pikeman": 4,
            "Knight": 6,
            "Paladin": 8,
            "Ballista": 2,
            "Mangonel": 3,
            "Trebuchet": 4,
            "Apprentice": 2,
            "Mage": 3,
            "Arcanist": 4,
            "Goblin": 2,
        },
        Vitality: {
            "Skirmisher": 30,
            "Longbow": 40,
            "Crossbow": 60,
            "Pikeman": 30,
            "Knight": 60,
            "Paladin": 80,
            "Ballista": 30,
            "Mangonel": 50,
            "Trebuchet": 70,
            "Apprentice": 40,
            "Mage": 50,
            "Arcanist": 80,
            "Goblin": 20
        },
        Widsom: {
            "Skirmisher": 3,
            "Longbow": 4,
            "Crossbow": 4,
            "Pikeman": 4,
            "Knight": 6,
            "Paladin": 8,
            "Ballista": 2,
            "Mangonel": 3,
            "Trebuchet": 4,
            "Apprentice": 6,
            "Mage": 8,
            "Arcanist": 10,
            "Goblin": 1
        }

    } as const;
}