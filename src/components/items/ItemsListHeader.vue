<script setup>

import ItemListHeaderItem from "@/components/items/ItemListHeaderItem.vue";
const columns = [
  {title: 'SKU', dbTitle: 'sku'},
  {title: 'Category', dbTitle: 'category'},
  {title: 'Title', dbTitle: 'title'},
  {title: 'Stock', dbTitle: 'stock'},
  {title: 'Min stock', dbTitle: 'minStock'},
  {title: 'Unit', dbTitle: 'unit'},
  {title: 'Price', dbTitle: 'price'},
  {title: 'Cost price', dbTitle: 'costPrice'},
  {title: 'Last restocked', dbTitle:'lastRestocked'}
]
</script>

<template>
  <div class="list-header">
    <span/>
    <ItemListHeaderItem
        v-for="column in columns"
        :column="column.dbTitle">
      {{ column.title }}
    </ItemListHeaderItem>
  </div>
</template>

<style scoped>
.list-header {
  height: 4.5rem;
  padding: 1rem;
  background-color: var(--color-primary-2);
  box-shadow: var(--shadow-primary-1);
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 4rem 4.5rem 7rem 14rem 5rem 5rem 3rem 5rem 5rem 11rem;
  gap: 3rem
}
</style>