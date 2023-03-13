import styled from '@emotion/styled'
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterCont = styled(Box)`
    width:100%;
    height:350px;
    background-color:#caa6a8;
    display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media (max-width: 768px) {
  height:auto;
};
`
const FooterBoxCont = styled(Box)`
display:flex;
width:80%;
height:80%;
flex-direction:row;
justify-content:center;
align-items:center;
gap:10px;
color:white;
@media (max-width: 768px) {
    width:90%;
    flex-direction:column;
};
`
const FooterBox = styled(Box)`
width:33%;
height:90%;
display:flex;
flex-direction:column;
justify-content:start;
align-items:start;
padding:8px;
@media (max-width: 768px) {
    width:90%;
    flex-direction:column;
};
`
const FooterIconBox = styled(Box)`
width:53%;
height:90%;
display:flex;
flex-direction:column;
justify-content:start;
align-items:start;
padding:8px;
gap:4px;
@media (max-width: 768px) {
    width:90%;
    flex-direction:column;
};
`
const FooterFormBox = styled(Box)`
width:53%;
height:90%;
display:flex;
flex-direction:column;
justify-content:start;
align-items:start;
padding:8px;
gap:4px;
@media (max-width: 768px) {
    width:90%;
    flex-direction:column;
};
`

const FooterTypography = styled(Typography)`
display:flex;
flex-direction:row;
justify-content:start;
align-items:center;
font-size:14px;
cursor:pointer;
`
const Footer = () => {
  return (
    <FooterCont>
      <FooterBoxCont>
        <FooterBox>
          <Typography variant='h3' style={{ fontSize: '18px' }}>Contact</Typography>
          <br />
          <Typography variant='body' style={{ fontSize: '14px', height: '100px' }}>
            Shiv Arcade, A2/16, Upper Ground Floor, Mayur Vihar, New Delhi, Delhi 110091
          </Typography>
          <Typography variant='body' style={{ fontSize: '14px' }}>
            Tel: 8975656**
            <br />
            Email: xyz@gmail.com
          </Typography>
        </FooterBox>
        <FooterBox >
          <Typography variant='h3' style={{ fontSize: '18px' }}>Stay Conected</Typography>
          <br />
          <Box style={{
            fontSize: '14px', height: '100px', display: 'flex', justifyContent: 'center',
            alignContent: 'center', flexDirection: 'column'
          }}>
            <FooterTypography variant='body'><FacebookIcon /> Facebook</FooterTypography>

            <br />
            <FooterTypography variant='body'><InstagramIcon /> Instagram</FooterTypography>
            <br />
            <FooterTypography variant='body'><YouTubeIcon />YouTube</FooterTypography>
          </Box>
        </FooterBox>
        <FooterFormBox >
          <Typography variant='h3' style={{ fontSize: '18px' }}>Send Message</Typography>
          <br />
          <form>
            <Box style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <TextField
                hiddenLabel
                variant="filled"
                size="small"
                color='none'
                sx={{ input: { color: 'white' } }}
                placeholder='Full Name'
                fullWidth
                style={{ border: '2px solid #B09E80', color: '#B09E80' }}
              />
              <TextField
                hiddenLabel
                variant="filled"
                size="small"
                color='none'
                sx={{ input: { color: 'white' } }}
                placeholder='Email'
                type="email"
                fullWidth
                style={{ border: '2px solid #B09E80', color: '#B09E80' }}
              />
            </Box>
            <TextField
              hiddenLabel
              variant="filled"
              size="small"
              color='none'
              sx={{ textarea: { color: 'white' } }}
              placeholder='Message'
              multiline
              fullWidth
              style={{ border: '2px solid #B09E80', color: '#B09E80', marginTop: '10px', marginBottom: '10px' }}
            />
            <Button variant='contained'
              style={{ backgroundColor: '#B09E80' }}
            >Send</Button>
          </form>
        </FooterFormBox>
      </FooterBoxCont>
    </FooterCont>
  )
}

export default Footer