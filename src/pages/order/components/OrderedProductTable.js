import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useOrder, useProduct } from "../../../features";
import React from 'react';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const OrderedProductTable = () => {
    const { products, removeProductById } = useOrder();
    const { product, getProductById } = useProduct();

    return (
        <TableContainer>
            <Table sx={{minWidth: "100%", backgroundColor: 'white'}} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Unit</TableCell>
                        <TableCell align="center">Unit Price</TableCell>
                        <TableCell align="center">Sub Total</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product1, index) => {
                        const currentProduct = getProductById(product1.productId);
                        console.log(currentProduct);
                        return (
                            <TableRow key={index}>
                                <TableCell align="center">{product.productName}</TableCell>
                                <TableCell align="center">{product1.quantity}</TableCell>
                                <TableCell align="center">{product.unit}</TableCell>
                                <TableCell align="center">{product.price}</TableCell>
                                <TableCell align="center">{product.price * product1.quantity}</TableCell>
                                <TableCell>
                                    <IconButton color='error' onClick={() => removeProductById(product.id)}>
                                        <DisabledByDefaultIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>);
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderedProductTable;

