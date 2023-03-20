import { Hull } from "../types/Ship";

const muscaBorealis: Hull = {
    name: "Musca Borealis",
    slug: "musca-borealis",

    image: "",

    rarity: "legendary",

    class: "cruiser",

    energy: 92,

    baseHp: 23257,
    baseArmor: 96,
    baseShield: 8802,

    engineSlot: "m",

    weaponSlots: ["s", "s", "m", "l", "l"],
    armorSlots: ["m", "m", "l"],
    unitSlots: ["s", "m", "l"],

    ability_1: [
        {
            location: "ability_1",
            category: "resistance",
            type: "reduce_damage",
            variants: ["hull"],
            amounts: [
                {
                    type: "percent",
                    value: 18,
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
                    category: "resistance",
                    text: "Stack resistance armor?",
                },
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
            category: "movement",
            type: "increase_ftl_speed",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 12,
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
                    text: "Stack armor w/ HP+",
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
            category: "resistance",
            type: "increase_resistance",
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
                    category: "resistance",
                    text: "Stack resistance armor",
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
            category: "evade",
            type: "increase_evade",
            variants: [],
            amounts: [
                {
                    type: "number",
                    value: 600,
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
        {
            location: "chip_5",
            category: "accuracy",
            type: "increase_accuracy",
            variants: [],
            amounts: [
                {
                    type: "number",
                    value: 600,
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
            type: "increase_resistance",
            variants: [],
            amounts: [
                {
                    type: "percent",
                    value: 17,
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
};

export default muscaBorealis;
