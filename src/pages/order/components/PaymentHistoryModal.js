import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useOrder } from '../../../features';

const PaymentHistoryModal = ({ openModal, handleCloseModal }) => {
    const { payments } = useOrder();

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>
                <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography component={'h5'} variant={'h5'}>Payment History</Typography>
                </Stack>
            </DialogTitle>
            <DialogContent>
                <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Payment Method</TableCell>
                        <TableCell>Transition Id</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {payments.map((payment, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {payment.paymentMethod}
                                </TableCell>
                                <TableCell>
                                    {payment.transitionId}
                                </TableCell>
                                <TableCell>
                                    {payment.amount}
                                </TableCell>
                                <TableCell>
                                    <IconButton color='error'>
                                        <ClearIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={handleCloseModal}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default PaymentHistoryModal;

