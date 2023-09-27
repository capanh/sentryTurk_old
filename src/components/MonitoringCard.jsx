import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardMedia } from '@mui/material';


function MonitoringCard({ appName, totalUsers, location, score}) {

  const logoUrl = `../logos/icons8-${appName.replace(/ /g, '-')}-48.png`;

  
  return (
    <Card sx={{ width:'200', height:'70', boxShadow:2 }}  >
      <CardContent sx={{ display:'flex' , gap: '30px', alignitems:'center', justifyContent:'center'}}  >
      <CardMedia
        component="img"
        sx={{ height: 50 , width:50 }}
        image={logoUrl}
        alt={`${appName} Logo`}
        
      />
      <Box>
      <Typography variant="h5" component="div">
          {appName}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Total Users: {totalUsers}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Location: {location}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Score: {score}
        </Typography>
      </Box>
        
      </CardContent>
    </Card>
  );
}

export default MonitoringCard;