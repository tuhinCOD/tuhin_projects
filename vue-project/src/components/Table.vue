<template>
    <table class="table table-bordered table-striped text-center">
        <slot></slot>
        <thead v-if="slots.thead">
            <tr>
                <slot name="thead"></slot>
            </tr>
        </thead>
        <tbody v-if="slots.tbody">
            <tr v-for="dt in props.data">
                <slot name="tbody" :td="dt"></slot>
            </tr>
        </tbody>
        <tfoot v-if="slots.tfoot">
            <tr>
                <slot name="tfoot"></slot>
            </tr>
        </tfoot>
    </table>
</template>

<script setup>
import { useSlots } from 'vue';

const props = defineProps({ 
    data: { type: [ Array, Object ] }
});

const slots = useSlots();
</script>

<style lang="scss" scoped>

</style>