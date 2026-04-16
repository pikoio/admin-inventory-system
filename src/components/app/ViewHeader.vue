<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,

    validator: (value) => {
      return value.length < 15
    }
  }
})
</script>

<template>
  <h2 class="view-header">{{ title }}</h2>
</template>

<style scoped>
.view-header {
  color: var(--color-primary-1);
  height: 4.5rem;
  display: flex;
  align-items: center;
}
</style>