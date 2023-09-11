import { Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'


function Sidebar({archives,description,social,title}) {


  return (
    <Grid spacing={3} item xs={12} md={4}>
      <Paper spacing={2} elevation={0} className='siderAboutBox'>
        <Typography variant='h6' gutterBottom>
            {title}
        </Typography>
        <Typography>
            {description}
        </Typography>
        </Paper>
        {archives.map((archive) => (
            <Link marginTop={1} display="block"
            variant='body1'
            href={archive.url}
            key={archive.title}
             >
             {archive.title}
            </Link>
        ))}
        <Typography>
            {social.map((network) => (
                <Link marginTop={1} display="block" variant='body1' href="#" key={network.name} >
                    <Grid container direction="row" spacing={1} alignItems="center">
                     <Grid item>
                        <network.icon/>
                     </Grid>
                     <Grid item>{network.name}</Grid>
                    </Grid>
                </Link>
            ))}
        </Typography>
      
    </Grid>
  )
}

export default Sidebar
