import { createSlice } from "@reduxjs/toolkit";
import products from '../../Data/browseProduct.json'

const initialState = {
    id: 0,
    productName: '',
    unit: '',
    price: 0
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProduct: (state, action) => {
            console.log(products);
            const productId = action.payload;
            console.log(`pDId: `+ productId);
            const product = products.find(product => product.id === productId);
            console.log(product);
            if (product) {
                console.log('found');
                state.id = product.id;
                state.productName = product.productName;
                state.unit = product.unit;
                state.price = product.price;
                return product;
            }
        }
    }
})

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;