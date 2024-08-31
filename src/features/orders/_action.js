import { useDispatch } from 'react-redux';
import { addPayment, addProduct, removeProduct, removePayment, addCustomerId } from './_reducer';

const useOrderAction = () => {
    const dispatch = useDispatch();
    
    function addNewProduct(product) {
        dispatch(addProduct(product))
    }

    function addNewPayment(payment) {
        dispatch(addPayment(payment))
    }

    function removeProductById(product) {
        dispatch(removeProduct(product))
    }

    function removePaymentById(payment) {
        dispatch(removePayment(payment))
    }

    function addCustomerById(customerId) {
        dispatch(addCustomerId(customerId))
    }

    return {
        addNewProduct,
        addNewPayment,
        removeProductById,
        removePaymentById,
        addCustomerById
    };
};

export default useOrderAction;
