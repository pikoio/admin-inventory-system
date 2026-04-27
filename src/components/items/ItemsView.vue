<script setup>

import ViewHeader from "@/components/app/ViewHeader.vue";
import {useProductsStore} from "@/stores/products.js";
import ItemRow from "@/components/items/ItemRow.vue";
import ItemsListHeader from "@/components/items/ItemsListHeader.vue";
import ItemsFilterMenu from "@/components/items/ItemsFilterMenu.vue";

const store = useProductsStore()

</script>

<template>
  <div class="items-view">
    <div class="header">
      <ViewHeader title="Items"/>
     <ItemsFilterMenu/>
    </div>
      <div class="items-list">
        <ItemsListHeader/>
        <ItemRow
            v-for="item in store.sortedProducts"
            :item="item"
            :key="item.id" />
      </div>
  </div>
</template>

<style scoped>
.items-view{
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 1.5rem
}
.header{
  display: flex;
  justify-content: space-between;
}
.items-list{
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem
}


</style>