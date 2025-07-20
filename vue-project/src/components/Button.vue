<template>
    <button :class="`btn ${$attrs.color ? 'btn-' + $attrs.color : 'btn-primary'} ${$attrs.weight ? 'btn-' + $attrs.weight : ''}`" v-bind="$attrs">
        <span :class="$attrs.icon ? 'pe-2' : ''">{{ $attrs.label }}</span>
        <span v-if="$attrs.icon"><i :class="$attrs.icon"></i></span>
    </button>
</template>

<script setup>
import { useAttrs, useSlots } from 'vue';

defineOptions({ inheritAttrs : false });

const $attrs = useAttrs();
const slots = useSlots();
</script>

<style lang="scss" scoped>

</style>