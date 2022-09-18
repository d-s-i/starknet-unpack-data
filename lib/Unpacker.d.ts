import BN from "bn.js";
import { BigNumber, BigNumberish } from "ethers";
import { CostPacked, ResourceId, ResourceIdsMap, Squad, Troop } from "../types";
export declare class Unpacker {
    static SHIFT: BigNumber;
    static PRIME: BigNumber;
    static unpackData(data: BigNumberish, index: BigNumberish, mask_size: BigNumberish): BigNumber;
    static transformCostToToken(costs: CostPacked[], quantityMultiplier: BigNumberish): Partial<ResourceIdsMap<Partial<ResourceId>, BigNumber>>;
    static _loadResourcesIdsAndValuesFromCost(ids: BigNumber[], values: BigNumber[], costsLength: number, costs: CostPacked[], cummulativeResourceCount: number): {
        ids: BigNumber[];
        values: BigNumber[];
        cummulativeResourceCount: number;
    };
    static _loadSingleCostIdsAndValues(cost: CostPacked, idx: number, ids: BigNumber[], values: BigNumber[]): {
        ids: BigNumber[];
        values: BigNumber[];
    };
    static unpackSquad(packedSquad: BigNumber | BN): Squad<number> | {};
    static unpackTroop(packedTroop: BigNumber | BN): Troop<number>;
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
    static _splitInt(value: BigNumber, n: number, base: BigNumber, bound: BigNumber, output: BigNumber[]): BigNumber[];
    static _toBigNumber(num: BigNumber | BN): BigNumber;
    static _populateCostWithResourceIds(ids: BigNumber[], values: BigNumber[], quantityMultiplier: BigNumberish): Partial<ResourceIdsMap<Partial<string | number | symbol>, BigNumber>>;
}
//# sourceMappingURL=Unpacker.d.ts.map