import { Box, Button, Dialog, DialogActions, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import React from 'react';

const CreateCategoryModal = ({ action, category, openCreateCategoryModal, handleCloseCreateCategoryModal }) => {
    const DeleteButton = () => {
        if (action === 'detail') {
            return (
                <Button color='error' variant='outlined' onClick={handleCloseCreateCategoryModal}>Delete</Button>
            )
        } 
    }

    const CreatedAt = () => {
        if (action === 'detail') {
            return (
                <Typography>Created At - {category.createdAt}</Typography>
            )
        } 
    }

    return (
        <Dialog open={openCreateCategoryModal} onClose={handleCloseCreateCategoryModal}>
            <DialogTitle>
                <Stack direction={'row'}>
                    {
                        action === 'detail' ? <Typography component={'h6'} variant='h6' sx={{ mr: 'auto' }}>Category Detail</Typography> : <Typography component={'h6'} variant='h6' sx={{ mr: 'auto' }}>Create Category</Typography>
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
                        <TextField sx={{minWidth: '100%'}} name="prefix" required label="Prefix" variant="filled" value={ category ? category.prefix : '' }/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField sx={{minWidth: '100%'}} name="categoryName" required label="Category Name" variant="filled" value={ category ? category.categoryName : '' }/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField sx={{minWidth: '100%'}} name="description" required label="Description" variant="filled" value={ category ? category.description : '' }/>
                    </Grid>
                </Grid>
            </DialogContentText>
            <DialogActions>
                <Grid container>
                    <Grid item xs={6} md={6}>
                        <Button sx={{width: '100%'}} onClick={handleCloseCreateCategoryModal}>Close</Button>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Button sx={{width: '100%'}} variant='contained' onClick={() => { handleCloseCreateCategoryModal(); }} >Confirm</Button>
                    </Grid>
                </Grid>
                
                
            </DialogActions>
        </Dialog>
    );
}
export default CreateCategoryModal;
