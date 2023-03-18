<script lang="ts" setup>
import LoginForm from "@/components/Forms/LoginForm.vue";

const onSubmitForm = async (formValues: {
  email: string;
  password: string;
}) => {
  console.log("you sumbmitted", formValues);
};
</script>

<template>
  <LoginForm :on-submit="onSubmitForm" />
</template>
