import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ActionAreaCard from './Card';


const card = (
  <React.Fragment>
    <CardContent className="d-flex justify-content-between p-0 " >
       <ActionAreaCard  />
       <ActionAreaCard />
       <ActionAreaCard />
    </CardContent> 
    
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box  >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
