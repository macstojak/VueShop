<script setup lang="ts">
import ProductElement from "@/components/ProductElement.vue";
    const {products} = defineProps(['products']);
</script>
<template>
    <div class=" shadow-md my-6 p-2 w-full h-full flex flex-row flex-wrap justify-around">
        <ProductElement v-for="product in products" :product="product" :key="product.id"/>        
    </div>
</template>