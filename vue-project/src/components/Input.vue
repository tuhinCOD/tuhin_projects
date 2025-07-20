<template>
    <label :for="$attrs.id" :class="`form-label col-form-label${$attrs.weight ? '-' + $attrs.weight : ''} position-relative`">
        <span>{{ $attrs.label }}</span>
        <div :class="props.must ? 'must' : 'd-none'"></div>
    </label>
    <input class="form-control shadow-none" v-model="model" v-bind="$attrs" :class="{['form-control' + ($attrs.weight ? '-' + $attrs.weight : '')] : $attrs.weight}">
    <div class="form-text text-danger fw-bold" style="font-size: 10px;">{{ props.err }}</div>
</template>

<script setup>
import { useAttrs, onMounted, nextTick } from 'vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
    focus: { type: Boolean },
    must: { type: Boolean },
    err: { type: String }
})
const $attrs = useAttrs();

const model = defineModel();

onMounted(() => { props.focus ? nextTick(() => document.querySelector(`#${$attrs.id}`).focus()) : false });
</script>

<style lang="scss" scoped>
.must::after{
    content: "*";
    position: absolute;
    top: 5px;
    right: -7.5px;
    color: red;
}
</style>