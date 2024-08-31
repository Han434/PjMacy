import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useOrder } from '../../../features';
import productsJson from '../../../Data/inventory.json';

const inventoryProducts = productsJson;

const ProductTable = () => {
    const { addNewProduct } = useOrder();
    
    return (
        <TableContainer>
            <Table sx={{minWidth: "100%"}}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Product Name</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Unit</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Click to Add</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {inventoryProducts.map((inventoryProduct, index) => (
                    <TableRow key={index}>
                        <TableCell align="center">{inventoryProduct.product.productName}</TableCell>
                        <TableCell align="center">{inventoryProduct.quantity}</TableCell>
                        <TableCell align="center">{inventoryProduct.product.unit}</TableCell>
                        <TableCell align="center">{inventoryProduct.product.price}</TableCell>
                        <TableCell align="center">
                            <IconButton
                                color='primary'
                                onClick={() => addNewProduct(inventoryProduct.product.id)}
                            >
                                <AddBoxIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductTable;