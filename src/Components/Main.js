import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { posts } from '../data/Data';
import Markdown from 'markdown-to-jsx'



function Main({title}) {
  return (
    <Grid item xs={12} md={8} >
      <Typography marginTop={2} variant='h6' gutterBottom >
        {title}
      </Typography>
      <Divider/>
      {
        posts.map((post) => (
            <Markdown key={post.body}>
                {post.body}
            </Markdown>
        ))
      }

    </Grid>
  )
}

export default Main
