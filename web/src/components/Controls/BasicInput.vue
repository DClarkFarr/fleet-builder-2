<script lang="ts" setup>
import { UseInput } from "@/hooks/useForm";
import { computed } from "vue";
import ListIcon from "~icons/ic/sharp-do-not-disturb-on";

const props = withDefaults(
    defineProps<{
        name: string;
        input: UseInput;
        type?: string;
        label?: string;
        placeholder?: string;
        showFirstError?: boolean;
    }>(),
    {
        type: "text",
        label: "",
        placeholder: "",
        showFirstError: false,
    }
);

const stateProps = computed(() => {
    return {
        input: props.input,
        type: props.type,
        label: props.label,
        placeholder: props.placeholder,
    };
});
</script>

<template>
    <div
        class="field"
        :class="{
            'field--invalid': input.showError,
            'field--dirty': input.dirty,
        }"
    >
        <slot name="label" v-bind="stateProps">
            <label class="field__label" v-if="label">{{ label }}</label>
        </slot>

        <slot name="input" v-bind="stateProps">
            <input
                :name="name"
                :type="type"
                v-model="input.value"
                :placeholder="placeholder"
                :ref="input.ref"
                class="field__input"
            />
        </slot>

        <slot name="errors" v-bind="stateProps">
            <div
                v-if="input.showError"
                class="field__error text-red-700 mb-2 flex items-center gap-x-2"
            >
                <div>
                    <ListIcon />
                </div>
                <div>
                    {{ input.error }}
                </div>
            </div>
        </slot>
    </div>
</template>
