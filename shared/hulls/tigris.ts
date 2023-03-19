import { Hull } from "../types/Ship";

const Tigris: Hull = {
    name: "Tigris",
    slug: "tigris",

    image: "",

    rarity: "legendary",

    class: "battleship",

    baseHp: 22753,
    baseArmor: 180,
    baseShield: 18119,

    engineSlot: "l",

    weaponSlots: ["m", "l", "l", "l"],
    armorSlots: ["s", "s", "m", "m", "l"],
    unitSlots: ["s", "m", "m", "l"],

    ability_1: [
        {
            location: "ability_1",
            category: "damage",
            type: "increase_weapon_damage",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 25,
                },
            ],
            conditions: [],
            damageType: [],
            sizes: [],
            durationType: null,
            durationValue: 0,
            repeatType: null,
            repeatValue: 0,
            notes: [],
            appliesToFleet: false,
            flagshipRequired: false,
            boostClasses: [],
            againstClasses: [],
        },
    ],
    ability_2: [
        {
            location: "ability_2",
            category: "armor",
            type: "increase_armor",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 28,
                },
            ],
            conditions: [],
            damageType: [],
            sizes: [],
            durationType: null,
            durationValue: 0,
            repeatType: null,
            repeatValue: 0,
            notes: [
                {
                    category: "armor",
                    text: "Stack armor",
                },
            ],
            appliesToFleet: false,
            flagshipRequired: false,
            boostClasses: [],
            againstClasses: [],
        },
    ],
    ability_3: [],
    flagship_ability: [
        {
            location: "flagship_ability",
            category: "damage",
            type: "increase_weapon_damage",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 8,
                },
            ],
            conditions: [],
            damageType: ["missile"],
            sizes: [],
            durationType: null,
            durationValue: 0,
            repeatType: null,
            repeatValue: 0,
            notes: [
                // {
                //     category: "armor",
                //     text: "Stack armor",
                // },
            ],
            appliesToFleet: true,
            flagshipRequired: true,
            boostClasses: [],
            againstClasses: [],
        },
    ],
    chip_1: [
        {
            location: "chip_1",
            category: "hp",
            type: "increase_hp",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 35,
                },
            ],
            conditions: [],
            damageType: [],
            sizes: [],
            durationType: null,
            durationValue: 0,
            repeatType: null,
            repeatValue: 0,
            notes: [],
            appliesToFleet: false,
            flagshipRequired: false,
            boostClasses: [],
            againstClasses: [],
        },
    ],
    chip_2: [
        {
            location: "chip_2",
            category: "damage",
            type: "increase_weapon_damage",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 45,
                },
            ],
            conditions: [],
            damageType: ["missile"],
            sizes: [],
            durationType: null,
            durationValue: 0,
            repeatType: null,
            repeatValue: 0,
            notes: [
                {
                    category: "damage",
                    text: "Missile ship now",
                },
            ],
            appliesToFleet: false,
            flagshipRequired: false,
            boostClasses: [],
            againstClasses: [],
        },
    ],
    chip_3: [
        {
            location: "chip_3",
            category: "armor",
            type: "increase_armor",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 22,
                },
            ],
            conditions: [],
            damageType: [],
            sizes: [],
            durationType: null,
            durationValue: 0,
            repeatType: null,
            repeatValue: 0,
            notes: [
                {
                    category: "armor",
                    text: "Stack armor",
                },
            ],
            appliesToFleet: false,
            flagshipRequired: false,
            boostClasses: [],
            againstClasses: [],
        },
    ],
    chip_4: [
        {
            location: "chip_4",
            category: "damage",
            type: "increase_armor",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 50,
                },
            ],
            conditions: [],
            damageType: [],
            sizes: [],
            durationType: null,
            durationValue: 0,
            repeatType: null,
            repeatValue: 0,
            notes: [
                {
                    category: "armor",
                    text: "Stack armor",
                },
            ],
            appliesToFleet: false,
            flagshipRequired: false,
            boostClasses: [],
            againstClasses: [],
        },
    ],
    chip_5: [
        {
            location: "chip_5",
            category: "shield",
            type: "increase_shield",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 80,
                },
            ],
            conditions: [],
            damageType: [],
            sizes: [],
            durationType: null,
            durationValue: 0,
            repeatType: null,
            repeatValue: 0,
            notes: [
                {
                    category: "shield",
                    text: "Add some shields",
                },
            ],
            appliesToFleet: false,
            flagshipRequired: false,
            boostClasses: [],
            againstClasses: [],
        },
    ],
    chip_6: [
        {
            location: "chip_6",
            category: "damage",
            type: "increase_weapon_damage",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 25,
                },
            ],
            conditions: [],
            damageType: [],
            sizes: [],
            durationType: null,
            durationValue: 0,
            repeatType: null,
            repeatValue: 0,
            notes: [],
            appliesToFleet: false,
            flagshipRequired: false,
            boostClasses: [],
            againstClasses: [],
        },
    ],
};

export default Tigris;
