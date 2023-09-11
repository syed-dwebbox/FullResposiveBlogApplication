import { Button, Card,CardActions,CardContent, Typography } from '@mui/material'
import React from 'react'
import './FeaturedPost.css';

function FeaturedPost() {
  return (
    <>
    <Card className='cover' sx={{marginBottom:5}}>
      <CardContent className='textContainer'>
        <Typography gutterBottom className='titleTwo'  sx={{fontSize:40}} >
            Title of a longer featured blog post
        </Typography>
        <Typography variant='h5' sx={{color:'white'}} >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut quas itaque alias quia molestiae iusto excepturi veniam quidem ipsam?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='text'className='btn' >
            Read more
        </Button>
      </CardActions>
    </Card>
    <Card className='cover2' >
      <CardContent className='textContainer'>
        <Typography gutterBottom className='titleTwo'  sx={{fontSize:40}} >
            Title of a longer featured blog post
        </Typography>
        <Typography variant='h5' sx={{color:'white'}} >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut quas itaque alias quia molestiae iusto excepturi veniam quidem ipsam?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='text'className='btn' >
            Read more
        </Button>
      </CardActions>
    </Card>
    </>
  )
}

export default FeaturedPost
