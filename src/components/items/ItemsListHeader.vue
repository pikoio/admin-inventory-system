<script setup>

</script>

<template>
  <div class="list-header">
    <div class="img"></div>
    <div class="sku">
      <p>SKU</p>
    </div>
    <div class="category">
      <p>Category</p>
    </div>
    <div class="title">
      <p>Title</p>
    </div>
    <div class="stock">
      <p>Stock/</p>
      <p>Min</p>
    </div>
    <div class="units">
      <p>Unit</p>
    </div>
    <div class="price">
      <p>Price</p>
    </div>
    <div class="cost-price">
      <p>Cost price</p>
    </div>
    <div class="last-restocked">
      <p>Last restocked</p>
    </div>
  </div>
</template>

<style scoped>
.list-header {
  height: 4.5rem;
  background-color: var(--color-primary-2);
  box-shadow: var(--shadow-primary-1);
  border-radius: 1rem;
  display: flex;
  padding: 1rem;
  gap: 3rem;
  color: var(--color-white);
  font-size: 1.1rem;
}
.sku, .category, .title, .stock, .units, .stock, .price, .cost-price, .last-restocked {
  display: flex;
  align-items: center;
}
.img{
  width: 4rem
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
  width: 4rem;
  flex-direction: column;
}
.units{
  width: 3rem;
}
.price, .cost-price{
  width: 5rem
}
.last-restocked{
  width: 11rem;
}


</style>