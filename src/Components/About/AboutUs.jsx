import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const AboutUsCont = styled(Box)`
    height:auto;
    display:flex;
    flex-direction:row;
    background-color:#000;
    padding:40px;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    align-content:center;
    gap:10px;
`
const AboutusBox_1 = styled(Box)`
  width:100%;
  color:white;
  height:83vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const AboutusBox_2 = styled(Box)`
  width:100%;
  color:white;
  height:80vh;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: flex-start
`
const AboutUs = () => {
  return (
    <AboutUsCont>
      <AboutusBox_1>
        <Typography variant='h3' style={{ fontSize: '28px' }}>Welcome to scadssoft / Alpine digits</Typography>
        <Typography variant='h3' style={{ fontSize: '15px', color: 'gray' }}>We do what rest of world does but we do it a more innovative way, we
          improvise that’s why our products are called extra ordinary.</Typography>
      </AboutusBox_1>
      <AboutusBox_2>
        <Typography variant='h3' style={{ fontSize: '28px' }}>Purpose</Typography>
        <br />
        <Typography variant='h3' style={{ fontSize: '15px', color: 'gray' }}>
          We build greater future through highly innovating skills which help in
          transforming skills which would help in transforming this world which
          people have never excepted.
          <br />
          We scadssoft/alpine digits is an business solution organization that is
          willing to give almost every solution what customer need in order to
          achieve their prespective.
          <br />
          We also have our own products that help clients to organize their
          business in a very simpler way which they and their customer can easily
          handle .</Typography>
      </AboutusBox_2>
      <AboutusBox_2>
        <Typography variant='h3' style={{ fontSize: '28px' }}>Who we are</Typography>
        <br />
        <Typography variant='h3' style={{ fontSize: '15px', color: 'gray' }}>
          Vision :- We will build a world like the people have imagined in
          their dreams we want to turn them in to reality, our vision is to
          make people friendly software in those we are working on so it will
          be ease of doing business for those clients who have our products.</Typography>
      </AboutusBox_2>
    </AboutUsCont>
  )
}

export default AboutUs