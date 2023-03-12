import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React from 'react'
import About from './About/About'
import Footer from './Footer/Footer'
import Home from './Home/Home'
const Componentcont=styled(Box)`
width:100%;
`
const Component = () => {
  return (
    <Box>
        <Home/>
        <About/>
    </Box>
  )
}
export default Component