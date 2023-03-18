<script lang="ts" setup>
import useHasSlot from "@/hooks/useHasSlot";
import { UseInput, RefType, UseInputRef } from "@/types/UseFormTypes";
import { computed } from "vue";
import ListIcon from "~icons/ic/sharp-do-not-disturb-on";

const props = withDefaults(
  defineProps<{
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

const hasSlot = useHasSlot();

const errors = computed(() => {
  if (!props.input.error?.length) {
    return [];
  }

  if (props.showFirstError) {
    return props.input.error?.slice(0, 1);
  }
  return props.input.error;
});

const stateProps = computed(() => {
  return {
    input: props.input,
    type: props.type,
    label: props.label,
    placeholder: props.placeholder,
    errors: errors,
  };
});

const inputRef = computed(() => props.input.ref as UseInputRef);
</script>

<template>
  <div class="field">
    <slot name="label" v-bind="stateProps">
      <label class="field__label" v-if="label">{{ label }}</label>
    </slot>

    <slot name="input" v-bind="stateProps">
      <input
        :type="type"
        v-model="input.value"
        :placeholder="placeholder"
        :ref="inputRef"
        class="field__input"
      />
    </slot>

    <div v-if="errors.length">
      <slot name="errors" v-bind="stateProps">
        <div
          class="field__error text-red-700 mb-2 flex items-center gap-x-2"
          v-for="(error, index) in errors"
          :key="index"
        >
          <div>
            <ListIcon />
          </div>
          <div>
            {{ error }}
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
