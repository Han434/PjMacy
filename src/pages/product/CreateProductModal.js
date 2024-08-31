import { Box, Button, Dialog, DialogActions, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import React from 'react';
import categories from '../../Data/category.json'

const CreateProductModal = ({ action, product, openCreateProductModal, handleCloseCreateProductModal }) => {
    const [currentCategory, setCurrentCategory] = React.useState('');

    const handleChange = (event) => {
        setCurrentCategory(event.target.value);
    };
    
    const DeleteButton = () => {
        if (action === 'detail') {
            return (
                <Button variant='outlined' onClick={handleCloseCreateProductModal} color='error'>Delete</Button>
            )
        } 
    }
    const CreatedAt = () => {
        if (action === 'detail') {
            console.log(currentCategory);
            return (
                <Typography>Created At - {product.createdAt}</Typography>
            )
        } 
    }

    return (
        <Dialog open={openCreateProductModal} onClose={handleCloseCreateProductModal}>
            <DialogTitle>
                <Stack direction={'row'}>
                    {
                        action === 'detail' ? <Typography component={'h6'} variant='h6' sx={{ mr: 'auto' }}>Product Detail</Typography> : <Typography component={'h6'} variant='h6' sx={{ mr: 'auto' }}>Create Product</Typography>
                    }
                    <DeleteButton/>
                </Stack>
            </DialogTitle>
            <DialogContentText sx={{p: '1rem'}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        <CreatedAt/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField sx={{minWidth: '100%'}} name="supplier" required label="Supplier" variant="filled" value={ product ? product.supplier : '' }/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField sx={{minWidth: '100%'}} name="brand" required label="Brand" variant="filled" value={ product ? product.brand : '' }/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField sx={{minWidth: '100%'}} name="description" required label="Description" variant="filled" value={ product ? product.description : '' }/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField sx={{minWidth: '100%'}} name="unit" required label="Unit" variant="filled" value={ product ? product.unit : '' }/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="filled" sx={{minWidth: '100%'}}>
                            <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={ currentCategory }
                                onChange={handleChange}
                            >
                                {
                                    categories.map((category, index) => (
                                        <MenuItem value={category.categoryId}>
                                            <em>{category.categoryName}</em>
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField sx={{minWidth: '100%'}} name="code" required label="Code" variant="filled" value={ product ? product.code : '' }/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField sx={{minWidth: '100%'}} name="price" required label="Price" variant="filled" value={ product ? product.price : '' }/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField sx={{minWidth: '100%'}} name="cost" required label="Cost" variant="filled" value={ product ? product.cost : '' }/>
                    </Grid>
                </Grid>
            </DialogContentText>
            <DialogActions>
                <Grid container>
                    <Grid item xs={6} md={6}>
                        <Button sx={{width: '100%'}} onClick={handleCloseCreateProductModal}>Close</Button>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Button sx={{width: '100%'}} variant='contained' onClick={() => { handleCloseCreateProductModal(); }} >Confirm</Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
}
export default CreateProductModal;
