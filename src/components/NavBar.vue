<template>
    <div class="flex items-center align-baseline text-green-600 justify-between mx-2 p-4 px-12  h-16 shadow-md sticky">
        <RouterLink to="/">
            <img class="rounded-md" src="../assets/VueShop.png" alt="">
        </RouterLink>
        <div class="flex items-center">
            <AButton type="text" @click.prevent="userModal.setOpen()">
                <font-awesome-icon icon="fa-solid fa-user" class=" text-green-600 w-6 h-6 cursor-pointer"></font-awesome-icon>
            </AButton>
            <AButton type="text" @click.prevent="cartModal.setOpen()">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-green-600 w-6 h-6 cursor-pointer"></font-awesome-icon>
            </AButton>
        </div>
    </div>
</template>
<script setup lang="ts">
    import {RouterLink} from "vue-router";
    import { cartModal, userModal } from "@/stores";


</script>
<style scoped>

</style>