<script setup>

</script>

<template>
  <div class="app-header">
    <p class="user-nick">Janush Kowalski</p>
    <div class="user-icon">
      <div class="eye">
        <div class="inner"></div>
      </div>
      <div class="eye">
        <div class="inner"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .app-header{
    height: 5rem;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem
  }
  .user-icon{
    width: 4rem;
    height: 4rem;
    background-color: var(--color-primary-1);
    border-radius: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  }
  .user-icon .eye{
    height: 1rem;
    width: 1rem;
    background-color: var(--color-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user-icon .eye .inner{
    width: 0.5rem;
    height: 0.5rem;
    background-color: black;
    border-radius: 50%;
  }
  .user-nick{
    font-size: 1.2rem;
    color: var(--color-primary-1);
  }

</style>