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

export enum WeaponTypes {
  beam = "beam",
  missile = "missile",
  kinetic = "kinetic",
}

export type WeaponType = keyof typeof WeaponTypes;

export type HullWeaponSpot = {
  size: Size;
};

export type HullArmorSpot = {
  size: Size;
};

export type HullEngineSpot = {
  size: Size;
};

export type HullUnitSpot = {
  size: Size;
};

export type Hull = {
  rarity: ShipRarity;
  class: ShipClass;

  level: number;

  hp: number;
  armor: number;
  shield: number;

  engineSlot: HullEngineSpot;
  weaponSlots: HullWeaponSpot[];
  armorSlots: HullArmorSpot[];
  unitSlots: HullUnitSpot[];

  breakthroughLevel: number;
  chipLevel: number;
};
