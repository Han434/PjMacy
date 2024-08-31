import React, { useState } from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import OrderedProductTable from './OrderedProductTable'
import OrderedSummaryTable from './OrderedSummaryTable'
import PaymentHistoryModal from './PaymentHistoryModal';
import AddNewPaymentModal from './AddNewPaymentModal';
import { useOrder } from '../../../features';

const OrderTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddPaymentModal, setOpenAddPaymentModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenAddPaymentModal = () => {
    setOpenAddPaymentModal(true);
  };

  const handleCloseAddPaymentModal = () => {
    setOpenAddPaymentModal(false);
  };
  
  return (
      <Stack direction={'column'} spacing={1}>
        <Stack sx={{p:'1rem'}} direction={'column'}>
          <Typography
            component='h5'
            variant='h5'
          >
            Order Number
          </Typography>
          <AddNewPaymentModal openAddPaymentModal={openAddPaymentModal} handleCloseAddPaymentModal={handleCloseAddPaymentModal}/>
          <PaymentHistoryModal openModal={openModal} handleCloseModal={handleCloseModal}/>
        </Stack>
        <OrderedProductTable/>
        <OrderedSummaryTable/>
        <Grid container spacing={1}>
          <Grid item xs={6} md={6}>
            <Button sx={{width: '100%'}} variant="outlined" color="error" onClick={handleOpenModal}>View Payment History</Button>
          </Grid>
          <Grid item xs={6} md={6}>
            <Button sx={{width: '100%'}} variant="contained" color='success' onClick={handleOpenAddPaymentModal}>Add New Payment</Button>
          </Grid>
          <Grid item xs={6} md={12}>
            <Button sx={{width: '100%'}} variant="contained">Confirm</Button>
          </Grid>
          <Grid item xs={6} md={12}>
            <Button sx={{width: '100%'}} color="error" variant="contained">Cancle Order</Button>
          </Grid>
        </Grid>
      </Stack>
  )
}

export default OrderTable;

