<script setup>
import {computed, ref} from "vue";
import {useProductsStore} from "@/stores/products.js";

const props = defineProps({
  column: {
    type: String,
    required: true
  }
})
const productsStore = useProductsStore();

const isColumnActive = computed(() => {
  return props.column === productsStore.sortOptions.key
})

const handleSortSwitch = ()=> {
  productsStore.sortOptions.key =  props.column
  productsStore.sortOptions.order = sortSwitch.value
}
</script>

<template>
  <div @click="handleSortSwitch" class="list-header-item">
    <i class="pi pi-sort-alt"></i>
    <slot/>
  </div>
</template>

<style scoped>
.list-header-item {
  display: flex;
  align-items: center;
  color: var(--color-white);
  gap: 0.5rem;
  cursor: pointer;
}
</style>