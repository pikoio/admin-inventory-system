<script setup>
import {useCategoriesStore} from "@/stores/categories.js";
import {ref} from "vue";
import {useProductsStore} from "@/stores/products.js";

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()



</script>

<template>
  <div class="filter-menu">
    <p>Category</p>
    <select v-model="productsStore.filterCategory">
      <option value="">All</option>
      <option
          v-for="category in categoriesStore.categories"
          :value="category.name">
        {{ category.name }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.filter-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-primary-1);
}

</style>