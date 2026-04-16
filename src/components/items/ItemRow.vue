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
      <div class="warning-icon">
        <i v-if="isItemOutStock" class="pi pi-exclamation-circle"></i>
      </div>
      <div class="clm-2">
        <div class="stock-level" :class="{ out_stock: isItemOutStock }" >
          <p>{{ item.stock}}</p>
        </div>
        <div class="min-stock-level">
          <p>{{ item.minStockLevel}}</p>
        </div>
      </div>
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
  height: 100%;
  width: 5rem;
  gap: 0.75rem;
}
.stock .warning-icon{
  width: 1rem;
  display: flex;
  align-items: center;
  color: var(--color-red);
  font-size: 1.1rem;
}
.stock .warning-icon{
  display: flex;
  align-items: center;
}
.stock .clm-2{
  display: flex;
  flex-direction: column;
}
.stock .clm-2 .stock-level{
  height: 50%;
  font-size: 1.2rem;
  display: flex;
  align-items: end;
}
.stock .clm-2 .stock-level.out_stock{
  color: var(--color-red);
}
.stock .min-stock-level{
  height: 50%;
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