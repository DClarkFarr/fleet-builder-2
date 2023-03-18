<script lang="ts" setup>
import LoginForm, { LoginFormState } from "@/components/Forms/LoginForm.vue";
import { UseFormMethods } from "@/hooks/useForm";
import AuthService from "@/services/AuthService";

const onSubmitForm = async (
    formValues: LoginFormState,
    methods: UseFormMethods<LoginFormState>
) => {
    return AuthService.login(formValues)
        .then(() => {
            console.log("success!");
            methods.reset();
            methods.setMessage("Login successful!", "success");
        })
        .catch((err) => {
            console.log("error!");
            if (err instanceof Error) {
                methods.setMessage(err.message, "error");
            }
        });
};
</script>

<template>
    <LoginForm :on-submit="onSubmitForm" />
</template>
