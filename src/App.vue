<script setup lang="ts">
import {ref, onBeforeMount} from "vue";
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { productsStore } from "@/stores";

const url = 'https://dummyjson.com/products';
const loading = ref(false);
onBeforeMount(async () => {
  await getAllProducts();
});

async function getAllProducts() {
  loading.value = true;
  const json = await fetch(url);
  const data = await json.json();
  productsStore.setProducts(data.products);
  loading.value = false;
}
</script>

<template>
  <div>
    <NavBar/>
    <div v-if="loading===true"  class="w-screen h-screen">
      <font-awesome-icon :icon="['fas', 'spinner']" spin class="relative top-[40%] left-[45%] text-center mx-auto px-2 w-44 h-44 text-green-600"/>
    </div>
    
    <RouterView v-else/>
    <FooterComponent/>
</div>
 
</template>

<style scoped>

</style>