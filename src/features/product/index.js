import { useSelector } from 'react-redux';
import useProductAction from './_action'

export const useProduct = () => {
    const { getProductById } = useProductAction();
    const product = useSelector(state => state.product);

    return {
        getProductById,
        product
    }
}

export { default as productReducer } from './_reducer'; 
