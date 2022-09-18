export declare class CombatConstants {
    /**
     * @dev - Values coming from https://github.com/BibliothecaForAdventurers/realms-contracts/blob/main/contracts/settling_game/utils/game_structs.cairo::TroopId
     */
    static TROOPS_NAMES_TO_IDS: {
        readonly Skirmisher: 1;
        readonly Longbow: 2;
        readonly Crossbow: 3;
        readonly Pikeman: 4;
        readonly Knight: 5;
        readonly Paladin: 6;
        readonly Ballista: 7;
        readonly Mangonel: 8;
        readonly Trebuchet: 9;
        readonly Apprentice: 10;
        readonly Mage: 11;
        readonly Arcanist: 12;
        readonly Goblin: 13;
    };
    static TROOPS_IDS_TO_NAMES: {
        readonly 1: "Skirmisher";
        readonly 2: "Longbow";
        readonly 3: "Crossbow";
        readonly 4: "Pikeman";
        readonly 5: "Knight";
        readonly 6: "Paladin";
        readonly 7: "Ballista";
        readonly 8: "Mangonel";
        readonly 9: "Trebuchet";
        readonly 10: "Apprentice";
        readonly 11: "Mage";
        readonly 12: "Arcanist";
        readonly 13: "Goblin";
    };
    static ALL_TROOPS_IDS: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    /**
     * @dev - Values coming from https://github.com/BibliothecaForAdventurers/realms-contracts/blob/main/contracts/settling_game/L06_Combat.cairo
     */
    static TROOPS_SLOTS: {
        readonly attacking: 1;
        readonly defending: 2;
    };
    static ATTACK_TYPES: {
        readonly COMBAT_TYPE_ATTACK_VS_DEFENSE: 1;
        readonly COMBAT_TYPE_WISDOM_VS_AGILITY: 2;
    };
    static TROOPS_TYPES_NAMES_TO_IDS: {
        readonly RangedNormal: 1;
        readonly RangedMagic: 2;
        readonly Melee: 3;
        readonly Siege: 4;
    };
    static TROOPS_TYPES_IDS_TO_NAMES: {
        readonly 1: "RangedNormal";
        readonly 2: "RangedMagic";
        readonly 3: "Melee";
        readonly 4: "Siege";
    };
    static TROOPS_PROPS: {
        readonly Type: {
            readonly Skirmisher: 1;
            readonly Longbow: 1;
            readonly Crossbow: 1;
            readonly Pikeman: 3;
            readonly Knight: 3;
            readonly Paladin: 3;
            readonly Ballista: 4;
            readonly Mangonel: 4;
            readonly Trebuchet: 4;
            readonly Apprentice: 2;
            readonly Mage: 2;
            readonly Arcanist: 2;
            readonly Goblin: 3;
        };
        readonly Tier: {
            readonly Skirmisher: 1;
            readonly Longbow: 2;
            readonly Crossbow: 3;
            readonly Pikeman: 1;
            readonly Knight: 2;
            readonly Paladin: 3;
            readonly Ballista: 1;
            readonly Mangonel: 2;
            readonly Trebuchet: 3;
            readonly Apprentice: 1;
            readonly Mage: 2;
            readonly Arcanist: 3;
            readonly Goblin: 1;
        };
        readonly Building: {
            readonly Skirmisher: 8;
            readonly Longbow: 8;
            readonly Crossbow: 8;
            readonly Pikeman: 6;
            readonly Knight: 6;
            readonly Paladin: 6;
            readonly Ballista: 9;
            readonly Mangonel: 9;
            readonly Trebuchet: 9;
            readonly Apprentice: 7;
            readonly Mage: 7;
            readonly Arcanist: 7;
            readonly Goblin: 0;
        };
        readonly Agility: {
            readonly Skirmisher: 8;
            readonly Longbow: 10;
            readonly Crossbow: 12;
            readonly Pikeman: 2;
            readonly Knight: 3;
            readonly Paladin: 4;
            readonly Ballista: 5;
            readonly Mangonel: 3;
            readonly Trebuchet: 4;
            readonly Apprentice: 6;
            readonly Mage: 8;
            readonly Arcanist: 10;
            readonly Goblin: 3;
        };
        readonly Attack: {
            readonly Skirmisher: 6;
            readonly Longbow: 8;
            readonly Crossbow: 10;
            readonly Pikeman: 6;
            readonly Knight: 8;
            readonly Paladin: 10;
            readonly Ballista: 8;
            readonly Mangonel: 10;
            readonly Trebuchet: 12;
            readonly Apprentice: 6;
            readonly Mage: 8;
            readonly Arcanist: 10;
            readonly Goblin: 8;
        };
        readonly Armor: {
            readonly Skirmisher: 2;
            readonly Longbow: 3;
            readonly Crossbow: 4;
            readonly Pikeman: 4;
            readonly Knight: 6;
            readonly Paladin: 8;
            readonly Ballista: 2;
            readonly Mangonel: 3;
            readonly Trebuchet: 4;
            readonly Apprentice: 2;
            readonly Mage: 3;
            readonly Arcanist: 4;
            readonly Goblin: 2;
        };
        readonly Vitality: {
            readonly Skirmisher: 30;
            readonly Longbow: 40;
            readonly Crossbow: 60;
            readonly Pikeman: 30;
            readonly Knight: 60;
            readonly Paladin: 80;
            readonly Ballista: 30;
            readonly Mangonel: 50;
            readonly Trebuchet: 70;
            readonly Apprentice: 40;
            readonly Mage: 50;
            readonly Arcanist: 80;
            readonly Goblin: 20;
        };
        readonly Widsom: {
            readonly Skirmisher: 3;
            readonly Longbow: 4;
            readonly Crossbow: 4;
            readonly Pikeman: 4;
            readonly Knight: 6;
            readonly Paladin: 8;
            readonly Ballista: 2;
            readonly Mangonel: 3;
            readonly Trebuchet: 4;
            readonly Apprentice: 6;
            readonly Mage: 8;
            readonly Arcanist: 10;
            readonly Goblin: 1;
        };
    };
}
//# sourceMappingURL=CombatConstants.d.ts.map