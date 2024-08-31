import { AppBar, Badge, Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import BrowseProduct from '../pages/order/BrowseProduct';
import ProductList from '../pages/product/ProductList';
import InventoryList from '../pages/inventory/InventoryList';
import Category from '../pages/category/CategoryList'
import OrderList from '../pages/order/OrderList';

const TopBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <Typography width={"100%"} textAlign={'center'} component="h2" variant='h5'>
            PJMacy
          </Typography>
          <IconButton onClick={toggleDrawer(false)} sx={{ml: "auto"}}>
            <KeyboardDoubleArrowLeftIcon/>
          </IconButton>
        </ListItem>
        <Divider />
        <Link to='/'>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to='/browseProduct'>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemText primary={"Create Order"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/orderList'>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemText primary={"Order"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to='/category'>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemText primary={"Category"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/productList'>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemText primary={"Product"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/inventoryList'>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemText primary={"Inventory"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon/>
          </IconButton>
          <Typography component="h2" variant='h5' sx={{ flexGrow: 1 }}>
            PJMacy
          </Typography>
          <IconButton>
            <PersonIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/browseProduct" element={<BrowseProduct />}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/productList" element={<ProductList />}></Route>
        <Route path="/inventoryList" element={<InventoryList />}></Route>
        <Route path="/orderList" element={<OrderList />}></Route>
      </Routes>
    </React.Fragment>
  )
}

export default TopBar;