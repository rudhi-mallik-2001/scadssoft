import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router';
import { Details } from '../Data'
const DetailsCont = styled(Box)`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
flex-wrap:nowrap;
align-items:center;
background-color:#9063ce;
color:white;
font: 400 0.875rem/1.5 Nunito Sans,sans-serif;
gap:3rem;

@media (max-width: 768px){
    height:auto;
    padding:15px 0;
}
`
const Headingcont = styled(Box)`
    width:80%;
    height:auto;
    display:flex;
`
const ContentBox = styled(Box)`
    width:70%;
    padding:10px;
    
`
const ProductDetails = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <DetailsCont>
            <Headingcont style={{ justifyContent: 'center' }}>
                <Typography variant='h2'
                    style={{
                        width: '80%',
                        fontSize: '30px',
                        fontWeight: '700',
                        borderBottom: '2px solid ',
                        display:'flex',
                        justifyContent:'center'
                    }}>{Details[id]['name']}</Typography>
            </Headingcont>
            <ContentBox>
                {Details[id]['content']}
            </ContentBox>
            <Headingcont style={{ justifyContent: 'flex-end' }}>
                <Button variant='contained'
                    style={{ fontSize: '12px', fontWeight: '700', padding: '5px 15px', borderRadius: '16px' }}>Book a Demo</Button>
            </Headingcont>
        </DetailsCont>

    )
}

export default ProductDetails
