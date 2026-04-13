import { defineStore } from 'pinia'
import {ref} from "vue";

export const useProductsStore = defineStore('products', () => {

    const products = ref([
        {
            "id": "08a0724e-1d80-4068-a799-4c9a42d00356",
            "sku": "JUS-001",
            "title": "Apple Juice 100%",
            "category": "Juice",
            "price": 4.30,
            "costPrice": 2.10,
            "stock": 60,
            "minStockLevel": 15,
            "unit": "pcs",
            "lastRestocked": "2026-05-10T10:00:00Z"
        },
        {
            "id": "12b1835f-2e91-5179-b800-5d0b53e11467",
            "sku": "DAI-002",
            "title": "Greek Yogurt Natural",
            "category": "Dairy",
            "price": 1.50,
            "costPrice": 0.70,
            "stock": 8,
            "minStockLevel": 20,
            "unit": "pcs",
            "lastRestocked": "2026-03-28T08:30:00Z"
        },
        {
            "id": "23c2946g-3f02-6280-c911-6e1c64f22578",
            "sku": "BAK-003",
            "title": "Whole Grain Bread",
            "category": "Bakery",
            "price": 2.10,
            "costPrice": 0.90,
            "stock": 25,
            "minStockLevel": 10,
            "unit": "pcs",
            "lastRestocked": "2026-04-01T06:00:00Z"
        },
        {
            "id": "34d3057h-4g13-7391-d022-7f2d75g33689",
            "sku": "MEA-004",
            "title": "Chicken Breast",
            "category": "Meat",
            "price": 8.50,
            "costPrice": 4.20,
            "stock": 15,
            "minStockLevel": 5,
            "unit": "kg",
            "lastRestocked": "2026-03-30T14:15:00Z"
        },
        {
            "id": "45e4168i-5h24-8402-e133-8g3e86h44790",
            "sku": "VEG-005",
            "title": "Fresh Tomatoes",
            "category": "Vegetable",
            "price": 3.20,
            "costPrice": 1.10,
            "stock": 40,
            "minStockLevel": 20,
            "unit": "kg",
            "lastRestocked": "2026-03-31T09:00:00Z"
        },
        {
            "id": "56f5279j-6i35-9513-f244-9h4f97i55801",
            "sku": "FRU-006",
            "title": "Bananas Premium",
            "category": "Fruit",
            "price": 1.80,
            "costPrice": 0.60,
            "stock": 100,
            "minStockLevel": 30,
            "unit": "kg",
            "lastRestocked": "2026-03-25T11:45:00Z"
        },
        {
            "id": "67g6380k-7j46-0624-g355-0i5g08j66912",
            "sku": "CON-007",
            "title": "Dark Chocolate 70%",
            "category": "Confectionery",
            "price": 2.50,
            "costPrice": 1.30,
            "stock": 55,
            "minStockLevel": 10,
            "unit": "pcs",
            "lastRestocked": "2026-02-15T16:20:00Z"
        },
        {
            "id": "78h7491l-8k57-1735-h466-1j6h19k77023",
            "sku": "GRO-008",
            "title": "Basmati Rice 1kg",
            "category": "Grocery",
            "price": 4.00,
            "costPrice": 1.80,
            "stock": 3,
            "minStockLevel": 15,
            "unit": "pcs",
            "lastRestocked": "2026-01-20T12:00:00Z"
        },
        {
            "id": "89i8502m-9l68-2846-i577-2k7i20l88134",
            "sku": "FRO-009",
            "title": "Frozen Green Peas",
            "category": "Frozen",
            "price": 1.95,
            "costPrice": 0.85,
            "stock": 22,
            "minStockLevel": 12,
            "unit": "pcs",
            "lastRestocked": "2026-03-10T15:30:00Z"
        },
        {
            "id": "90j9613n-0m79-3957-j688-3l8j31m99245",
            "sku": "SEA-010",
            "title": "Fresh Salmon Fillet",
            "category": "Seafood",
            "price": 18.90,
            "costPrice": 11.50,
            "stock": 6,
            "minStockLevel": 5,
            "unit": "kg",
            "lastRestocked": "2026-04-01T07:10:00Z"
        }

    ])

    return { products }
})
//
// export const useProducts = defineStore('products', {
//     state: {
//         /** @type {{
//          * id:number,
//          * sku:string,
//          * title:string,
//          * category:string,
//          * price:number,
//          * costPrice:number,
//          * stock:number,
//          * minStockLevel:number,
//          * lastRestocked:string,
//          * supplier:string
//          * }[]}*/
//         products: [
//             {
//                 id: 1,
//                 title: 'Product 1',
//                 category: 'Category 1',
//                 price: 100,
//                 costPrice
//             }
//         ],
//     }
//
// })