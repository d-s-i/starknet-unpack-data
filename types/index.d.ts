import BN from "bn.js";
import { BigNumber } from "ethers";

import { CombatConstants } from "../constants/CombatConstants";
import { ResourcesConstants } from "../constants/ResourcesConstants";

export interface StringMap { [key: string]: any }

export type ResourceName = keyof(typeof ResourcesConstants.RESOURCES_NAMES_TO_IDS);
export type ResourceId = keyof(typeof ResourcesConstants.RESOURCES_IDS_TO_NAMES);
export type ResourceNameOrId = keyof(typeof ResourcesConstants.RESOURCES_NAMES_TO_IDS) | keyof(typeof ResourcesConstants.RESOURCES_IDS_TO_NAMES);

export type TroopName = keyof(typeof CombatConstants.TROOPS_NAMES_TO_IDS);
export type TroopId = keyof(typeof CombatConstants.TROOPS_IDS_TO_NAMES);
export type TroopNameOrId = keyof(typeof CombatConstants.TROOPS_NAMES_TO_IDS) | keyof(typeof CombatConstants.TROOPS_IDS_TO_NAMES);


export interface CostPacked {
  resource_count: BN,
  bits: BN,
  packed_ids: BN,
  packed_amounts: BN
}

export interface Troop {
  id: number,
  type: number,
  tier: number,
  building: number,
  agility: number,
  attack: number,
  armor: number,
  vitality: number,
  wisdom: number
}

export interface TroopExtended {
  id: number,
  name: TroopName,
  type: number,
  tier: number,
  building: number,
  agility: number,
  attack: number,
  armor: number,
  vitality: number,
  wisdom: number
}