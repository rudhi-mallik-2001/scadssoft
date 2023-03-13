import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ShalterCont = styled(Box)`
width:95.%;
background-color:#192537;
color:white;
height:200px;
padding:30px;
flex-direction:row;
display:flex;
justify-content:center;
align-items:center;
`
const InputCont = styled(Box)`
display:flex;
width:60%;
height:100%;
flex-direction:row;
justify-content:center;
align-items:center;
gap:10px;
@media (max-width: 768px) {
    width:90%;
    flex-direction:column;
};
`
const Newshalter = () => {
    return (
        <ShalterCont>
            <InputCont>
                <TextField
                    hiddenLabel
                    variant="filled"
                    size="small"
                    color='none'
                    fullWidth 
                    sx={{ input: { color: '#B09E80' } }}
                    placeholder='Email'
                    style={{border:'2px solid #B09E80',color:'#B09E80'}}
                />
                <Button variant='contained'
                style={{backgroundColor:'#B09E80'}}
                >Subscribe</Button>
            </InputCont>
        </ShalterCont>
    )
}

export default Newshalter
