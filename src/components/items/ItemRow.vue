<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
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
      <div class="stock-level">
        <p>{{ item.stock}}/</p>
      </div>
      <div class="min-stock-level">
          <p>{{ item.minStockLevel}}</p>
      </div>
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
  gap: 2rem;
}
.item-img {
  border: 1px solid red;
  width: 4rem;
  height: 100%;
  border-radius: 50% ;
}
.sku{
  border: 1px solid red;
  width: 4.5rem;
}
.category{
  border: 1px solid red;
  width: 7rem;
}
.title{
  border: 1px solid red;
  width: 14rem;
}
.stock{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 2rem;
}
.stock .stock-level{
  border: 1px solid red;
  height: 70%;
  font-size: 2rem;
}
.stock .min-stock-level{
  border: 1px solid red;
  height: 30%;
}

</style>