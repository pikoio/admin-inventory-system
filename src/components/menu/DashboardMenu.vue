<script setup>

import DashboardMenuButton from "@/components/menu/DashboardMenuButton.vue";
</script>

<template>
  <div class="dashboard-menu">
    <div class="header">
      <div class="icon">
        <div class="inner"></div>
      </div>
      <h3 class="title">Rounded</h3>
    </div>
    <div class="items">
      <RouterLink to="/"><DashboardMenuButton :icon="'pi-database'">Dashboard</DashboardMenuButton></RouterLink>
      <RouterLink to="/items"><DashboardMenuButton :icon="'pi-server'">Items</DashboardMenuButton></RouterLink>
      <RouterLink to="/search"><DashboardMenuButton :icon="'pi-search'">Search</DashboardMenuButton></RouterLink>
      <RouterLink to="/tags"><DashboardMenuButton :icon="'pi-tag'">Tags</DashboardMenuButton></RouterLink>
      <RouterLink to="/reports"><DashboardMenuButton :icon="'pi-chart-line'">Reports</DashboardMenuButton></RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .dashboard-menu {
    width: 15%;
    display: flex;
    background-color: var(--color-primary-1);
    flex-direction: column;
    box-shadow: var(--shadow-primary-1);
  }
  .header{
    height: 5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--color-white);
    font-size: 1.5rem;
    padding: 1rem;
  }
  .header .title{
    color: var(--color-white);
  }
  .header .icon{
    background-color: var(--color-white);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header .icon .inner{
    background-color: var(--color-primary-1);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
  .items{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>