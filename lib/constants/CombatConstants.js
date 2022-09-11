"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombatConstants = void 0;
const BuildingsConstants_1 = require("./BuildingsConstants");
class CombatConstants {
}
exports.CombatConstants = CombatConstants;
/**
 * @dev - Values coming from https://github.com/BibliothecaForAdventurers/realms-contracts/blob/main/contracts/settling_game/utils/game_structs.cairo::TroopId
 */
CombatConstants.TROOPS_NAMES_TO_IDS = {
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
};
CombatConstants.TROOPS_IDS_TO_NAMES = {
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
};
CombatConstants.ALL_TROOPS_IDS = [
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
];
/**
 * @dev - Values coming from https://github.com/BibliothecaForAdventurers/realms-contracts/blob/main/contracts/settling_game/L06_Combat.cairo
 */
CombatConstants.TROOPS_SLOTS = {
    "attacking": 1,
    "defending": 2
};
CombatConstants.ATTACK_TYPES = {
    "COMBAT_TYPE_ATTACK_VS_DEFENSE": 1,
    "COMBAT_TYPE_WISDOM_VS_AGILITY": 2
};
CombatConstants.TROOPS_TYPES = {
    "RangedNormal": 1,
    "RangedMagic": 2,
    "Melee": 3,
    "Siege": 4
};
CombatConstants.TROOPS_PROPS = {
    Type: {
        "Skirmisher": CombatConstants.TROOPS_TYPES.RangedNormal,
        "Longbow": CombatConstants.TROOPS_TYPES.RangedNormal,
        "Crossbow": CombatConstants.TROOPS_TYPES.RangedNormal,
        "Pikeman": CombatConstants.TROOPS_TYPES.Melee,
        "Knight": CombatConstants.TROOPS_TYPES.Melee,
        "Paladin": CombatConstants.TROOPS_TYPES.Melee,
        "Ballista": CombatConstants.TROOPS_TYPES.Siege,
        "Mangonel": CombatConstants.TROOPS_TYPES.Siege,
        "Trebuchet": CombatConstants.TROOPS_TYPES.Siege,
        "Apprentice": CombatConstants.TROOPS_TYPES.RangedMagic,
        "Mage": CombatConstants.TROOPS_TYPES.RangedMagic,
        "Arcanist": CombatConstants.TROOPS_TYPES.RangedMagic,
        "Goblin": CombatConstants.TROOPS_TYPES.Melee,
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
    Buildings: {
        "Skirmisher": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.ArcherTower,
        "Longbow": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.ArcherTower,
        "Crossbow": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.ArcherTower,
        "Pikeman": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.Barracks,
        "Knight": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.Barracks,
        "Paladin": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.Barracks,
        "Ballista": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.Castle,
        "Mangonel": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.Castle,
        "Trebuchet": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.Castle,
        "Apprentice": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.MageTower,
        "Mage": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.MageTower,
        "Arcanist": BuildingsConstants_1.BuildingsContants.BUILDINGS_NAMES_TO_IDS.MageTower,
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
};
//# sourceMappingURL=CombatConstants.js.map