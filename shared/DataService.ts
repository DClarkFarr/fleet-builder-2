import {
  AbilityStances,
  AbilityLocations,
  AbilityTypes,
  ConditionTypes,
  DurationTypes,
  FormulaItemOperators,
  FormulaItemTypes,
  Operators,
  RepeatTypes,
  ShipColumns,
  AbilityCategories,
  AbilityType,
  AbilityCategory,
  AbilityStance,
  ResistanceTypes,
} from "./types/Ability";
import { Sizes, WeaponTypes } from "./types/Ship";

export default class DataService {
  // static getFleetLocations() {
  //     return [
  //         {
  //             name: "Fleet 1",
  //             slug: DataService.FLEET_LOCATIONS.FLEET_1,
  //         },
  //         {
  //             name: "Fleet 2",
  //             slug: DataService.FLEET_LOCATIONS.FLEET_2,
  //         },
  //         {
  //             name: "Fleet 3",
  //             slug: DataService.FLEET_LOCATIONS.FLEET_3,
  //         },
  //         {
  //             name: "Fleet 4",
  //             slug: DataService.FLEET_LOCATIONS.FLEET_4,
  //         },
  //         {
  //             name: "Fleet 5",
  //             slug: DataService.FLEET_LOCATIONS.FLEET_5,
  //         },
  //         {
  //             name: "Fleet 6",
  //             slug: DataService.FLEET_LOCATIONS.FLEET_6,
  //         },
  //     ];
  // }

  static getFormulaOperatorLabels() {
    return [
      {
        name: "Add",
        slug: FormulaItemOperators.add,
      },
      {
        name: "Subtract",
        slug: FormulaItemOperators.subtract,
      },
      {
        name: "Multiply",
        slug: FormulaItemOperators.multiply,
      },
      {
        name: "Divide",
        slug: FormulaItemOperators.divide,
      },
    ];
  }
  static getFormulaItemTypesLabels() {
    return [
      {
        name: "Number",
        slug: FormulaItemTypes.number,
      },
      {
        name: "Column",
        slug: FormulaItemTypes.column,
      },
      {
        name: "Formula",
        slug: FormulaItemTypes.formula,
      },
    ];
  }

  static getShipColumnLabels() {
    return [
      {
        name: "Ship Level",
        slug: ShipColumns.level,
      },
      {
        name: "Total Weapon Damage",
        slug: ShipColumns.all_weapon_damage,
      },
      {
        name: "Beam Weapon Damage",
        slug: ShipColumns.beam_weapon_damage,
      },
      {
        name: "Missile Weapon Damage",
        slug: ShipColumns.missile_weapon_damage,
      },
      {
        name: "Kinetic Weapon Damage",
        slug: ShipColumns.kinetic_weapon_damage,
      },
      {
        name: "Total Resistance",
        slug: ShipColumns.all_resistance,
      },
      {
        name: "Kinetic Resistance",
        slug: ShipColumns.kinetic_resistance,
      },
      {
        name: "Missile Resistance",
        slug: ShipColumns.missile_resistance,
      },
      {
        name: "Beam Resistance",
        slug: ShipColumns.beam_resistance,
      },
      {
        name: "Total Shields",
        slug: ShipColumns.all_shields,
      },
      {
        name: "Total Armor",
        slug: ShipColumns.armor,
      },
    ];
  }

  static getAbilityStanceLabels() {
    return [
      {
        name: "Attack",
        slug: AbilityStances.attack,
      },
      {
        name: "Defense",
        slug: AbilityStances.defense,
      },
      {
        name: "Passive",
        slug: AbilityStances.passive,
      },
    ];
  }

  static getOperatorLabels() {
    return [
      {
        name: "Equals",
        slug: Operators.equals,
      },
      {
        name: "Greater Than",
        slug: Operators.greater,
      },
      {
        name: "Less Than",
        slug: Operators.less,
      },
    ];
  }

  static getSizeLabels() {
    return [
      {
        name: "S",
        slug: Sizes.s,
      },
      {
        name: "M",
        slug: Sizes.m,
      },
      {
        name: "L",
        slug: Sizes.l,
      },
    ];
  }

  static getWeaponTypeLabels() {
    return [
      {
        name: "Beam",
        slug: WeaponTypes.beam,
      },
      {
        name: "Missile",
        slug: WeaponTypes.missile,
      },
      {
        name: "Kinetic",
        slug: WeaponTypes.kinetic,
      },
    ];
  }

  static getConditionTypeLabels() {
    return [
      {
        name: "Has Class",
        slug: ConditionTypes.id_class,
      },
    ];
  }

  static getDurationTypeLabels() {
    return [
      {
        name: "Seconds",
        slug: DurationTypes.seconds,
      },
      {
        name: "Attacks",
        slug: DurationTypes.attacks,
      },
    ];
  }

  static getRepeatTypeLabels() {
    return [
      {
        name: "Seconds",
        slug: RepeatTypes.seconds,
      },
      {
        name: "Attacks",
        slug: RepeatTypes.attacks,
      },
    ];
  }

  static getShipAbilityLocations() {
    return [
      {
        name: "Ability 1",
        slug: AbilityLocations.ability_1,
      },
      {
        name: "Ability 2",
        slug: AbilityLocations.ability_2,
      },
      {
        name: "Ability 3",
        slug: AbilityLocations.ability_3,
      },
      {
        name: "Flagship Ability",
        slug: AbilityLocations.flagship_ability,
      },
      {
        name: "Chip 1",
        slug: AbilityLocations.chip_1,
      },
      {
        name: "Chip 2",
        slug: AbilityLocations.chip_2,
      },
      {
        name: "Chip 3",
        slug: AbilityLocations.chip_3,
      },
      {
        name: "Chip 4",
        slug: AbilityLocations.chip_4,
      },
      {
        name: "Chip 5",
        slug: AbilityLocations.chip_5,
      },
      {
        name: "Chip 6",
        slug: AbilityLocations.chip_6,
      },
    ];
  }

