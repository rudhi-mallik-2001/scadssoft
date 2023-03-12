import styled from '@emotion/styled'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ProductCont=styled(Box)`
    height:150vh;
    display:flex;
    flex-direction:row;
    background-color:#408487;
    padding:40px;
    flex-warp:warp;
    justify-content:center;
    align-items:center;
`
const Products = () => {
  return (
    <ProductCont>
   
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  

    </ProductCont>
  )
}

export default Products