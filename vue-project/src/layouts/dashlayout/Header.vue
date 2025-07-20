<template>
    <header class="d-flex">
        <button data-toggle="off-canvas" class="sidebar-btn">
            <i class="bi bi-chevron-left"></i>
        </button>
        <button data-toggle="md-canvas" class="sidebar-btn1 d-none">
            <i class="bi bi-chevron-right"></i>
        </button>
        <button data-toggle="on-canvas" class="btn btn-light d-none">
            <i class="bi bi-list"></i>
        </button>
        <div class="logo py-3 px-4">
            <h4>Dashboard</h4>
        </div>
        <div class="header-searchbar ms-auto py-3">
            <form class="d-flex input-group" role="search">
                <i class="bi bi-search input-group-text" id="basic-addon1"></i>
                <input class="form-control d-flex" type="search" placeholder="Search for anything..." aria-label="Search"  aria-describedby="basic-addon1"/>
            </form>
        </div>
        <div class="header-icon py-3 px-2 d-flex">
            <i class="bi bi-bell"></i>
        </div>
        <div class="header-id d-flex py-3 pe-4">
            <a href="#" class="rounded-pill bg-light d-flex text-decoration-none text-dark dropdown">
                <img src="../../assets/images/tuhin.jpg" class="p-2 d-block" alt="">
                <div class="detail p-2">
                    <p><b>Tuhin</b></p>
                    <p class="m-0">Developer</p>
                </div>
                <i class="bi bi-chevron-down p-2"></i>
            </a>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>