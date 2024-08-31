import { createSlice } from "@reduxjs/toolkit";
import productsJson from '../../Data/inventory.json';
import products from '../../Data/browseProduct.json'
const inventoryProductsFromDatabase = productsJson;
const productsFromDataBase = products;

const initialState = {
    data: {
        customerId: 0
    },
    draftOrder: {
        products: [],
        payments: []
    }
}

const products1 = [{
    productId: 1,
    quantity: 10
}]

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const orderedProductId = action.payload;
            const inventoryProductFromDatabase = inventoryProductsFromDatabase.find((p) => p.id === orderedProductId);
        
            if (inventoryProductFromDatabase && inventoryProductFromDatabase.quantity > 0) {
                inventoryProductFromDatabase.quantity -= 1;

                const stateProducts = state.draftOrder.products;
                let stateProduct = stateProducts.find((p) => p.id === orderedProductId);

                if (stateProduct) {
                    stateProduct.quantity += 1;
                    state.draftOrder.products = [stateProducts];
                    console.log('+1');
                } else {
                    stateProduct = {
                        productId: orderedProductId,
                        quantity: 1
                    }
                    // console.log('Hello');
                    // console.log(stateProduct);
                    state.draftOrder.products = [...stateProducts, stateProduct];
                }

            } else {
              alert('Product is out of stock');
            }
        },
        addPayment: (state, action) => {
            state.draftOrder.payments = [...state.draftOrder.payments, action.payload]
        },
        removeProduct: (state, action) => {
            console.log('hello');
        },
        removePayment: (state, action) => {
            console.log('hello');
        },
        addCustomerId: (state, action) => {
            console.log('hello1');
            state.data.customerId = action.payload;
        }
    }
})

export const { addProduct, addPayment, removePayment, removeProduct, addCustomerId } = ordersSlice.actions;
export default ordersSlice.reducer; 