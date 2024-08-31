import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const OrderDetailModal = ({ order, openOrderDetailModal, handleCloseOrderDetailModal }) => {
    return (
        <Dialog open={openOrderDetailModal} onClose={handleCloseOrderDetailModal}>
            <DialogTitle>
                <Stack direction={'row'}>
                    <Typography component={'h6'} variant='h6' sx={{mr: 'auto'}}>Order Detail</Typography>
                    <Button sx={{mx: 1}} variant='outlined' onClick={handleCloseOrderDetailModal} color='error'>Delete</Button>
                    <Button variant='contained' onClick={handleCloseOrderDetailModal}>Add More Item</Button>
                </Stack>
            </DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography component={'p'} variant='p'>Order Date - {order.createdAt}</Typography>
                        <Typography component={'p'} variant='p'>Total Quantity - {order.totalQuantity}</Typography>
                        <Typography component={'p'} variant='p'>Total Amount - {order.totalAmount}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component={'p'} variant='p'>Customer - {order.customer}</Typography>
                        <Typography component={'p'} variant='p'>Order Status - {order.orderStatus}</Typography>
                        <Typography component={'p'} variant='p'>Payment Status - {order.paymentStatus}</Typography>
                    </Grid>
                </Grid>
                <TableContainer>
                    <Table sx={{minWidth: "100%"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Code</TableCell>
                                <TableCell align="center">Brand</TableCell>
                                <TableCell align="center">Description</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center">Unit</TableCell>
                                <TableCell align="center">Unit Price</TableCell>
                                <TableCell align="center">Subtotal</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.products.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{product.code}</TableCell>
                                    <TableCell align="center">{product.brand}</TableCell>
                                    <TableCell align="center">{product.description}</TableCell>
                                    <TableCell align="center">{product.quantity}</TableCell>
                                    <TableCell align="center">{product.unit}</TableCell>
                                    <TableCell align="center">{product.price}</TableCell>
                                    <TableCell align="center">{product.quantity * product.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <Button sx={{width: '100%'}} variant='contained' onClick={handleCloseOrderDetailModal}>Close</Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

export default OrderDetailModal;
