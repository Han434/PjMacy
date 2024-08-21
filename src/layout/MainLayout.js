import React from 'react'
import CustomThemeProvider from '../config/_theme'
import { Box, CssBaseline } from '@mui/material'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

const MainLayout = () => {
  return (
    <CustomThemeProvider>
       <CssBaseline/>
       {/* here main layout */}
       <Box>
          <Sidebar/>
          <TopBar/>

          {/* Root pages */}
       </Box>
    </CustomThemeProvider>
  )
}

export default MainLayout
