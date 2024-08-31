import useOrderAction from './_action'
import { useSelector } from 'react-redux';

export const useOrder = () => {
    const { addNewProduct, addNewPayment, removeProductById, removePaymentById, addCustomerById } = useOrderAction();
    const products = useSelector(state => state.orders.draftOrder.products);
    const payments = useSelector(state => state.orders.draftOrder.payments);
    const customerId = useSelector(state => state.orders.data.customerId);

    return {
        addNewProduct,
        addNewPayment,
        removeProductById,
        removePaymentById,
        addCustomerById,
        products,
        payments,
        customerId
    }
}

export { default as ordersReducer } from './_reducer'; 
