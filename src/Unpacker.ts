import BN from "bn.js";
import { BigNumber, BigNumberish } from "ethers";
import { CombatConstants } from "./constants/CombatConstants";
import { CostPacked, ResourceId, ResourceIdsMap, Squad, Troop, TroopId, TroopName } from "../types";

export class Unpacker {
    
    static SHIFT = BigNumber.from(0x100);
    static PRIME = BigNumber.from(BigInt(2**251)).add(BigNumber.from(17).mul(BigInt(2**192)).add(1));
    
    static unpackData(data: BigNumberish, index: BigNumberish, mask_size: BigNumberish) {

        const power = BigNumber.from(2).pow(index);
        const mask = BigNumber.from(mask_size).mul(power);
        const masked = mask.toBigInt() & BigNumber.from(data).toBigInt();

        const remainder = BigNumber.from(masked).mod(power);
        const quotient = (BigNumber.from(masked).sub(remainder)).div(power); // num = q * div + r <=> q = (num - r) / q
        return quotient;
    }
    
    static transformCostToToken(
        costs: CostPacked[], 
        quantityMultiplier: BigNumberish, 
    ): Partial<ResourceIdsMap<Partial<ResourceId>, BigNumber>> {
        const { ids, values } = this._loadResourcesIdsAndValuesFromCost([], [], costs.length, costs, 0);

        return this._populateCostWithResourceIds(ids, values, quantityMultiplier);
    }
    
    static _loadResourcesIdsAndValuesFromCost(
        ids : BigNumber[], 
        values : BigNumber[], 
        costsLength: number,
        costs : CostPacked[], 
        cummulativeResourceCount: number
    ): { ids: BigNumber[], values: BigNumber[], cummulativeResourceCount: number } {

        if(costsLength === 0) return { ids, values, cummulativeResourceCount };

        const currentCost = costs[costsLength -1];
        const { values: _values, ids: _ids } = this._loadSingleCostIdsAndValues(currentCost, 0, [], []);

        return this._loadResourcesIdsAndValuesFromCost(
            [...ids, ..._ids],
            [...values, ..._values],
            costsLength - 1,
            costs,
            cummulativeResourceCount + 1
        );
    }

    static _loadSingleCostIdsAndValues(
        cost: CostPacked, 
        idx: number, 
        ids : BigNumber[], 
        values: BigNumber[]
    ): { ids: BigNumber[], values: BigNumber[] } {

        if(idx === cost.resource_count.toNumber()) {
            return { ids: ids, values: values };
        }

        const bitsSquared = BigNumber.from(2).pow(cost.bits.toString());
        // unpack_datas
        const tokenId = this.unpackData(
            cost.packed_ids.toString(), 
            BigNumber.from(cost.bits.toString()).mul(idx), 
            bitsSquared.sub(1)
        );
        const value = this.unpackData(
            cost.packed_amounts.toString(),
            BigNumber.from(cost.bits.toString()).mul(idx),
            bitsSquared.sub(1)
        );
        return this._loadSingleCostIdsAndValues(cost, idx + 1, [...ids, tokenId], [...values, value]);
    }

    static unpackSquad(packedSquad: BigNumber | BN): Squad<number> | {} {
        // parameters taken from https://github.com/BibliothecaForAdventurers/realms-contracts/blob/main/contracts/settling_game/library/library_combat.cairo
        const packedSquadSplit = this._splitInt( 
            this._toBigNumber(packedSquad), 
            15, 
            Unpacker.SHIFT.pow(2), 
            BigNumber.from(2).pow(16), 
            []
        );
        let tier1Troops = [];
        let tier2Troops = [];
        let tier3Troops = [];
        let squad: Partial<Squad<number>> = {};
        for(const packedTroop of packedSquadSplit) {
            const troop = this.unpackTroop(packedTroop);
            let troopLengthAtTier = 0;
            if(troop.tier === 1) {
                troopLengthAtTier = tier1Troops.push(troop);
            }
            if(troop.tier === 2) {
                troopLengthAtTier = tier2Troops.push(troop);
            }
            if(troop.tier === 3) {
                troopLengthAtTier = tier3Troops.push(troop);
            }

            if(troop.tier === 0) return {};

            squad[`t${troop.tier}_${troopLengthAtTier}` as keyof(Squad<number>)] = troop;
        }
        return squad as Required<Squad<number>>;
    }

    static unpackTroop(packedTroop: BigNumber | BN): Troop<number> {
        const _packedTroop = this._toBigNumber(packedTroop);
        const _troopId = _packedTroop.mod(Unpacker.SHIFT).toNumber() as TroopId;
        if(!_troopId) return {
            id: 0,
            type: 0,
            tier: 0,
            building: 0,
            agility: 0,
            attack: 0,
            armor: 0,
            vitality: 0,
            wisdom: 0
        };
        if(!CombatConstants.ALL_TROOPS_IDS.includes(_troopId)) {
            throw new Error(
                `Unpacker::unpackTroos - Incorrect troop id unpacked, troopId must be between ${CombatConstants.ALL_TROOPS_IDS[0]} and ${CombatConstants.ALL_TROOPS_IDS[CombatConstants.ALL_TROOPS_IDS.length - 1]} (troopId: ${_troopId})`
            );
        }
        const troopId = _troopId as TroopId;
        const troopName = CombatConstants.TROOPS_IDS_TO_NAMES[troopId] as TroopName;

        return {
            id: troopId,
            name: troopName,
            type: CombatConstants.TROOPS_PROPS.Type[troopName],
            tier: CombatConstants.TROOPS_PROPS.Tier[troopName],
            building: CombatConstants.TROOPS_PROPS.Building[troopName],
            agility: CombatConstants.TROOPS_PROPS.Agility[troopName],
            attack: CombatConstants.TROOPS_PROPS.Attack[troopName],
            armor: CombatConstants.TROOPS_PROPS.Armor[troopName],
            vitality: CombatConstants.TROOPS_PROPS.Vitality[troopName],
            wisdom: CombatConstants.TROOPS_PROPS.Widsom[troopName]
        };
    }

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
    static _splitInt(
        value: BigNumber,
        n: number,
        base: BigNumber,
        bound: BigNumber,
        output: BigNumber[]
    ): BigNumber[] {
        if(n === 0) {
            if(!value.eq(0)) throw new Error(`Unpacker::_splitInt - Execution finished before splitting the entire int (remaining value: ${value.toString()})`);
            return output;
        }
        let _output = output;
        _output.push(value.mod(Unpacker.PRIME).mod(base));
        return this._splitInt(
            value.sub(_output[_output.length - 1]).div(base), 
            n - 1,
            base,
            bound,
            output
        );
    }

    static _toBigNumber(num: BigNumber | BN) {
        return !(num instanceof BigNumber) ? BigNumber.from(num.toString()) : num;
    }

    static _populateCostWithResourceIds(ids: BigNumber[], values: BigNumber[], quantityMultiplier: BigNumberish) {
        let cost: Partial<ResourceIdsMap<Partial<ResourceId>, BigNumber>> = {};
        for(let i = 0; i < ids.length; i++) {
            cost[ids[i].toNumber() as ResourceId] = values[i].mul(quantityMultiplier);
        }
        return cost;
    }
}