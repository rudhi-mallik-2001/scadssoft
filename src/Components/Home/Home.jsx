import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Boxcont = styled(Box)`
    width: 98.vw;
    height: 90vh;
    padding: 0;
    background-size: 100% 100%;
    background-image:url('./s-tsuchiya-Okl3mAu0na8-unsplash.jpg');
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const Home = () => {
    return (
        <Boxcont>
            <Typography variant='h3' style={{color:'white',fontSize:'58px',marginBottom:'8px'}}>Scadssoft</Typography>
            <Typography variant='h5' style={{color:'white',fontSize:'24px',marginBottom:'8px'}}>Start Contributing</Typography>
            <Button variant='contained' style={{color:'white',fontSize:'14px',backgroundColor:'#B09E80'}}>Book now</Button>
        </Boxcont>
    )
}

export default Home
