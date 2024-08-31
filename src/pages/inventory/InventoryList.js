import React from 'react'
import inventoryProducts from '../../Data/inventory.json';
import VerifiedIcon from '@mui/icons-material/Verified';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Button, IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const LowStockAlert = ({ quantity, lowStock }) => {
    return quantity > lowStock ? <ThumbUpAltIcon color='success'/> : <ReportProblemIcon color='error'/>;
}

function isDateInRange(date, startDate, endDate) {
    return date >= startDate && date <= endDate;
  }

function willExpireInXMonths(expirationDate, months) {
    let expiration = new Date(expirationDate);
    const today = new Date();
    const timeLater = new Date(today.getFullYear(), today.getMonth() + months, today.getDate());
    // console.log("Time Later: " + timeLater);
    // console.log("Today: " + today);
    // console.log("Expiration: " + expiration);
    return isDateInRange(expiration, today, timeLater) ? true: false;
}

function hasExpiredInXMonths(expirationDate, months) {
    let expiration = new Date(expirationDate);
    const today = new Date();
    const timeLater = new Date(today.getFullYear(), today.getMonth() - months, today.getDate());
    console.log("Time Later: " + timeLater);
    console.log("Today: " + today);
    console.log("Expiration: " + expiration);
    return isDateInRange(expiration, timeLater, today) ? true: false;
}

const ExpirationDateAlert = ({ expirationDate }) => {    
    if (willExpireInXMonths(expirationDate, 3)) {
        return (<NewReleasesIcon color='warning'/>);
    } else if (hasExpiredInXMonths(expirationDate, 11)) {
        return (<NewReleasesIcon color='error'/>);
    } else {
        return (<VerifiedIcon color='success'/>);
    }
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
                            <TableCell align="center">Supplier</TableCell>
                            <TableCell align="center">Brand</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Unit</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Code</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">LowStock</TableCell>
                            <TableCell align="center">Stock Status</TableCell>
                            <TableCell align="center">Expiration Date</TableCell>
                            <TableCell align="center">Expiration Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {inventoryProducts.map((inventory, index) => (
                            <TableRow key={index}>
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
                                <TableCell align="center">{inventory.expirationDate}</TableCell>
                                <TableCell align="center">
                                    <ExpirationDateAlert expirationDate={inventory.expirationDate} />
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
