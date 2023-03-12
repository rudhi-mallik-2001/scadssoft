import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const Aboutcont = styled(Box)`
width:100%;
height:100vh;
background-color:#192537;
display:flex;
position:relative;
`
const ContentCont = styled(Box)`
position:absolute;
width:55%;
background-color:#B09E80;
height:50%;
top:25%;
left:12%;
z-index:2;
color:white;
fontsize:10px;
display:flex;
justify-content:center;
text-align:start;
align-items:center;
border-radius:18px;
@media (min-width: 1024px) {
    width:60%;
    background-color:#B09E80;
    height:60%;
    top:18%;
    left:5%;
}
`
const ImgCont = styled(Box)`
position:absolute;
top:12%;
right:6%;
z-index:1;
width:235px;
height:400px;
background-color:#caa6a8;
border-radius:18px;
@media (min-width: 768px) {
    width:400px;
    background-color:#caa6a8;
    top:2%;
    right:2%;
    z-index:1;
};
@media (min-width: 1024px) {
    width:600px;
    background-color:#caa6a8;
    top:2%;
    right:2%;
    z-index:1;
};
@media (min-width: 1440px) {
    width:700px;
    background-color:#caa6a8;
    top:5%;
    right:5%;
    z-index:1;

};
`
const About = () => {
    return (
        <Aboutcont>
            <ContentCont>
                <Box 
                style={{ 
                    width: '65%',fontSize:'16px',margin:'25px' }}>
                    <Typography variant='subtitle'>
                        We scadssoft/alpine digits is an business solution organization that is
                        willing to give almost every solution what customer need in order to
                        achieve their prespective.
                    </Typography>
                </Box>
            </ContentCont>
            <ImgCont>
                {/* <img
                    width={'100%'}
                    sx={{
                        width: { xs: '300px', md: '300px' },
                        height: { xs: '200px', md: '200px' }
                    }}
                    src='./s-tsuchiya-Okl3mAu0na8-unsplash.jpg'
                /> */}
            </ImgCont>
        </Aboutcont>
    )
}

export default About