import { defineStore } from 'pinia'
import {ref} from "vue";

export const useCategoriesStore = defineStore('categories', () => {

    const categories = ref([
        {
            id: 101,
            name: 'Juice'
        },
        {
            id: 102,
            name: 'Dairy',
        },
        {
            id: 103,
            name: 'Bakery'
        },
        {
            id: 104,
            name: 'Meat'
        },
        {
            id: 105,
            name: 'Vegetable'
        },
        {
            id: 106,
            name: 'Fruit'
        },
        {
            id: 107,
            name: 'Confectionery'
        },
        {
            id: 108,
            name: 'Grocery'
        },
        {
            id: 109,
            name: 'Frozen'
        },
        {
            id: 110,
            name: 'Seafood'
        }
    ])

    return { categories }
})
