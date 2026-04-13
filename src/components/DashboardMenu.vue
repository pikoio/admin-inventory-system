<script setup>

import DashboardMenuButton from "@/components/DashboardMenuButton.vue";
</script>

<template>
  <div class="dashboard-menu">
    <div class="header">
      <div class="icon">
        <div class="inner"></div>
      </div>
      <p>Rounded</p>
    </div>
    <div class="items">
      <DashboardMenuButton :icon="'pi-database'">Dashboard</DashboardMenuButton>
      <DashboardMenuButton :icon="'pi-server'">Items</DashboardMenuButton>
      <DashboardMenuButton :icon="'pi-search'">Search</DashboardMenuButton>
      <DashboardMenuButton :icon="'pi-tag'">Tags</DashboardMenuButton>
      <DashboardMenuButton :icon="'pi-chart-line'">Reports</DashboardMenuButton>
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