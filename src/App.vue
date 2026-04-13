<script setup>
import {useProductsStore} from "@/stores/products.js";
import DashboardMenu from "@/components/DashboardMenu.vue";
import AppHeader from "@/components/AppHeader.vue";
import InventoryDashboard from "@/components/InventoryDashboard.vue";
import AppFooter from "@/components/AppFooter.vue";

const store = useProductsStore()

</script>

<template>
  <div class="app-wrapper">
    <main class="main-content">
      <DashboardMenu/>
      <div class="container">
        <AppHeader/>
        <InventoryDashboard/>
        <AppFooter/>
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>
