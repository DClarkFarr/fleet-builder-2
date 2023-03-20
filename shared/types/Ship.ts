import { Ability, AbilityLocation } from "./Ability";

export enum Sizes {
    s = "s",
    m = "m",
    l = "l",
}

export type Size = keyof typeof Sizes;

export enum WeaponsRarities {
    standard = "standard",
    rare = "rare",
    legendary = "legendary",
}

export type WeaponRarity = keyof typeof WeaponsRarities;

export enum ShipRarities {
    standard = "standard",
    rare = "rare",
    legendary = "legendary",
}

export type ShipRarity = keyof typeof ShipRarities;

export enum ShipClasses {
    frigate = "frigate",
    destroyer = "destroyer",
    cruiser = "cruiser",
    battleship = "battleship",
    dreadnought = "dreadnought",
}

export type ShipClass = keyof typeof ShipClasses;

export enum DamageTypes {
    beam = "beam",
    missile = "missile",
    kinetic = "kinetic",
}

export type DamageType = keyof typeof DamageTypes;

export type ShipItem<S extends Size = Size> = {
    size: S;
    equipped: string;
};

export type HullAbilities = {
    [K in AbilityLocation]: Ability[];
};

export type Hull = {
    name: string;
    slug: string;
    image: string;

    energy: number;

    rarity: ShipRarity;
    class: ShipClass;

    baseHp: number;
    baseArmor: number;
    baseShield: number;

    engineSlot: Size;
    weaponSlots: Size[];
    armorSlots: Size[];
    unitSlots: Size[];
} & HullAbilities;

export interface Ship<H extends Hull> {
    hull: H;

    breakthroughLevel: number;
    chipLevel: number;

    level: number;

    // loop over Hull.weaponSlots and each slot size to ShipItem
    weapons: {
        [K in H["weaponSlots"][number]]: ShipItem<K>;
    };
    armors: {
        [K in H["armorSlots"][number]]: ShipItem<K>;
    };
    units: {
        [K in H["unitSlots"][number]]: ShipItem<K>;
    };
}
