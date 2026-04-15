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
  padding-bottom: 2rem;
  padding-top: 2rem;
}
</style>