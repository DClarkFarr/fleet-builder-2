<script lang="ts" setup>
import { reactive } from "vue";
import { useForm } from "vue-hooks-form";
import Schema from "async-validator";
import BasicInput from "@/components/Controls/BasicInput.vue";

const props = defineProps<{
  onSubmit: (values: any) => Promise<void>;
}>();

const form = useForm({
  defaultValues: {
    email: "",
    password: "",
  },
});

const email = form.useField("email", {
  rule: {
    required: true,
    type: "email",
  },
});

const password = form.useField("password", {
  rule: {
    required: true,
    type: "string",
    min: 5,
  },
});

const onSubmit = async () => {
  return form.handleSubmit(props.onSubmit);
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <BasicInput :input="email" label="Email" placeholder="Enter your email" />
    <BasicInput
      :input="password"
      label="Password"
      placeholder="Enter your password"
      type="password"
    />
    <button type="submit" class="btn btn--primary">Login</button>
  </form>
</template>
