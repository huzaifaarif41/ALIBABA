import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import c1 from '../img/cart1.jpg'

export default function ActionAreaCard() {
  return (
    <Card sx={{ minWidth: 110  }} style={{margin:'10px' , backgroundColor: 'gray'}}>
           
      <CardActionArea>
        <CardMedia style={{backgroundColor: 'gray' , height: '100px'}}
          component="img"
          image={c1}
          alt="cart image"
        />
        <CardContent style={{ padding : '0px' , textAlign: 'center', fontWeight:'500'}}>
           <p style= {{margin: '0px'}}>$ 1.29</p>
           <p> Trending Now</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
