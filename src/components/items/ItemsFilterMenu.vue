<script setup>
import {useCategoriesStore} from "@/stores/categories.js";

let store = useCategoriesStore()
</script>

<template>
  <div class="filter-menu">
    <p class="header-1">Filters</p>
    <div class="filter-block">
      <p class="header-2">Categories</p>
      <p v-for="category in store.categories" class="header-3">{{ category.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.filter-menu {
  background-color: var(--color-white);
  box-shadow: var(--shadow-primary-1);
  border-radius: 1rem;

  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  color: var(--color-primary-1)
}
.header-1{
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  display: flex;
  gap: 0.5rem
}
.header-2{
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
}
.header-2:hover{
  text-decoration: underline;
}
.header-3{
  margin-left: 1.5rem;
  margin-bottom: 0.4rem;
  cursor: pointer;
}
.header-3:hover{
  text-decoration: underline;
}
.filter-block{
  display: flex;
  flex-direction: column;
}

</style>