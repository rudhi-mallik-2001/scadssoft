import styled from '@emotion/styled'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ProductCont = styled(Box)`
    height:auto;
    display:flex;
    flex-direction:row;
    background-color:#8ca9aa;
    padding:40px;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    align-content:center;
    gap:10px;
`
const Product = [
  { image: 'Production Management.jpg', name: 'Production Management' },
  { image: 'Ware House Management.png', name: 'Ware House Management' },
  { image: 'HR management.jpg', name: 'HR management' },
  { image: 'Sales & Marketing Management.jpg', name: 'Sales & Marketing Management' },
  { image: 'Finance Management.jpg', name: 'Finance Management' },
  { image: 'Work Place Management.jpeg', name: 'Work Place Management' },
  { image: 'Hospitality services.webp', name: 'Hospitality services' },
  { image: 'Tracking of product management.jpeg', name: 'Tracking of product management' }
];
const Cards=styled(Card)`
min-width:345;
max-width:345;
width:300px;
height:auto;
`
const Products = () => {
  return (
    <ProductCont>
    <Typography></Typography>
      {
        Product.map((val) => {
          return (
            <Cards key={`${val}}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  width="150"
                  image={`/Products/${val.image}`}
                  alt="green iguana"
                  style={{objectFit:'fill'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{fontSize:'15px'}}>
                    {val.name}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
                </CardContent>
              </CardActionArea>
            </Cards>
          )
        })
      }

    </ProductCont>
  )
}

export default Products