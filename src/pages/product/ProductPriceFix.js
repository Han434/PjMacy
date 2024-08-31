import { Box, Button, Dialog, DialogActions, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Tab, Tabs, TextField } from '@mui/material';
import React from 'react';

const ProductPriceFix = ({ openProductPriceFixModal, handleCloseProductPriceFixModal }) => {
    return (
        <Dialog open={openProductPriceFixModal} onClose={handleCloseProductPriceFixModal}>
            <DialogTitle>Product Price Fix</DialogTitle>
            <DialogContentText sx={{p: '2rem'}}>
                <Stack spacing={2}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Operation</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="operation"
                        >
                            <FormControlLabel value="increment" control={<Radio />} label="Increment" />
                            <FormControlLabel value="decrement" control={<Radio />} label="Decrement" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="aop">Amount Or Percentage</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="aop"
                            name="amountOrPencentage"
                        >
                            <FormControlLabel value="amount" control={<Radio />} label="Amount" />
                            <FormControlLabel value="percentage" control={<Radio />} label="Percentage" />
                        </RadioGroup>
                    </FormControl>
                    <TextField name="paymentMethod" required label="Number" variant="filled"/>
                </Stack>
            </DialogContentText>
            <DialogActions>
                <Button onClick={handleCloseProductPriceFixModal}>Close</Button>
                <Button variant='contained' onClick={() => { handleCloseProductPriceFixModal(); }} >Confirm</Button>
            </DialogActions>
        </Dialog>
    );
}
    
export default ProductPriceFix;
