<template>
    <a-collapse >
      <a-collapse-panel :key="filter" :header="header">      
           <div v-if="filter === 'rating'" class="flex flex-col flex-1">
            <ARate allowClear v-model:value="star"/>
          </div>
        <a-checkbox-group v-else :options="options" v-model:value="chosenFilters">
        </a-checkbox-group>
      </a-collapse-panel>
    </a-collapse>
  </template>
  <script setup lang="ts">
  import {ref, watch} from 'vue';
  import {type ProductI} from "@/stores/Product";
  import {productsStore} from "@/stores/index";
  const {filter} = defineProps({filter: {
    type: String,
  required: true}
  });
  const {products} = productsStore;
  const options = [...new Set(products.flatMap((p: ProductI) => p[filter as keyof ProductI]))];
  const star = ref(0);
  const header = filter.charAt(0).toUpperCase() + filter.slice(1, filter.length);
  const chosenFilters = ref<string[]>([]);
  watch([chosenFilters, star],() => {
    if(chosenFilters.value.length > 0) {
      if(star.value > 0){
        productsStore.setActiveFilters({key: filter, value: [...star.value.toString()]});
        return;
      }
      productsStore.setActiveFilters({key: filter, value: chosenFilters.value});
    }else {
      productsStore.setActiveFilters({key: filter, value: undefined});
    }
  });
  </script>