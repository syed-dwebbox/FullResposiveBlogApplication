import { Grid,Card,Hidden, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material'
import React from 'react';
import './PostCard.css';

function PostCard({post}) {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
       <Card className='card' >
         <div className='CardDetails'>
            <CardContent>
              <Typography component="h2" variant='h5'>
                {post.title}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
              {post.date}
              </Typography>
              <Typography variant='subtitle1' paragraph >
              {post.description}
              </Typography>
              <Typography variant='subtitle1' sx={{color:'skyblue'}} >
                continue reading....
              </Typography>
            </CardContent>
         </div>
         <Hidden xsDown>
           <CardMedia  className='cardMedia' 
            image={post.image}
            title={post.title}
           />
         </Hidden>
       </Card>
      </CardActionArea>
    </Grid>
  )
}

export default PostCard
