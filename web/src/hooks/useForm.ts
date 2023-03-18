import {
    reactive,
    computed,
    readonly,
    ref,
    ComponentPublicInstance,
} from "vue";

import { get, set } from "lodash";

export type UseInput = ReturnType<ReturnType<typeof useForm>["useField"]>;

type FieldNode = Element | ComponentPublicInstance | null;

export const getDOMNode = (value: FieldNode) => {
    if (value === null || value instanceof Element) {
        return value;
    }
    return value.$el as HTMLElement;
};

export type UseFormMethods<T extends Record<string, string>> = {
    setDisabled: (bool: boolean) => void;
    setIsSubmitting: (bool: boolean) => void;
    setValue: (name: keyof T, value: T[keyof T]) => void;
    setError: (name: keyof T, error: string) => void;
    setDirty: (name: keyof T, bool: boolean) => void;
    setFocus: (name: keyof T, bool: boolean) => void;
    validate: () => void;
    reset: () => void;
    setMessage: (text: string, type?: "success" | "error" | "info") => void;
    clearMessage: () => void;
};

const useForm = <T extends Record<string, string>>(props: {
    initialValues: T;
}) => {
    type Key = keyof T;

    type FieldProps = {
        validate: (value: T[Key]) => string | Promise<string>;
    };

    const makeFormErrors = () => {
        return Object.keys(props.initialValues).reduce((acc, key) => {
            acc[key as Key] = "";
            return acc;
        }, {} as { [K in Key]: string });
    };

    const makeFormDirty = () => {
        return Object.keys(props.initialValues).reduce((acc, key) => {
            acc[key as Key] = false;
            return acc;
        }, {} as { [K in Key]: boolean });
    };
    const makeFormFocus = () => {
        return Object.keys(props.initialValues).reduce((acc, key) => {
            acc[key as Key] = false;
            return acc;
        }, {} as { [K in Key]: boolean });
    };

    const form = reactive({ ...props.initialValues }) as T;
    const formErrors = reactive(makeFormErrors());
    const formDirty = reactive(makeFormDirty());
    const formFocus = reactive(makeFormFocus());
    const validators = ref<Partial<{ [K in Key]: FieldProps["validate"] }>>({});
    const disabled = ref(false);

    const message = ref<{ text: string; type: "success" | "error" | "info" }>({
        text: "",
        type: "error",
    });

    const setMessage = (
        text: string,
        type: "success" | "error" | "info" = "error"
    ) => {
        message.value = { text, type };
    };

    const clearMessage = () => {
        message.value = { text: "", type: "error" };
    };

    const setDisabled = (bool: boolean) => {
        disabled.value = bool;
    };

    const isSubmitting = ref(false);

    const setIsSubmitting = (bool: boolean) => {
        isSubmitting.value = bool;
    };

    const setValue = (name: Key, value: T[Key]) => {
        set(form, name, value);

        setDirty(name, value !== props.initialValues[name]);
        validateField(name);
    };
    const setError = (name: Key, error: string) => {
        set(formErrors, name, error);
    };
    const setDirty = (name: Key, bool: boolean) => {
        set(formDirty, name, bool);
    };
    const setFocus = (name: Key, bool: boolean) => {
        set(formFocus, name, bool);
    };

    const validateField = async (name: Key) => {
        if (validators.value[name]) {
            const msg = await validators.value[name](form[name]);
            setError(name, msg);
        }
    };

    const validate = () => {
        const promises = Object.keys(validators.value).map((name) => {
            return validateField(name as Key);
        });

        return Promise.all(promises);
    };

    const getFormValues = () => {
        return Object.keys(form).reduce((acc, key) => {
            acc[key as Key] = form[key] as T[Key];
            return acc;
        }, {} as T);
    };

    const submit = async (
        fn: (values: T, methods: UseFormMethods<T>) => Promise<void>
    ) => {
        clearMessage();
        await validate();

        if (!isInvalid.value) {
            setIsSubmitting(true);
            try {
                await fn(getFormValues(), {
                    setDisabled,
                    setIsSubmitting,
                    setValue,
                    setError,
                    setDirty,
                    setFocus,
                    validate,
                    reset,
                    setMessage,
                    clearMessage,
                });
                setIsSubmitting(false);
            } catch (err) {
                setIsSubmitting(false);
                throw err;
            }
        }
    };

    const reset = () => {
        Object.assign(
            form,
            Object.keys(form).reduce((acc, key) => {
                acc[key as Key] = "" as T[Key];
                return acc;
            }, {} as T)
        );

        Object.assign(formErrors, makeFormErrors());

        Object.assign(formDirty, makeFormDirty());

        Object.assign(formFocus, makeFormFocus());

        clearMessage();
    };

    const useField = (name: Key, fieldProps: FieldProps) => {
        const fieldRef = ref<FieldNode | null>(null);

        if (fieldProps.validate) {
            validators.value[name] = fieldProps.validate;
        }

        const value = computed({
            get: () => get(form, name),
            set: (newValue) => {
                setValue(name, newValue);
            },
        });

        const getRef = (r: FieldNode | null) => {
            const domEl = getDOMNode(r);

            if (domEl && !fieldRef.value) {
                domEl.addEventListener("focus", () => {
                    setFocus(name, true);
                });
                domEl.addEventListener("blur", () => {
                    setFocus(name, false);
                });

                fieldRef.value = r;
            }

            return fieldRef.value;
        };

        return reactive({
            value,
            ref: getRef,
            error: computed(() => get(formErrors, name)),
            dirty: computed(() => get(formDirty, name)),
            focus: computed(() => get(formFocus, name)),
            showError: computed(
                () => get(formDirty, name) && !!get(formErrors, name)
            ),
            isInvalid: computed(() => !!get(formErrors, name)),
        });
    };

    const isInvalid = computed(() => {
        var val = Object.keys(formErrors).some((key) => !!get(formErrors, key));
        console.log("calculating form invalid", val);

        return val;
    });

    const isDirty = computed(() => {
        return Object.keys(formDirty).some((key) => get(formDirty, key));
    });

    return reactive({
        values: readonly(form),
        errors: readonly(formErrors),
        dirty: readonly(formDirty),
        focus: readonly(formFocus),
        isInvalid,
        isDirty,
        isSubmitting,
        disabled,
        setDisabled,
        setIsSubmitting,
        reset,
        submit,
        validate,
        setValue,
        setError,
        setDirty,
        useField,
        message,
        setMessage,
        clearMessage,
    });
};

export default useForm;
