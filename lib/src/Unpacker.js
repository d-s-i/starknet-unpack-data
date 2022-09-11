"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unpacker = void 0;
const ethers_1 = require("ethers");
const CombatConstants_1 = require("../constants/CombatConstants");
const ResourcesConstants_1 = require("../constants/ResourcesConstants");
class Unpacker {
    constructor() { }
    unpackData(data, index, mask_size) {
        const power = ethers_1.BigNumber.from(2).pow(index);
        const mask = ethers_1.BigNumber.from(mask_size).mul(power);
        const masked = mask.toBigInt() & ethers_1.BigNumber.from(data).toBigInt();
        const remainder = ethers_1.BigNumber.from(masked).mod(power);
        const quotient = (ethers_1.BigNumber.from(masked).sub(remainder)).div(power); // num = q * div + r <=> q = (num - r) / q
        return quotient;
    }
    transformCostToToken(costs, quantityMultiplier, options) {
        const { ids, values } = this._loadResourcesIdsAndValuesFromCost([], [], costs.length, costs, 0);
        return options?.resourcesAsNames ?
            this._populateCostWithResourceName(ids, values, quantityMultiplier) :
            this._populateCostWithResourceIds(ids, values, quantityMultiplier);
    }
    _loadResourcesIdsAndValuesFromCost(ids, values, costsLength, costs, cummulativeResourceCount) {
        if (costsLength === 0)
            return { ids, values, cummulativeResourceCount };
        const currentCost = costs[costsLength - 1];
        const { values: _values, ids: _ids } = this._loadSingleCostIdsAndValues(currentCost, 0, [], []);
        return this._loadResourcesIdsAndValuesFromCost([...ids, ..._ids], [...values, ..._values], costsLength - 1, costs, cummulativeResourceCount + 1);
    }
    _loadSingleCostIdsAndValues(cost, idx, ids, values) {
        if (idx === cost.resource_count.toNumber()) {
            return { ids: ids, values: values };
        }
        const bitsSquared = ethers_1.BigNumber.from(2).pow(cost.bits.toString());
        // unpack_datas
        const tokenId = this.unpackData(cost.packed_ids.toString(), ethers_1.BigNumber.from(cost.bits.toString()).mul(idx), bitsSquared.sub(1));
        const value = this.unpackData(cost.packed_amounts.toString(), ethers_1.BigNumber.from(cost.bits.toString()).mul(idx), bitsSquared.sub(1));
        return this._loadSingleCostIdsAndValues(cost, idx + 1, [...ids, tokenId], [...values, value]);
    }
    unpackSquad(packedSquad) {
        // parameters taken from https://github.com/BibliothecaForAdventurers/realms-contracts/blob/main/contracts/settling_game/library/library_combat.cairo
        const packedSquadSplit = this._splitInt(this._toBigNumber(packedSquad), 15, Unpacker.SHIFT.pow(2), ethers_1.BigNumber.from(2).pow(16), []);
        let tier1Troops = [];
        let tier2Troops = [];
        let tier3Troops = [];
        let squad = {};
        for (const packedTroop of packedSquadSplit) {
            const troop = this.unpackTroop(packedTroop);
            let troopLengthAtTier = 0;
            if (troop.tier === 1) {
                troopLengthAtTier = tier1Troops.push(troop);
            }
            if (troop.tier === 2) {
                troopLengthAtTier = tier2Troops.push(troop);
            }
            if (troop.tier === 3) {
                troopLengthAtTier = tier3Troops.push(troop);
            }
            squad[`t${troop.tier}_${troopLengthAtTier}`] = troop;
        }
        return squad;
    }
    unpackTroop(packedTroop) {
        const _packedTroop = this._toBigNumber(packedTroop);
        const _troopId = _packedTroop.mod(Unpacker.SHIFT).toNumber();
        if (_troopId === 0)
            return {
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
        if (!CombatConstants_1.CombatConstants.ALL_TROOPS_IDS.includes(_troopId)) {
            throw new Error(`Unpacker::unpackTroos - Incorrect troop id unpacked, troopId must be between ${CombatConstants_1.CombatConstants.ALL_TROOPS_IDS[0]} and ${CombatConstants_1.CombatConstants.ALL_TROOPS_IDS[CombatConstants_1.CombatConstants.ALL_TROOPS_IDS.length - 1]} (troopId: ${_troopId})`);
        }
        const troopId = _troopId;
        const troopName = CombatConstants_1.CombatConstants.TROOPS_IDS_TO_NAMES[troopId];
        return {
            id: troopId,
            name: troopName,
            type: CombatConstants_1.CombatConstants.TROOPS_PROPS.Type[troopName],
            tier: CombatConstants_1.CombatConstants.TROOPS_PROPS.Tier[troopName],
            building: CombatConstants_1.CombatConstants.TROOPS_PROPS.Buildings[troopName],
            agility: CombatConstants_1.CombatConstants.TROOPS_PROPS.Agility[troopName],
            attack: CombatConstants_1.CombatConstants.TROOPS_PROPS.Attack[troopName],
            armor: CombatConstants_1.CombatConstants.TROOPS_PROPS.Armor[troopName],
            vitality: CombatConstants_1.CombatConstants.TROOPS_PROPS.Vitality[troopName],
            wisdom: CombatConstants_1.CombatConstants.TROOPS_PROPS.Widsom[troopName]
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
    _splitInt(value, n, base, bound, output) {
        if (n === 0) {
            if (!value.eq(0))
                throw new Error(`Unpacker::_splitInt - Execution finished before splitting the entire int (remaining value: ${value.toString()})`);
            return output;
        }
        let _output = output;
        _output.push(value.mod(Unpacker.PRIME).mod(base));
        return this._splitInt(value.sub(_output[_output.length - 1]).div(base), n - 1, base, bound, output);
    }
    _toBigNumber(num) {
        return !(num instanceof ethers_1.BigNumber) ? ethers_1.BigNumber.from(num.toString()) : num;
    }
    _populateCostWithResourceName(ids, values, quantityMultiplier) {
        let cost = {};
        for (let i = 0; i < ids.length; i++) {
            const key = ResourcesConstants_1.ResourcesConstants.RESOURCES_IDS_TO_NAMES[ids[i].toNumber()];
            cost[key] = values[i].mul(quantityMultiplier);
        }
        return cost;
    }
    _populateCostWithResourceIds(ids, values, quantityMultiplier) {
        let cost = {};
        for (let i = 0; i < ids.length; i++) {
            cost[ids[i].toNumber()] = values[i].mul(quantityMultiplier);
        }
        return cost;
    }
}
exports.Unpacker = Unpacker;
Unpacker.SHIFT = ethers_1.BigNumber.from(0x100);
Unpacker.PRIME = ethers_1.BigNumber.from(BigInt(2 ** 251)).add(ethers_1.BigNumber.from(17).mul(BigInt(2 ** 192)).add(1));
//# sourceMappingURL=Unpacker.js.map