  static getAbilityCategoryLabels() {
    return [
      { name: "Damage", slug: AbilityCategories.damage },
      { name: "Resistance", slug: AbilityCategories.resistance },
      { name: "Penetration", slug: AbilityCategories.penetration },
      { name: "HP", slug: AbilityCategories.hp },
      { name: "Armor", slug: AbilityCategories.armor },
      { name: "Accuracy", slug: AbilityCategories.accuracy },
      { name: "Evade", slug: AbilityCategories.evade },
      { name: "Shield", slug: AbilityCategories.shield },
      { name: "Movement", slug: AbilityCategories.movement },
      { name: "FTL", slug: AbilityCategories.ftl },
      { name: "Extra Attack", slug: AbilityCategories.extra_attack },
      { name: "Attack Speed", slug: AbilityCategories.attack_speed },
    ];
  }

  static getAbilityTypeLabels() {
    return [
      {
        name: "Reduce Damage",
        slug: AbilityTypes.reduce_damage,
      },
      {
        name: "Increase Resistence",
        slug: AbilityTypes.increase_resistance,
      },
      {
        name: "Increase Weapon Damage",
        slug: AbilityTypes.increase_weapon_damage,
      },
      {
        name: "Increase Penetration",
        slug: AbilityTypes.increase_penetration,
      },
      {
        name: "Increase HP",
        slug: AbilityTypes.increase_hp,
      },
      {
        name: "Increase Armor",
        slug: AbilityTypes.increase_armor,
      },
      {
        name: "Increase Accuracy",
        slug: AbilityTypes.increase_accuracy,
      },
      {
        name: "Increase Evade",
        slug: AbilityTypes.increase_evade,
      },
      {
        name: "Increase Shield",
        slug: AbilityTypes.increase_shield,
      },
      {
        name: "Increase Movement Speed",
        slug: AbilityTypes.increase_movement_speed,
      },
      {
        name: "Increase FTL Speed",
        slug: AbilityTypes.increase_ftl_speed,
      },
      {
        name: "Extra Attack",
        slug: AbilityTypes.extra_attack,
      },
      {
        name: "Increase Attack Speed",
        slug: AbilityTypes.increase_attack_speed,
      },
    ];
  }

  static getAmountTypes() {
    return [
      {
        name: "Number",
        slug: DataService.AMOUNT_TYPES.NUMBER,
      },
      {
        name: "Percent",
        slug: DataService.AMOUNT_TYPES.PERCENT,
      },
      {
        name: "Formula",
        slug: DataService.AMOUNT_TYPES.FORMULA,
      },
      {
        name: "Seconds",
        slug: DataService.AMOUNT_TYPES.SECONDS,
      },
      {
        name: "Attacks",
        slug: DataService.AMOUNT_TYPES.ATTACKS,
      },
    ];
  }

  static getVariantsByAbilityType() {
    return {
      [AbilityTypes.increase_weapon_damage]: [
        ResistanceTypes.shields,
        ResistanceTypes.hull,
        ResistanceTypes.armor,
      ],
      [AbilityTypes.reduce_damage]: [
        ResistanceTypes.shields,
        ResistanceTypes.hull,
        ResistanceTypes.armor,
      ],
      [AbilityTypes.increase_resistance]: [
        WeaponTypes.beam,
        WeaponTypes.missile,
        WeaponTypes.kinetic,
      ],
      [AbilityTypes.increase_penetration]: [
        ResistanceTypes.shields,
        ResistanceTypes.hull,
        ResistanceTypes.armor,
      ],
    };
  }

  static getAbilityTypesByStance(stance: AbilityStance) {
    return {
      [AbilityStances.attack]: [
        AbilityTypes.increase_attack_speed,
        AbilityTypes.increase_weapon_damage,
        AbilityTypes.increase_penetration,
        AbilityTypes.increase_accuracy,
        AbilityTypes.extra_attack,
      ],
      [AbilityStances.defense]: [
        AbilityTypes.reduce_damage,
        AbilityTypes.increase_resistance,
        AbilityTypes.increase_hp,
        AbilityTypes.increase_armor,
        AbilityTypes.increase_evade,
        AbilityTypes.increase_shield,
      ],
      [AbilityStances.passive]: [
        AbilityTypes.increase_movement_speed,
        AbilityTypes.increase_ftl_speed,
      ],
    }[stance];
  }

  static getAbilityTypeCategory(abilityType: AbilityType): AbilityCategory {
    return {
      [AbilityTypes.reduce_damage]: AbilityCategories.damage,
      [AbilityTypes.increase_resistance]: AbilityCategories.resistance,
      [AbilityTypes.increase_weapon_damage]: AbilityCategories.damage,
      [AbilityTypes.increase_penetration]: AbilityCategories.penetration,
      [AbilityTypes.increase_hp]: AbilityCategories.hp,
      [AbilityTypes.increase_armor]: AbilityCategories.armor,
      [AbilityTypes.increase_accuracy]: AbilityCategories.accuracy,
      [AbilityTypes.increase_evade]: AbilityCategories.evade,
      [AbilityTypes.increase_shield]: AbilityCategories.shield,
      [AbilityTypes.increase_movement_speed]: AbilityCategories.movement,
      [AbilityTypes.increase_ftl_speed]: AbilityCategories.ftl,
      [AbilityTypes.extra_attack]: AbilityCategories.extra_attack,
      [AbilityTypes.increase_attack_speed]: AbilityCategories.attack_speed,
    }[abilityType];
  }
}
