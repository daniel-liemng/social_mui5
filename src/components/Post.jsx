import React from 'react';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  MoreVert as MoreVertIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';

const Post = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='20%'
        image='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: red[500] }} />}
          />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
