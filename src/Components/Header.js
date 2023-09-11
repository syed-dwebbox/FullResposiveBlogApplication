import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css'
import SizeDrawer from './SizeDrawer';

function Header() {
  return (
    <>
    <Toolbar >
    <SizeDrawer>
      <IconButton color='inherit' >
      <MenuIcon />
      </IconButton>
      </SizeDrawer>
      <Typography variant='h6' className='title'>
        Blogging Website
      </Typography>
      <IconButton color='inherit' >
      <Badge badgeContent={4} color='primary' >
      <NotificationsNoneIcon/>
</Badge>
        
      </IconButton>
      <IconButton color='inherit'>
      <Badge badgeContent={4} color='primary' >
<AccountCircleIcon/>
</Badge>

      </IconButton>
    </Toolbar>
    <Divider/>
    <Toolbar className='tagline' >
        Express Your emotions through words
    </Toolbar>
    </>
  )
}

export default Header
