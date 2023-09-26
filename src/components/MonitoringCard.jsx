import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MonitoringCard({ appName, totalUsers, location, score }) {
  return (
    <Card>
      <CardContent>
        
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
      </CardContent>
    </Card>
  );
}

export default MonitoringCard;