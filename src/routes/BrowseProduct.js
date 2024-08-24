import { Box, Button, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import { dark } from '@mui/material/styles/createPalette';
import { autoBatchEnhancer } from '@reduxjs/toolkit';
import React, { useMemo, useState } from 'react';
import AddPaymentModal from './AddPaymentModal';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

const rows = [
  { id: 1, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 2, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 3, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 4, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 5, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 6, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 7, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 8, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 9, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 10, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 11, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 },
  { id: 12, productName: "Sunscreen", quantity: 10, unit: "ml", price: 5000 }
];

const payments = [
  { paymentMethod: 'Kpay', transitionId: 'dfsj;jfksdj', amount: 20000 },
  { paymentMethod: 'Cash', transitionId: '-', amount: 30000 }
]

const BrowseProduct = () => {
  const [customer, setCustomer] = React.useState('');
  const [totalQuantity, setTotalQuantity] = React.useState(0);
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [totalPayment, setTotalPayment] = React.useState(0);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [receiveableAmount, setReceiveableAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('Unpaid');

  const [openModal, setOpenModal] = useState(false);
  const [payments, setPayments] = useState([]);

  const handleAddPayment = (payment) => {
    setPayments([...payments, payment]);
  };

  const handleChange = (event) => {
    setCustomer(event.target.value);
  };

  const addProduct = (id) => {
    const product = orderedProducts.find((orderedProduct) => orderedProduct.id === id);
    const orderedProduct = rows.find((row) => row.id === id);
    if (orderedProduct.quantity > 0) { 
      orderedProduct.quantity -= 1;
      if (typeof product !== 'undefined') {
        product.quantity += 1;
        setOrderedProducts([...orderedProducts]);
      } else {
        const newOrderedProduct = { ...orderedProduct, quantity: 1 };
        setOrderedProducts([...orderedProducts, newOrderedProduct]);
      }
    } else {
      alert('Product is out of stock');
    }
  }

  const calculateTotal = useMemo(
    () => {
      let total = 0;
      orderedProducts.forEach(
        product => {
          total += product.quantity;
        }
      )
      setTotalQuantity(total);

      let totalA = 0;
      orderedProducts.forEach(
        product => {
          let subTotal = Number(product.quantity * product.price);
          totalA += subTotal;
        }
      )
      setTotalAmount(totalA);

      let totalP = 0;
      payments.forEach(
        payment => { 
          totalP += payment.amount;
        }
      )
      setTotalPayment(totalP);

      let receiveableAmount = 0;
      if (totalP > totalA) { 
        receiveableAmount = totalA - totalP;
        setPaymentStatus('Exceeded');
      } else if (totalA === totalP) {
        receiveableAmount = 0;
        setPaymentStatus('Paid');
      } else {
        receiveableAmount = totalA - totalP;
        setPaymentStatus('Unpaid');
      }
      setReceiveableAmount(receiveableAmount);
    }
    , [orderedProducts]
  );

  return (
    <React.Fragment>
      <Grid container sx={{maxHeight: '92vh'}}>
        <Grid item xs={12} md={8} sx={{maxHeight: '92vh', overflow: 'auto'}}>
          <Typography component='h6' variant='h6'>Browse Product</Typography>
          <TableContainer>
            <Table sx={{minWidth: "100%"}}>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Unit</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Click to Add</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell >{row.productName}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.unit}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>
                      <IconButton
                        variant="outlined"
                        onClick={() => addProduct(row.id)}
                      >
                        <AddIcon/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={4} sx={{backgroundColor: '#2196f3', maxHeight: '92vh', overflow: 'auto'}}>
          <Stack direction={'column'} spacing={1}>
            <Stack sx={{p:'1rem'}} direction={'column'}>
              <Typography
                component='h5'
                variant='h5'
              >
                Order Number
              </Typography>
              <FormControl sx={{ m:1, minWidth: '7rem', minHeight: '1rem'}}>
                <InputLabel id="demo-select-small-label">Customer</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={'Customer'}
                  label="Customer"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Customer"}>Customer 1</MenuItem>
                  <MenuItem value={"Customer"}>Customer 2</MenuItem>
                  <MenuItem value={"Customer"}>Customer 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: '7rem', minHeight: '1rem' }}>
                <Button color="success" variant="contained">View Payment History</Button>
              </FormControl>
            </Stack>
            <TableContainer>
              <Table sx={{minWidth: "100%"}} size="small">
                <TableHead>
                  <TableRow sx={{backgroundColor: 'white'}}>
                    <TableCell>Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Unit</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell>Sub Total</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderedProducts.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell >{product.productName}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>{product.unit}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.price * product.quantity}</TableCell>
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
            <TableContainer>
              <Table sx={{ minWidth: "100%", backgroundColor: 'white'}} size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>Total Quantity</TableCell>
                    <TableCell >{totalQuantity}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Amount</TableCell>
                    <TableCell>{totalAmount}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Payment</TableCell>
                    <TableCell>{totalPayment}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Receiveable Amount</TableCell>
                    <TableCell>{receiveableAmount}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Payment Status</TableCell>
                    <TableCell>{paymentStatus}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Stack>
              <Button sx={{mx:'1rem'}} variant="contained">Confirm</Button>
              <Button sx={{m:'1rem'}} color="error" variant="outlined">Cancle Order</Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default BrowseProduct
