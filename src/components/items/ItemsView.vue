<script setup>

import ViewHeader from "@/components/app/ViewHeader.vue";
import {useProductsStore} from "@/stores/products.js";
import ItemRow from "@/components/items/ItemRow.vue";
import ListHeader from "@/components/items/ListHeader.vue";

const store = useProductsStore()

</script>

<template>
  <div class="items-view">
    <ViewHeader title="Items"/>
    <div class="content">
      <div class="filter-menu">
      </div>
      <div class="items-list">
        <ListHeader/>
        <ItemRow v-for="item in store.products" :item="item" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.items-view{
  display: flex;
  flex-direction: column;
  flex: 1;
}
.content{
  display: flex;
}
.filter-menu{
  width: 15%;
}
.list-header{

}
.items-list{
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem
}


</style>