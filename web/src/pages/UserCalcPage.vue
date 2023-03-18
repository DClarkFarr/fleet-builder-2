<script lang="ts" setup>
import BasicInput from "@/components/Controls/BasicInput.vue";
import BaseShipForm from "@/components/Forms/BaseShipForm.vue";
import useForm from "@/hooks/useForm";
import useUserStore from "@/stores/useUserStore";
import { ref } from "vue";

export type UserStatsFormProps = {
    leadership: number;
    hp: number;
    shield: number;
    armor: number;
};

const user = useUserStore();

const statsForm = useForm({
    initialValues: {
        leadership: 0,
        hp: 0,
        shield: 0,
        armor: 0,
    } as UserStatsFormProps,
});

const leadership = statsForm.useField("leadership");
const hp = statsForm.useField("hp");
const shield = statsForm.useField("shield");
const armor = statsForm.useField("armor");

const onSubmitStats = () => {
    return statsForm.submit(async (values) => {
        console.log("submitted with", values);
    });
};
</script>

<template>
    <div class="p-4">
        <h1>User Boost Stats</h1>
        <form @submit.prevent="onSubmitStats">
            <BasicInput
                label="Leadership"
                name="leadership"
                :input="leadership"
            />
            <BasicInput label="HP Boost %" name="hp" :input="hp" />
            <BasicInput label="Shield Boost %" name="shield" :input="shield" />
            <BasicInput label="Armor Bost %" name="armor" :input="armor" />
            <div>
                <button
                    type="submit"
                    class="btn btn-sky"
                    :disabled="statsForm.isInvalid || statsForm.isSubmitting"
                >
                    {{ statsForm.isSubmitting ? "Saving..." : "Submit" }}
                </button>
            </div>
        </form>

        <div class="pt-4"></div>

        <h1 class="text-2xl">Let's get a Hull's Base Stats</h1>

        <BaseShipForm />
    </div>
</template>
