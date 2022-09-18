import BN from "bn.js";
import { BigNumber } from "ethers";

import { CombatConstants } from "../src/constants/CombatConstants";
import { ResourcesConstants } from "../src/constants/ResourcesConstants";

export interface CostPacked {
  resource_count: BN,
  bits: BN,
  packed_ids: BN,
  packed_amounts: BN
};

export type ResourceName = keyof(typeof ResourcesConstants.RESOURCES_NAMES_TO_IDS);
export type ResourceId = keyof(typeof ResourcesConstants.RESOURCES_IDS_TO_NAMES);

export type ResourceNamesMap<K extends ResourceName, T> = { [resourceName in K]: T };
export type ResourceIdsMap<K extends ResourceId, T> = { [resourceId in K]: T };

export type TroopName = keyof(typeof CombatConstants.TROOPS_NAMES_TO_IDS);
export type TroopId = keyof(typeof CombatConstants.TROOPS_IDS_TO_NAMES);

export interface Squad<T> {
  t1_1: Troop<T>,
  t1_2: Troop<T>,
  t1_3: Troop<T>,
  t1_4: Troop<T>,
  t1_5: Troop<T>,
  t1_6: Troop<T>,
  t1_7: Troop<T>,
  t1_8: Troop<T>,
  t1_9: Troop<T>,
  t2_1: Troop<T>,
  t2_2: Troop<T>,
  t2_3: Troop<T>,
  t2_4: Troop<T>,
  t2_5: Troop<T>,
  t3_1: Troop<T>
}

export interface Troop<T> {
  id: T,
  name?: TroopName,
  type: T,
  tier: T,
  building: T,
  agility: T,
  attack: T,
  armor: T,
  vitality: T,
  wisdom: T
};