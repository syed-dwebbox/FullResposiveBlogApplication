import { Container, Link, Typography } from '@mui/material'
import React from 'react'

function Footer({title,description}) {
  return (
    <Container sx={{marginBottom:'20px'}}  maxWidth='lg'>
       <Typography variant='h6' align='center' gutterBottom>
        {title}
       </Typography>
       <Typography variant='subtitle1'
       align='center'
       color="textSecondary"
       component="p"
       >
        {description}
       </Typography>
       <Typography variant='body2' color="textSecondary" align='center'>
        Copyright © {" "}
        <Link color="inherit" href="https://material-ui.com/">
             Your website
        </Link>{" "}
        {new Date().getFullYear()}.
       </Typography>
    </Container>
  )
}

export default Footer
