<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <div class="row g-1">
                <input type="hidden" v-model="field.id">
                <div class="col-6">
                    <Input type="text" id="email" label="Email" weight="sm" placeholder="Email..." v-model="field.email" :err="err.email" focus must />
                </div>
                <div class="col-6">
                    <Input type="text" id="mobile" label="Mobile" weight="sm" placeholder="Mobile..." v-model="field.mobile" :err="err.mobile" must />
                </div>
            </div>
        </div>                     
        <Button type="submit" :label="field.id ? 'Update' : 'Submit'"/>
        <Button type="button" label="Reset" class="ms-2" @click="resetForm" color="secondary"/>
    </form>
</template>

<script setup>
import { reactive, ref, toRef, watchEffect } from 'vue';
import { useDash } from '@/stores/dash';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

const field = reactive({ id:'', email: '', mobile: ''});
const err = reactive({ email: '', mobile: ''});

const props = defineProps({
    isEdited: { type: Boolean },
    modify: { type: Object }
});
const isEdited = toRef(props.isEdited);


const id = ref(1);
const dash = useDash();

const resetForm = () => {
    field.id = field.email = field.mobile = err.email = err.mobile = "";
}

const submitForm = async () => {
    let er = 0;
    if (field.email == "" || field.email == null || field.email == 0) {
        er++;
        err.email = "email required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.email)){
        err.email = "invalid email format";
    } else {
        err.email = "";
    }

    if (field.mobile == "" || field.mobile == null) {
        er++;
        err.mobile = "mobile required";
    } else {
        err.mobile = "";
    }
    
    if (er == 0 && field.id) {
        const data = {
            id: field.id,
            email: field.email,
            mobile: field.mobile
        }
        
        await dash.update(data);
        resetForm();
    } else if (er == 0) {
        const data = {
            id: id.value++,
            email: field.email,
            mobile: field.mobile
        }
        await dash.create(data);
        resetForm();
    }
};

watchEffect(() => {
    if (props.isEdited) {
        field.id = props.modify?.id;
        field.email = props.modify?.email;
        field.mobile = props.modify?.mobile;
    }
});

</script>

<style lang="scss" scoped>

</style>