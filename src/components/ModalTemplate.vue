<template>
   <a-modal
      :open="open"
      :title="title"
      centered
      @cancel="setOpen()"
      @ok="setOpen()"
    >
      
    </a-modal>
<div></div>
</template>

<script setup lang="ts">
const {open, setOpen, title} = defineProps(['open', 'setOpen', 'title']);


</script>