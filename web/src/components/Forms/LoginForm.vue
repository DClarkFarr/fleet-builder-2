<script lang="ts" setup>
import BasicInput from "@/components/Controls/BasicInput.vue";
import useForm, { UseFormMethods } from "@/hooks/useForm";
import validator from "validator";

export type LoginFormState = {
    email: string;
    password: string;
};

const props = defineProps<{
    onSubmit: (
        values: LoginFormState,
        methods: UseFormMethods<{ email: string; password: string }>
    ) => Promise<void>;
}>();

const form = useForm({
    initialValues: {
        email: "",
        password: "",
    },
});

const email = form.useField("email", {
    validate: (value: string) => {
        if (!value) {
            return "Email is required";
        }
        if (!validator.isEmail(value)) {
            return "Email is invalid";
        }

        return "";
    },
});

const password = form.useField("password", {
    validate: (value: string) => {
        if (!value) {
            return "Password is required";
        }
        if (value.length < 6) {
            return "Password must be at least 6 characters";
        }

        return "";
    },
});

const onSubmit = async () => {
    console.log("calling handle submit");
    return form.submit(props.onSubmit);
};
</script>

<template>
    <div class="p-4 max-w-[450px]">
        <form @submit.prevent="onSubmit">
            <BasicInput
                name="name"
                label="Email"
                placeholder="Enter your email"
                :input="email"
            />
            <BasicInput
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                :input="password"
            />
            <button
                type="submit"
                class="btn btn-sky"
                :disabled="form.isSubmitting || form.isInvalid"
            >
                {{ form.isSubmitting ? "Loading..." : "Login" }}
            </button>
        </form>
    </div>
</template>
