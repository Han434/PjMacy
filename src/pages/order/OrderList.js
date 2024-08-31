import React, { useState } from 'react';
import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import orders from '../../Data/orderList.json'
import OrderDetailModal from './OrderDetailModal';

const OrderList = () => {
    const [openOrderDetailModal, setOpenOrderDetailModal] = useState(false);
    const initialState = { products: [] };
    const [currentOrder, setCurrentOrder] = useState(initialState);

    const handleOpenOrderDetailModal = (order) => {
        setOpenOrderDetailModal(true);
        setCurrentOrder(order);
      };
    
      const handleCloseOrderDetailModal = () => {
        setOpenOrderDetailModal(false);
        setCurrentOrder({ products: [] });
      };
    
  return (
    <React.Fragment>
        <Stack direction={'row'} sx={{m: 2}}>
            <Typography component='h6' variant='h6' sx={{mr: 'auto'}}>Order List</Typography>
            {/* <Button variant='contained' onClick={handleOpenCreateProductModal} >Create Category</Button>
            <CreateCategoryModal openCreateProductModal={openCreateProductModal} handleCloseCreateProductModal={handleCloseCreateProductModal}/> */}
              <OrderDetailModal order={currentOrder} openOrderDetailModal={openOrderDetailModal} handleCloseOrderDetailModal={handleCloseOrderDetailModal}></OrderDetailModal>
        </Stack>
        <TableContainer>
            <Table sx={{minWidth: "100%"}}>
                <TableHead>
                      <TableRow>
                        <TableCell align="center">Order Date</TableCell>
                          <TableCell align="center">Customer</TableCell>
                          <TableCell align="center">Total Quantity</TableCell>
                          <TableCell align="center">Total Amount</TableCell>
                        <TableCell align="center">Order Status</TableCell>
                        <TableCell align="center">Payment Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                      {orders.map((order, index) => (
                          <TableRow key={index} onClick={() => handleOpenOrderDetailModal(order)}>
                            <TableCell align="center">{order.createdAt}</TableCell>
                            <TableCell align="center">{order.customer}</TableCell>
                            <TableCell align="center">{order.totalQuantity}</TableCell>
                            <TableCell align="center">{order.totalAmount}</TableCell>
                            <TableCell align="center">{order.orderStatus}</TableCell>
                            <TableCell align="center">{order.paymentStatus}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </React.Fragment>
  )
}

export default OrderList
