import { useDispatch } from 'react-redux';
import { getProduct } from './_reducer';

const useProductAction = () => {
    const dispatch = useDispatch();
    
    function getProductById(productId) {
        dispatch(getProduct(productId))
    }

    return {
        getProductById
    };
};

export default useProductAction;
