<script setup lang="ts">
import useUserStore from "@/stores/useUserStore";

const user = useUserStore();

user.refresh();
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
