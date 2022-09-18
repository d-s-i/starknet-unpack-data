export class BuildingsContants {

    static BUILDINGS_NAMES_TO_IDS = {
        "House": 1,
        "StoreHouse": 2,
        "Granary": 3,
        "Farm": 4,
        "FishingVillage": 5,
        "Barracks": 6,
        "MageTower": 7,
        "ArcherTower": 8,
        "Castle": 9
    } as const;

    static BUILDINGS_IDS_TO_NAMES = {
        1: "House",
        2: "StoreHouse",
        3: "Granary",
        4: "Farm",
        5: "FishingVillage",
        6: "Barracks",
        7: "MageTower",
        8: "ArcherTower",
        9: "Castle"
    } as const;
    
    static ALL_BUILDINGS = [
        "House",
        "StoreHouse",
        "Granary",
        "Farm",
        "FishingVillage",
        "Barracks",
        "MageTower",
        "ArcherTower",
        "Castle"
    ] as const;

    static ALL_BUILDINGS_IDS = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ] as const;
}