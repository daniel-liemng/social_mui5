import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

const UserBox = styled(Box)({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderAddModal = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'
          align='center'
        >
          Create Post
        </Typography>
        <UserBox>
          <IconButton size='large' edge='end' color='inherit'>
            <Avatar
              src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              sx={{ width: 30, height: 30 }}
            />
          </IconButton>
          <Typography variant='subtitle1' component='p'>
            John
          </Typography>
        </UserBox>
        <TextField
          required
          multiline
          id='outlined-required'
          placeholder="What's your mind?"
          rows={3}
          variant='standard'
          sx={{ width: '100%' }}
        />

        <Stack direction='row' gap={1} mt={2} mb={3}>
          <EmojiEmotions color='primary' />
          <Image color='secondary' />
          <VideoCameraBack color='success' />
          <PersonAdd color='warning' />
        </Stack>

        <ButtonGroup variant='contained' fullWidth>
          <Button>Post</Button>
          <Button sx={{ width: '100px' }}>
            <DateRange />
          </Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: { xs: '50%', md: 20 },
        transform: { xs: 'translateX(50%)', md: 'translateX(0)' },
      }}
    >
      <Tooltip title='Add'>
        <Fab color='secondary' onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      {renderAddModal}
    </Box>
  );
};

export default Add;
