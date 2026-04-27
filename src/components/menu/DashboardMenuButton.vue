<script setup>
defineProps({
  icon: String,
  isMenuOpen: Boolean,
})
</script>

<template>
  <div class="dashboard-menu-button">
    <i :class="'pi ' + icon"></i>
    <slot v-if="isMenuOpen"/>
  </div>
</template>

<style scoped>
  .dashboard-menu-button {
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 2rem;
    gap: 0.8rem;
    color: var(--color-white);
    font-size: 1.1rem;
    transition: background-color 0.25s;
    cursor: pointer;
  }
  .dashboard-menu-button i{
    color: var(--color-white)
  }
  .dashboard-menu-button:hover {
    background-color: var(--color-primary-0);
  }
</style>