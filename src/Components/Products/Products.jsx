import styled from '@emotion/styled'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router';

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
  { id:0 ,image: 'Production Management.jpg', name: 'Production Management' },
  { id:1 ,image: 'Ware House Management.png', name: 'Ware House Management' },
  { id:2 ,image: 'HR management.jpg', name: 'HR management' },
  { id:3 ,image: 'Sales & Marketing Management.jpg', name: 'Sales & Marketing Management' },
  { id:4 ,image: 'Finance Management.jpg', name: 'Purchase Management' },
  // { id:5 ,image: 'Work Place Management.jpeg', name: 'Work Place Management' },
  // { id:6 ,image: 'Hospitality services.webp', name: 'Hospitality services' },
  // { id:7 ,image: 'Tracking of product management.jpeg', name: 'Tracking of product management' }
];
const Cards=styled(Card)`
min-width:345;
max-width:345;
width:300px;
height:auto;
`
const Products = () => {
  const Navigation = useNavigate();
  function HandleProductDetails (id)  {
    Navigation(`details/${id}`);
};
  return (
    <ProductCont>
    <Typography></Typography>
      {
        Product.map((val) => {
          return (
            <Cards key={`${val}}`}>
              <CardActionArea onClick={()=>{HandleProductDetails(val.id)}}>
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