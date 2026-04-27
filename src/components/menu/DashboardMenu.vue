<script setup>

import DashboardMenuButton from "@/components/menu/DashboardMenuButton.vue";
import {ref} from "vue";

let isMenuOpen = ref(true)

const links = ref([
  { title: "Dashboard", link: "/dashboard", icon: "pi-database" },
  { title: "Items", link: "/items", icon: "pi-server" },
  { title: "Search", link: "/search", icon: "pi-search" },
  { title: "Tags", link: "/tags", icon: "pi-tag" },
  { title: "Reports", link: "/reports", icon: "pi-chart-line" },
])

</script>

<template>
  <div class="dashboard-menu" :class="{ closed: !isMenuOpen}">
    <div class="header">
      <div class="icon" @click="isMenuOpen = !isMenuOpen">
        <div class="inner"></div>
      </div>
      <h3 v-if="isMenuOpen" class="title">Rounded</h3>
    </div>
    <div class="items">
      <RouterLink
          v-for="link in links"
          :to="link.link">
        <DashboardMenuButton
            :is-menu-open="isMenuOpen"
            :icon="link.icon">
          {{ link.title }}
        </DashboardMenuButton>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .dashboard-menu {
    width: 13%;
    display: flex;
    background-color: var(--color-primary-1);
    flex-direction: column;
    box-shadow: var(--shadow-primary-1);
  }
  .dashboard-menu.closed {
    width: 5%;
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
    cursor: pointer;
  }
  .header .icon .inner{
    background-color: var(--color-primary-1);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    transition: width 0.3s, height 0.3s;
  }
  .header .icon .inner:hover{
    width: 2rem;
    height: 2rem;
  }
  .items{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>