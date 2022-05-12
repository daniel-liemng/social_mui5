import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  width: '40%',
  borderRadius: theme.shape.borderRadius,
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const menuId = 'profile-menu';

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Social Media
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Box sx={{ flexGrow: 1 }}></Box>
        <Search>
          <InputBase placeholder='Search...' />
        </Search>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconsContainer>
          <Badge badgeContent={5} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={5} color='error'>
            <Notifications />
          </Badge>
          <IconButton
            size='large'
            edge='end'
            aria-label='account of current user'
            aria-controls={menuId}
            aria-haspopup='true'
            onClick={handleProfileMenuOpen}
            color='inherit'
          >
            <Avatar
              src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              sx={{ width: 30, height: 30 }}
            />
          </IconButton>
        </IconsContainer>
        <UserBox>
          <IconButton
            size='large'
            edge='end'
            aria-label='account of current user'
            aria-controls={menuId}
            aria-haspopup='true'
            onClick={handleProfileMenuOpen}
            color='inherit'
          >
            <Avatar
              src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              sx={{ width: 30, height: 30 }}
            />
          </IconButton>
          <Typography variant='subtitle1' component='p'>
            John
          </Typography>
        </UserBox>
      </Toolbar>
      {renderProfileMenu}
    </AppBar>
  );
};

export default Navbar;
