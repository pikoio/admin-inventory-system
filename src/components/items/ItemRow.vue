<script setup>
import {computed} from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const isItemOutStock = computed(() => {
  return props.item.stock < props.item.minStockLevel
})
</script>

<template>
  <div class="item-row">
    <div class="item-img"></div>
    <div class="sku">
      <p>{{ item.sku}}</p>
    </div>
    <div class="category">
      <p>{{ item.category }}</p>
    </div>
    <div class="title">
      <p>{{ item.title }}</p>
    </div>

    <div class="stock">
      <div class="stock-level" :class="{ out_stock: isItemOutStock }" >
        <p>{{ item.stock}}</p>
      </div>
    </div>
    <div class="stock">
      <p>{{ item.minStockLevel}}</p>
    </div>
    <div class="units">
      <p>{{ item.unit }}</p>
    </div>
    <div class="price">
      <p>{{ item.price }}</p>
    </div>
    <div class="cost-price">
      <p>{{ item.costPrice}}</p>
    </div>
    <div class="last-restocked">
      <p>{{ item.lastRestocked}}</p>
    </div>
  </div>
</template>

<style scoped>
.item-row {
  height: 6rem;
  background-color: var(--color-white);
  box-shadow: var(--shadow-primary-1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 3rem;
}
.item-img {
  width: 4rem;
  height: 100%;
  border-radius: 50%;
  background-color: var(--color-primary-3);
}
.sku{
  width: 4.5rem;
}
.category{
  width: 7rem;
}
.title{
  width: 14rem;
}

.stock{
  display: flex;
  gap: 0.5rem;
  width: 5rem;
}
.stock .stock-level.out_stock{
  color: var(--color-red);
}
.units{
  width: 3rem;
}
.price, .cost-price{
  width: 5rem;
}
.last-restocked{
  width: 11rem;
}


</style>