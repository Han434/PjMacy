import React from 'react'
import inventoryProducts from '../../Data/inventory.json';
import VerifiedIcon from '@mui/icons-material/Verified';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const LowStockAlert = ({ quantity, lowStock }) => {
    return quantity <= lowStock ? <VerifiedIcon color='success'/> : <NewReleasesIcon color='error'/>;
}

const InventoryList = () => {
    const [openProductPriceFixModal, setOpenProductPriceFixModal] = React.useState(false);

    const handleOpenProductPriceFixModal = () => {
        setOpenProductPriceFixModal(true);
      };

    const handleCloseProductPriceFixModal = () => {
        setOpenProductPriceFixModal(false);
    };

    const [openCreateProductModal, setOpenCreateProductModal] = React.useState(false);

    const handleOpenCreateProductModal = () => {
        setOpenCreateProductModal(true);
      };

    const handleCloseCreateProductModal = () => {
        setOpenCreateProductModal(false);
    };

    return (
        <React.Fragment>
            <Stack direction={'row'} sx={{m: 2}}>
                <Typography component='h6' variant='h6' sx={{mr: 'auto'}}>Inventory List</Typography>
                <Button variant='contained' onClick={handleOpenCreateProductModal} >Inventory Adjustment</Button>
                {/* <ProductPriceFix openProductPriceFixModal={openProductPriceFixModal} handleCloseProductPriceFixModal={handleCloseProductPriceFixModal}/>
                <CreateProductModal openCreateProductModal={openCreateProductModal} handleCloseCreateProductModal={handleCloseCreateProductModal}/> */}
            </Stack>
            <TableContainer>
                <Table sx={{minWidth: "100%"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Created Date</TableCell>
                            <TableCell align="center">Supplier</TableCell>
                            <TableCell align="center">Brand</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Unit</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Code</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">LowStock</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {inventoryProducts.map((inventory, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{inventory.product.createdAt}</TableCell>
                                <TableCell align="center">{inventory.product.supplier}</TableCell>
                                <TableCell align="center">{inventory.product.brand}</TableCell>
                                <TableCell align="center">{inventory.product.description}</TableCell>
                                <TableCell align="center">{inventory.product.unit}</TableCell>
                                <TableCell align="center">{inventory.product.category.categoryName}</TableCell>
                                <TableCell align="center">{inventory.product.code}</TableCell>
                                <TableCell align="center">{inventory.quantity}</TableCell>
                                <TableCell align="center">{inventory.lowStock}</TableCell>
                                <TableCell align="center">
                                    <LowStockAlert quantity={inventory.quantity} lowStock={inventory.lowStock} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </React.Fragment>
    )
}

export default InventoryList
