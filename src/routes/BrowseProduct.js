import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const rows = [
  {
    productName: "ABC",
    variantDescription: "ACB",
    quantity: 10,
    price: 200,
    add: false
  },
  {
    productName: "ABC",
    variantDescription: "ACB",
    quantity: 10,
    price: 200,
    add: false
  },
  {
    productName: "ABC",
    variantDescription: "ACB",
    quantity: 10,
    price: 200,
    add: false
  }
]

const BrowseProduct = () => {
  return (
    <React.Fragment>
        <Typography component='h1' variant='h1'>Browse Product</Typography>
        <Grid container>
          <Grid item xs={12} md={7}>
            <TableContainer>
              <Table sx={{minWidth: "100%"}}>
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Variant Description</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Click to Add</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row}
                    >
                      <TableCell >
                        {row.productName}
                      </TableCell>
                      <TableCell>{row.variantDescription}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>{row.add}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography component='h2' variant='h2'>Product 1</Typography>
          </Grid>
        </Grid>
    </React.Fragment>
  )
}

export default BrowseProduct
