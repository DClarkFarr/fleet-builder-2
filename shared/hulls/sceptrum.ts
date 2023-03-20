import { AbilityTypeToVariants } from "../types/Ability";
import { Hull } from "../types/Ship";

const Sceptrum: Hull = {
    name: "Sceptrum",
    slug: "sceptrum",

    image: "",

    rarity: "legendary",

    class: "battleship",

    energy: 137,

    baseHp: 27936,
    baseArmor: 127,
    baseShield: 10868,

    engineSlot: "l",

    weaponSlots: ["m", "l", "l", "l"],
    armorSlots: ["s", "s", "m", "m", "l"],
    unitSlots: ["s", "m", "m", "l"],

    ability_1: [
        {
            location: "ability_1",
            category: "resistance",
            type: "reduce_damage",
            variants: ["hull"],
            amounts: [
                {
                    type: "percent",
                    value: 8,
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
                // {
                //     category: "armor",
                //     text: "Stack armor",
                // },
            ],
            appliesToFleet: false,
            flagshipRequired: false,
            boostClasses: [],
            againstClasses: [],
        },
    ],
    ability_2: [
        {
            location: "ability_2",
            category: "accuracy",
            type: "increase_accuracy",
            variants: [],
            amounts: [
                {
                    type: "number",
                    value: 720,
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
                // {
                //     category: "armor",
                //     text: "Stack armor",
                // },
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
            category: "armor",
            type: "increase_armor",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 8,
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
            notes: [
                {
                    category: "armor",
                    text: "Stack armor w/ HP boosts",
                },
            ],
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
            damageType: ["kinetic"],
            sizes: [],
            durationType: null,
            durationValue: 0,
            repeatType: null,
            repeatValue: 0,
            notes: [
                {
                    category: "damage",
                    text: "Kinetic ship",
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
            category: "accuracy",
            type: "increase_accuracy",
            variants: [],
            amounts: [
                {
                    type: "number",
                    value: 720,
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
                // {
                //     category: "armor",
                //     text: "Stack armor",
                // },
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
                    text: "Add a shield unit",
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
            category: "accuracy",
            type: "increase_accuracy",
            variants: [],
            amounts: [
                {
                    type: "number",
                    value: 1200,
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
                // {
                //     category: "armor",
                //     text: "Stack armor",
                // },
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
            category: "resistance",
            type: "reduce_damage",
            variants: ["hull"],
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
            notes: [
                {
                    category: "armor",
                    text: "Stack armor w/ HP boosts",
                },
            ],
            appliesToFleet: false,
            flagshipRequired: false,
            boostClasses: [],
            againstClasses: [],
        },
    ],
};

export default Sceptrum;
