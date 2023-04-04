import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import About from '../About/About'
import { useNavigate, useParams } from 'react-router'

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
    const Navigation = useNavigate();
    function HandleProductDetails ()  {
        Navigation(`../contact`);
    }; 
    return (
        <Boxcont>
            <Typography variant='h3' style={{color:'white',fontSize:'58px',marginBottom:'8px',fontFamily:'monospace'}}>Clumps Software</Typography>
            <Typography variant='h5' style={{color:'white',fontSize:'24px',marginBottom:'8px',fontFamily:'monospace'}}>Start Contributing</Typography>
            <Button variant='contained' 
            onClick={()=>HandleProductDetails()}
            style={{color:'white',fontSize:'14px',backgroundColor:'#B09E80',fontFamily:'monospace'}}>Book now</Button>
        </Boxcont>
    )
}

export default Home
