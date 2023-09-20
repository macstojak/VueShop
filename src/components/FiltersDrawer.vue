
<script setup lang="ts">
import {ref} from "vue";
import FilterItem from "@/components/FilterItem.vue";
import { productsStore } from "@/stores";
const open = ref(false);
const {filters} = productsStore;
console.log('filters :>> ', filters);
const afterOpenChange = (bool: boolean) => {
  console.log('open', bool);
};
const showDrawer = () => {
  
  open.value = true;
};



</script>
<template>
    <div>
        <Transition name="button">
    <div 
    class="z-[100] pl-[2rem] text-left right-[-8rem] cursor-pointer text-white rounded-l-xl py-3 bg-green-600 fixed top-[15%] h-12 w-64 text-xl rounded-r-0"
        type="primary"
        @click="showDrawer">{{ "< Filters" }}</div>
        </Transition>
        <a-drawer
        v-model:open="open"
        class="custom-class"
        root-class-name="root-class-name"
        :root-style="{ color: 'blue' }"
        style="color: red"
        title="Filters"
        placement="right"
        @after-open-change="afterOpenChange"
        >
          <FilterItem :key="filter" v-for="filter in filters" :filter="filter"/>
        </a-drawer> 
    </div>
</template>