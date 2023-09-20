<template>
    <div class="px-12 card-layout flex flex-col min-h-[40rem]">
        <div class="overflow-hidden border-2 border-green-500 rounded-xl my-6">
          <h1 class="scroll-text text-3xl my-3">BUY NOW! Discount {{ product.discountPercentage }}% !</h1>
        </div>
       <div class="mx-6  flex flex-row justify-between flex-wrap">
        <h1 class="text-5xl ">{{ product.title }}</h1>
        <div class="flex flex-row">
        <h1 class="ml-6 text-3xl line-through">{{product.price }}$</h1>
        <h1 class="ml-6 text-3xl text-red-500">{{(product.price - (product.price * product.discountPercentage*0.01)).toFixed(2) }}$</h1>
    </div>
    </div>
        <h2 class="mb-24">{{ product.description }}</h2>
    <v-gallery :images="product.images" :index="index" @close="index = null"/>
    <div class="flex flex-row flex-wrap justify-evenly">
        <div
        class="m-2 rounded-xl"
        v-for="(image, imageIndex) in product.images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
        ></div>
    </div>

    
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRoute} from "vue-router";
import {productsStore} from "@/stores";
const route = useRoute();
const index = ref<number | null>(null);
const id = Array.isArray(route.params.productId) ? route.params.productId[0] : route.params.productId;
const product = productsStore.findProduct(parseInt(id));
</script>

<style>

.scroll-text {
  /* animation properties */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  
  -moz-animation: my-animation 15s linear infinite;
  -webkit-animation: my-animation 15s linear infinite;
  animation: my-animation 15s linear infinite;
}

/* for Firefox */
@-moz-keyframes my-animation {
  from { -moz-transform: translateX(100%); }
  to { -moz-transform: translateX(-100%); }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from { -webkit-transform: translateX(100%); }
  to { -webkit-transform: translateX(-100%); }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>