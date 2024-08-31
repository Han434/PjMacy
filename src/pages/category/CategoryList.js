import React, { useState } from 'react'
import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import categories from '../../Data/category.json'
import CreateCategoryModal from './CreateCategoryModal';

const CategoryList = () => {
    const [openCreateCategoryModal, setOpenCreateCategoryModal] = React.useState(false);
    const [currentCategory, setCurrentCategory] = useState({});
    const [action, setAction] = useState('');

    const handleOpenCreateCategoryModal = (category, action) => {
        setOpenCreateCategoryModal(true);
        setCurrentCategory(category);
        setAction(action);
      };

    const handleCloseCreateCategoryModal = () => {
        setOpenCreateCategoryModal(false);
        setAction('create');
    };

    return (
        <React.Fragment>
            <Stack direction={'row'} sx={{m: 2}}>
                <Typography component='h6' variant='h6' sx={{mr: 'auto'}}>Category List</Typography>
                <Button variant='contained' onClick={handleOpenCreateCategoryModal} >Create</Button>
                <CreateCategoryModal action={action} category={currentCategory} openCreateCategoryModal={openCreateCategoryModal} handleCloseCreateCategoryModal={handleCloseCreateCategoryModal}/>
            </Stack>
            <TableContainer>
                <Table sx={{minWidth: "100%"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Created Date</TableCell>
                            <TableCell align="center">Prefix</TableCell>
                            <TableCell align="center">Category Name</TableCell>
                            <TableCell align="center">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((category, index) => (
                            <TableRow key={index} onClick={() => handleOpenCreateCategoryModal(category, 'detail')}>
                                <TableCell align="center">{category.createdAt}</TableCell>
                                <TableCell align="center">{category.prefix}</TableCell>
                                <TableCell align="center">{category.categoryName}</TableCell>
                                <TableCell align="center">{category.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}

export default CategoryList
