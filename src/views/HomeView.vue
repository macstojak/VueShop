<script setup lang="ts">

import {ref} from "vue";
import ProductsList from "@/components/ProductsList.vue";
import UserAuth from "@/components/UserAuth.vue";
import ModalTemplate from "@/components/ModalTemplate.vue";
import CartComponent from "@/components/CartComponent.vue";
import FiltersDrawer from "@/components/FiltersDrawer.vue";
import { cartModal, userModal, productsStore } from "../stores";
const take = ref(5);


</script>

<template>
  <FiltersDrawer/>
  <main>
    <div class="overflow-hidden shadow-md">
   <h1 class="scroll-text w-full  h-12 text-center font-bold text-xl py-6">TOP 5 DAILY PROMO</h1>
  </div>
  <ProductsList :take="take" :products="productsStore.fiveBiggestDiscount"/>
  <ModalTemplate :open="cartModal.getOpen" :setOpen="cartModal.setOpen" title="Cart">
   <CartComponent/>
  </ModalTemplate>
  <ModalTemplate :open="userModal.getOpen" :setOpen="userModal.setOpen" title="User">
   <UserAuth/>
  </ModalTemplate>
  </main>
</template>

