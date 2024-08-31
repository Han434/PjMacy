import React, { useState } from 'react'
import productsJson from '../../Data/productList.json';
import ProductPriceFix from './ProductPriceFix';
import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import CreateProductModal from './CreateProductModal';

const inventoryProducts = productsJson;

const ProductList = () => {
    const [openProductPriceFixModal, setOpenProductPriceFixModal] = React.useState(false);
    const initialState = { category: { categoryName: '' } };
    const [currentProduct, setCurrentProduct] = useState(initialState);
    const [action, setAction] = useState('');

    const handleOpenProductPriceFixModal = () => {
        setOpenProductPriceFixModal(true);
      };

    const handleCloseProductPriceFixModal = () => {
        setOpenProductPriceFixModal(false);
    };

    const [openCreateProductModal, setOpenCreateProductModal] = React.useState(false);

    const handleOpenCreateProductModal = (product, action) => {
        setOpenCreateProductModal(true);
        setCurrentProduct(product);
        setAction(action);
      };

    const handleCloseCreateProductModal = () => {
        setOpenCreateProductModal(false);
        setCurrentProduct({ category: { categoryName: '' } });
        setAction('create');
    };

    return (
        <React.Fragment>
            <Stack direction={'row'} sx={{m: 2}}>
                <Typography component='h6' variant='h6' sx={{ mr: 'auto' }}>Product List</Typography>
                <Button variant='outlined' onClick={handleOpenProductPriceFixModal} sx={{mx:1}}>Price Fix</Button>
                <Button variant='contained' onClick={handleOpenCreateProductModal} >Create</Button>
                <ProductPriceFix openProductPriceFixModal={openProductPriceFixModal} handleCloseProductPriceFixModal={handleCloseProductPriceFixModal}/>
                <CreateProductModal action={action} product={currentProduct} openCreateProductModal={openCreateProductModal} handleCloseCreateProductModal={handleCloseCreateProductModal}/>
            </Stack>
            <Typography component='h6' variant='body1' align="right" sx={{ mr: 2 }}>Note. Click Product to see Full Information</Typography>
            <TableContainer>
                <Table sx={{minWidth: "100%"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Created Date</TableCell>
                            <TableCell align="center">Supplier</TableCell>
                            <TableCell align="center">Brand</TableCell>
                            <TableCell align="center">Code</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {inventoryProducts.map((product, index) => (
                            <TableRow key={index} onClick={() => handleOpenCreateProductModal(product, 'detail')}>
                                <TableCell align="center">{product.createdAt}</TableCell>
                                <TableCell align="center">{product.supplier}</TableCell>
                                <TableCell align="center">{product.brand}</TableCell>
                                <TableCell align="center">{product.code}</TableCell>
                                <TableCell align="center">{product.description}</TableCell>
                                <TableCell align="center">{product.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </React.Fragment>
    )
}

export default ProductList
