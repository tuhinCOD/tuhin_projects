<template>
    <div class="wrapper">
        <Sidebar/>
        <div class="mainbody">
            <Header/>
            <div class="content">
                <slot></slot>
            </div>
            <footer></footer>
        </div>
    </div>
</template>

<script setup>
    import Sidebar from './Sidebar.vue';
    import Header from './Header.vue';
</script>

<style lang="scss" scoped>

</style>