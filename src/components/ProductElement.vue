<script setup lang="ts">
import {RouterLink} from "vue-router";
const {product} = defineProps(['product']);
</script>

<template>
    <div class="w-72 h-96 card-layout flex-col flew-wrap justify-around  items-center">
       
        <div class="flex w-full flex-row items-baseline justify-between align-center gap-2">
        <h2 class="text-center font-semibold text-xl w-[10rem]">{{product.title.substring(0, 50)}}</h2> 
        <div class="right-0 py-5  h-16 w-16 text-center rounded-full border-2 border-red-600">
            <p class="text-red-400 m-0">-{{ product.discountPercentage }}%</p>
        </div>
    </div>
        <img :src="product.thumbnail" :alt="`${product.id}_${product.title}`" class="rounded-xl h-32 w-full object-contain">
        <p>{{ product.description.substring(0,45) }}...</p>
        <div class="w-full flex justify-around">
            <RouterLink :to="{
                name: 'product',
                params: {
                    productId: product.id
                }
            }">
                <AButton >Read More</AButton>
            </RouterLink>
            <AButton><font-awesome-icon icon="fa-solid fa-cart-shopping" class=" text-green-600 w-6 h-6 cursor-pointer"/></AButton>
            <div class="text-right">
                <h2 class="line-through">{{ product.price }} $</h2>
                <h3 class="text-red-400 font-bold">{{ product.priceAfterDiscount }} $</h3>
            </div>
        </div>
    </div>
</template>
