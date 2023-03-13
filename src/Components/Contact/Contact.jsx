import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ContactCont = styled(Box)`
width:100%;
height:100vh;
background-image:url('/contact_us_1.jpg');
display: flex;
flex-direction:center;
align-items:center;
text-align:center;
justify-content:center;
color:white;
`
const Contact = () => {
    return (
        <ContactCont>
            <form>
                <Box style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    Enter Name:
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
                    Enter Email
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

                    Enter Message
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
                </Box>
            </form>
        </ContactCont>
    )
}

export default Contact
