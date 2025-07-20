<template>
    <div class="card" :class="{ 'card-body' : slots.default }">
        <slot></slot>
        <div class="card-header" v-if="slots.header">
            <slot name="header"></slot>
        </div>
        <div class="card-body" v-if="slots.body">
            <slot name="body"></slot>
        </div>
        <div class="card-footer" v-if="slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots();
</script>

<style lang="scss" scoped>

</style>