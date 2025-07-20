<template>
    <Table :data="props.store.filter(i => i !== null && i !== undefined)">
        <template #thead>
            <th>#</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
        </template>
        <template #tbody="{td}">
            <td>{{ td.id }}</td>
            <td>{{ td.email }}</td>
            <td>{{ td.mobile }}</td>
            <td class="text-center">
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-warning" @click="dataModify(td.id)"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-danger" @click="dataDelete(td.id)"><i class="bi bi-trash"></i></button>
                </div>
            </td>
        </template>
    </Table>
</template>

<script setup>
import { useDash } from '@/stores/dash';
import Table from '@/components/Table.vue';

const props = defineProps({
    store: {type: [Object, Array]}
})

const dash = useDash();

const emit = defineEmits(['edit']);
const dataModify = (id) => emit('edit', id);

const dataDelete = async (id) => {
    await dash.remove(id);
};
</script>

<style lang="scss" scoped>

</style>