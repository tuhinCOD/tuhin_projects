<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-8 offset-2">
                <Card>
                    <Form :modify="modifyData" :isEdited="isEdited"/>
                </Card>
            </div>
        </div>
        <div class="row">
            <div class="col-8 offset-2">
                <Tabledata @edit="modify" :store="showdata"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useDash } from '@/stores/dash';
import Form from './Form.vue';
import Card from '@/components/Card.vue';
import Tabledata from './Tabledata.vue';

const dash = useDash();
const showdata = computed(() => dash.getdashdatas);

const modifyData = ref();
const isEdited = ref(false);

const modify = async (id) => {
    await dash.fetchSingle(id).then((res) => {
        isEdited.value = true;
        modifyData.value = res.data;
    }).finally(() => isEdited.value = false);
};

onMounted(async () => {
    await dash.fetchAll();
})

</script>

<style lang="scss" scoped>

</style>