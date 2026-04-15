
import {createMemoryHistory, createRouter} from "vue-router";
import DashboardView from "@/components/dashboard/DashboardView.vue";
import SearchView from "@/components/search/SearchView.vue";
import TagsView from "@/components/tags/TagsView.vue";
import ReportsView from "@/components/reports/ReportsView.vue";
import ItemsView from "@/components/items/ItemsView.vue";

const routes = [
    { path: '/', component: DashboardView },
    { path: '/items', component: ItemsView },
    { path: '/search', component: SearchView },
    { path: '/tags', component: TagsView },
    { path: '/reports', component: ReportsView }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})