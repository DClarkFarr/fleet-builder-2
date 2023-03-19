import { DamageType, DamageTypes, ShipClass, Size } from "./Ship";

export enum DurationTypes {
    seconds = "seconds",
    attacks = "attacks",
}

export type DurationType = keyof typeof DurationTypes;

export enum RepeatTypes {
    seconds = "seconds",
    attacks = "attacks",
}

export type RepeatType = keyof typeof RepeatTypes;

export enum AmountTypes {
    number = "number",
    percent = "percent",
    formula = "formula",
    seconds = "seconds",
    attacks = "attacks",
}

export type AmountType = keyof typeof AmountTypes;

export enum ResistanceTypes {
    shields = "shields",
    hull = "hull",
    armor = "armor",
}

export type ResistanceType = keyof typeof ResistanceTypes;

export enum ConditionTypes {
    id_class = "id_class",
}

export type ConditionType = keyof typeof ConditionTypes;

export enum AbilityStances {
    attack = "attack",
    defense = "defense",
    passive = "passive",
}

export type AbilityStance = keyof typeof AbilityStances;

export enum AbilityTypes {
    reduce_damage = "reduce_damage",
    increase_resistance = "increase_resistance",
    increase_weapon_damage = "increase_weapon_damage",
    increase_penetration = "increase_penetration",
    increase_hp = "increase_hp",
    increase_armor = "increase_armor",
    increase_accuracy = "increase_accuracy",
    increase_evade = "increase_evade",
    increase_shield = "increase_shield",
    increase_movement_speed = "increase_movement_speed",
    increase_ftl_speed = "increase_ftl_speed",
    extra_attack = "extra_attack",
    increase_attack_speed = "increase_attack_speed",
}

export enum AbilityCategories {
    damage = "damage",
    resistance = "resistance",
    penetration = "penetration",
    hp = "hp",
    armor = "armor",
    accuracy = "accuracy",
    evade = "evade",
    shield = "shield",
    movement = "movement",
    ftl = "ftl",
    extra_attack = "extra_attack",
    attack_speed = "attack_speed",
}

export type AbilityCategory = keyof typeof AbilityCategories;

export type AbilityType = keyof typeof AbilityTypes;

export enum AbilityLocations {
    ability_1 = "ability_1",
    ability_2 = "ability_2",
    ability_3 = "ability_3",
    flagship_ability = "flagship_ability",
    chip_1 = "chip_1",
    chip_2 = "chip_2",
    chip_3 = "chip_3",
    chip_4 = "chip_4",
    chip_5 = "chip_5",
    chip_6 = "chip_6",
}

export type AbilityLocation = keyof typeof AbilityLocations;

export enum ShipColumns {
    level = "level",
    all_weapon_damage = "all_weapon_damage",
    beam_weapon_damage = "beam_weapon_damage",
    missile_weapon_damage = "missile_weapon_damage",
    kinetic_weapon_damage = "kinetic_weapon_damage",
    all_resistance = "all_resistance",
    kinetic_resistance = "kinetic_resistance",
    missile_resistance = "missile_resistance",
    beam_resistance = "beam_resistance",
    all_shields = "all_shields",
    armor = "armor",
}

export type ShipColumn = keyof typeof ShipColumns;

export enum Operators {
    equals = "equals",
    greater = "greater",
    less = "less",
}

export type Operator = keyof typeof Operators;

export enum FormulaItemTypes {
    number = "number",
    column = "column",
    formula = "formula",
    percent = "percent",
}

export type FormulaItemType = keyof typeof FormulaItemTypes;

export enum FormulaItemOperators {
    add = "+",
    subtract = "-",
    multiply = "*",
    divide = "/",
}

export type FormulaItemOperator = keyof typeof FormulaItemOperators;

export type AbilityNote = {
    category: AbilityCategory;
    text: string;
};

export type AmountFormula = {
    type: FormulaItemType;
    value: number | ShipColumn | AmountFormula[];
};

export type AbilityAmounts = AmountFormula[];

export type AbilityCondition = {
    type: ConditionType;
    field: ConditionType extends "id_class" ? ShipClass : never;
    operator: Operator;
    value: number;
};

export enum AbilitiesWithVariants {
    increase_weapon_damage = AbilityTypes.increase_weapon_damage,
    reduce_damage = AbilityTypes.reduce_damage,
    increase_resistance = AbilityTypes.increase_resistance,
    increase_penetration = AbilityTypes.increase_penetration,
}

export type AbilitiesWithVariant = keyof typeof AbilitiesWithVariants;

export type AbilityVariantsMap = {
    increase_weapon_damage: ResistanceType[];
    reduce_damage: ResistanceType[];
    increase_resistance: DamageType[];
    increase_penetration: ResistanceType[];
};

export type AbilityTypeToVariants<A extends AbilityType> =
    A extends AbilitiesWithVariant ? AbilityVariantsMap[A] : [];

export type Ability<A extends AbilityType = AbilityType> = {
    location: AbilityLocation;

    category: AbilityCategory;
    type: A;

    variants: AbilityTypeToVariants<A>;

    amounts: AbilityAmounts;
    conditions: AbilityCondition[];

    damageType: DamageType[];

    sizes: Size[];

    durationType: DurationType | null;
    durationValue: number;

    repeatType: RepeatType | null;
    repeatValue: number;

    notes: AbilityNote[];

    appliesToFleet: boolean;

    flagshipRequired: boolean;

    boostClasses: ShipClass[];
    againstClasses: ShipClass[];
};
