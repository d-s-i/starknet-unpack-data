import BN from "bn.js";
import { BigNumber, BigNumberish } from "ethers";
import { CostPacked, Troop, TroopExtended } from "../types";
import { StringMap } from "../types";
export declare class Unpacker {
    static SHIFT: BigNumber;
    static PRIME: BigNumber;
    constructor();
    unpackData(data: BigNumberish, index: BigNumberish, mask_size: BigNumberish): BigNumber;
    transformCostToToken(costs: CostPacked[], quantityMultiplier: BigNumberish, options?: {
        resourcesAsNames?: boolean;
    }): {
        Wood?: BigNumber | undefined;
        Stone?: BigNumber | undefined;
        Coal?: BigNumber | undefined;
        Copper?: BigNumber | undefined;
        Obsidian?: BigNumber | undefined;
        Silver?: BigNumber | undefined;
        Ironwood?: BigNumber | undefined;
        ColdIron?: BigNumber | undefined;
        Gold?: BigNumber | undefined;
        Hartwood?: BigNumber | undefined;
        Diamonds?: BigNumber | undefined;
        Sapphire?: BigNumber | undefined;
        Ruby?: BigNumber | undefined;
        DeepCrystal?: BigNumber | undefined;
        Ignium?: BigNumber | undefined;
        EtherealSilica?: BigNumber | undefined;
        TrueIce?: BigNumber | undefined;
        TwilightQuartz?: BigNumber | undefined;
        AlchemicalSilver?: BigNumber | undefined;
        Adamantine?: BigNumber | undefined;
        Mithral?: BigNumber | undefined;
        Dragonhide?: BigNumber | undefined;
        Wheat?: BigNumber | undefined;
        Fish?: BigNumber | undefined;
    } | {
        1?: BigNumber | undefined;
        2?: BigNumber | undefined;
        3?: BigNumber | undefined;
        4?: BigNumber | undefined;
        5?: BigNumber | undefined;
        6?: BigNumber | undefined;
        7?: BigNumber | undefined;
        8?: BigNumber | undefined;
        9?: BigNumber | undefined;
        10?: BigNumber | undefined;
        11?: BigNumber | undefined;
        12?: BigNumber | undefined;
        13?: BigNumber | undefined;
        20?: BigNumber | undefined;
        14?: BigNumber | undefined;
        15?: BigNumber | undefined;
        16?: BigNumber | undefined;
        17?: BigNumber | undefined;
        18?: BigNumber | undefined;
        19?: BigNumber | undefined;
        21?: BigNumber | undefined;
        22?: BigNumber | undefined;
        10000?: BigNumber | undefined;
        10001?: BigNumber | undefined;
    };
    _loadResourcesIdsAndValuesFromCost(ids: BigNumber[], values: BigNumber[], costsLength: number, costs: CostPacked[], cummulativeResourceCount: number): any;
    _loadSingleCostIdsAndValues(cost: CostPacked, idx: number, ids: BigNumber[], values: BigNumber[]): {
        ids: BigNumber[];
        values: BigNumber[];
    };
    unpackSquad(packedSquad: BigNumber | BN): StringMap;
    unpackTroop(packedTroop: BigNumber | BN): TroopExtended | Troop;
    /**
     * @notice Splits the given (unsigned) value into n "limbs", where each limb is in the range [0, bound),
     * as follow: value = x[0] + x[1] * base + x[2] * base**2 + ... + x[n - 1] * base**(n - 1)
     * bound must be less than the range check bound (2**128)
     * Assumptions:
     *   1 < bound <= base
     *   base**n < field characteristic.
     *
     * @param value - The integer value you want to split
     * @param n - The amount in which you want to split the value (check how the value was packed first)
     * @param base - Idk
     * @param bound - idk
     * @param output - The array you want to store the output in (need to be passed to stack recursively)
     * @returns
     */
    _splitInt(value: BigNumber, n: number, base: BigNumber, bound: BigNumber, output: BigNumber[]): BigNumber[];
    _toBigNumber(num: BigNumber | BN): BigNumber;
    _populateCostWithResourceName(ids: BigNumber[], values: BigNumber[], quantityMultiplier: BigNumberish): {
        Wood?: BigNumber | undefined;
        Stone?: BigNumber | undefined;
        Coal?: BigNumber | undefined;
        Copper?: BigNumber | undefined;
        Obsidian?: BigNumber | undefined;
        Silver?: BigNumber | undefined;
        Ironwood?: BigNumber | undefined;
        ColdIron?: BigNumber | undefined;
        Gold?: BigNumber | undefined;
        Hartwood?: BigNumber | undefined;
        Diamonds?: BigNumber | undefined;
        Sapphire?: BigNumber | undefined;
        Ruby?: BigNumber | undefined;
        DeepCrystal?: BigNumber | undefined;
        Ignium?: BigNumber | undefined;
        EtherealSilica?: BigNumber | undefined;
        TrueIce?: BigNumber | undefined;
        TwilightQuartz?: BigNumber | undefined;
        AlchemicalSilver?: BigNumber | undefined;
        Adamantine?: BigNumber | undefined;
        Mithral?: BigNumber | undefined;
        Dragonhide?: BigNumber | undefined;
        Wheat?: BigNumber | undefined;
        Fish?: BigNumber | undefined;
    };
    _populateCostWithResourceIds(ids: BigNumber[], values: BigNumber[], quantityMultiplier: BigNumberish): {
        1?: BigNumber | undefined;
        2?: BigNumber | undefined;
        3?: BigNumber | undefined;
        4?: BigNumber | undefined;
        5?: BigNumber | undefined;
        6?: BigNumber | undefined;
        7?: BigNumber | undefined;
        8?: BigNumber | undefined;
        9?: BigNumber | undefined;
        10?: BigNumber | undefined;
        11?: BigNumber | undefined;
        12?: BigNumber | undefined;
        13?: BigNumber | undefined;
        20?: BigNumber | undefined;
        14?: BigNumber | undefined;
        15?: BigNumber | undefined;
        16?: BigNumber | undefined;
        17?: BigNumber | undefined;
        18?: BigNumber | undefined;
        19?: BigNumber | undefined;
        21?: BigNumber | undefined;
        22?: BigNumber | undefined;
        10000?: BigNumber | undefined;
        10001?: BigNumber | undefined;
    };
}
//# sourceMappingURL=Unpacker.d.ts.map