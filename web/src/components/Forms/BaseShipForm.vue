<script lang="ts" setup>
import { ref } from "vue";
import useForm from "@/hooks/useForm";
import BasicInput from "../Controls/BasicInput.vue";

export type Ship1FormProps = {
    name: string;
    level: number;
    currentHp: number;
    plusHp: number;
    currentArmor: number;
    plusArmor: number;
    currentShield: number;
    plusShield: number;
};

const ship1Form = useForm({
    initialValues: {
        name: "",
        level: 0,
        currentHp: 0,
        plusHp: 0,
        currentArmor: 0,
        plusArmor: 0,
        currentShield: 0,
        plusShield: 0,
    } as Ship1FormProps,
});

const name = ship1Form.useField("name");
const level = ship1Form.useField("level");
const currentHp = ship1Form.useField("currentHp");
const plusHp = ship1Form.useField("plusHp");
const currentArmor = ship1Form.useField("currentArmor");
const plusArmor = ship1Form.useField("plusArmor");
const currentShield = ship1Form.useField("currentShield");
const plusShield = ship1Form.useField("plusShield");

const ship1BaseResults = ref({
    show: false,
    baseHp: 0,
    baseShield: 0,
    baseArmor: 0,
});

const handleShip1FormSubmit = () => {
    return ship1Form.submit(async (values) => {
        const {
            name,
            level,
            currentHp,
            plusHp,
            currentArmor,
            plusArmor,
            currentShield,
            plusShield,
        } = values;

        ship1BaseResults.value = {
            show: true,
            baseHp: currentHp - plusHp * (level - 1),
            baseShield: currentShield - plusShield * (level - 1),
            baseArmor: currentArmor - plusArmor * (level - 1),
        };
        console.log("submitted with", values);
    });
};
</script>

<template>
    <div class="max-w-[600px]">
        <form class="ship-1-form" @submit.prevent="handleShip1FormSubmit">
            <h2 class="text-lg">Step 1</h2>
            <p>Go to ship assembly, select a ship.</p>
            <BasicInput label="Hull Name" name="name" :input="name" />
            <BasicInput label="Level" name="level" :input="level" />

            <div class="flex">
                <div class="grow">
                    <BasicInput
                        label="Current HP"
                        name="currentHp"
                        :input="currentHp"
                    />
                </div>
                <div class="w-[120px]">
                    <BasicInput label="Plus HP" name="plusHp" :input="plusHp" />
                </div>
            </div>
            <div class="flex">
                <div class="grow">
                    <BasicInput
                        label="Current Armor"
                        name="currentArmor"
                        :input="currentArmor"
                    />
                </div>
                <div class="w-[120px]">
                    <BasicInput
                        label="Plus Armor"
                        name="plusArmor"
                        :input="plusArmor"
                    />
                </div>
            </div>
            <div class="flex">
                <div class="grow">
                    <BasicInput
                        label="Current Shield"
                        name="currentShield"
                        :input="currentShield"
                    />
                </div>
                <div class="w-[120px]">
                    <BasicInput
                        label="Plus Shield"
                        name="plusShield"
                        :input="plusShield"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    class="btn btn-sky"
                    :disabled="ship1Form.isInvalid || ship1Form.isSubmitting"
                >
                    {{ ship1Form.isSubmitting ? "Saving..." : "Submit" }}
                </button>
            </div>

            <div
                v-if="ship1BaseResults.show"
                class="p-6 bg-sky-500 text-white mt-4"
            >
                <h2 class="text-lg">Step 2</h2>
                <p>
                    We estimate the following base values for
                    {{ level.value }}
                </p>
                <p>
                    Base HP:
                    <b class="font-bold">{{ ship1BaseResults.baseHp }}</b>
                </p>
                <p>
                    Base Shield:
                    <b class="font-bold">{{ ship1BaseResults.baseShield }}</b>
                </p>
                <p>
                    Base Armor:
                    <b class="font-bold">{{ ship1BaseResults.baseArmor }}</b>
                </p>
            </div>
        </form>
    </div>
</template>
