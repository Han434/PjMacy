import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { useOrder } from '../../../features';

const AddNewPaymentModal = ({ openAddPaymentModal, handleCloseAddPaymentModal }) => {
    const { addNewPayment } = useOrder();
    const [payment, setPayment] = useState({
        paymentMethod: '',
        transitionId: '',
        amount: 0
      });
    
    const handleSave = () => {
      addNewPayment(payment);
    };

    const handlePayment = (event) => {
        setPayment({
            ...payment,
            [event.target.name]: event.target.value
        });
    };
    return (
        <Dialog open={openAddPaymentModal} onClose={handleCloseAddPaymentModal}>
            <DialogTitle>Add Payment</DialogTitle>
            <DialogContent>
              <form sx={{p: '2rem'}}>
                <Stack direction={'row'} gap={2}>
                  <TextField name="paymentMethod" required label="Payment Method" variant="filled" onChange={handlePayment}/>
                  <TextField name="transitionId" required label="Transition Id" variant="filled" onChange={handlePayment}/>
                  <TextField name="amount" required label="Amount" variant="filled" onChange={handlePayment}/>
                </Stack>
              </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseAddPaymentModal}>Close</Button>
                <Button variant='contained' onClick={() => { handleSave(); handleCloseAddPaymentModal(); }} >Confirm</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddNewPaymentModal;

