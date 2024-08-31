import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import ProductTable from './components/ProductTable';
import OrderTable from './components/OrderTable';

const BrowseProduct = () => {
  const [orderedProducts, setOrderedProducts] = useState([]);

  return (
    <React.Fragment>
      <Grid container sx={{maxHeight: '92vh'}}>
        <Grid item xs={12} md={8} sx={{maxHeight: '92vh', overflow: 'auto'}}>
          <Typography component='h6' variant='h6' sx={{m: '1rem'}}>Browse Product</Typography>
          <ProductTable/>
        </Grid>
        <Grid item xs={12} md={4} sx={{backgroundColor: '#2196f3', maxHeight: '92vh', overflow: 'auto'}}>
          <OrderTable/>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default BrowseProduct;