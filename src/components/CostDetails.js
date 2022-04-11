import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent} from "@material-ui/core";
import { LocationOn } from '@material-ui/icons/LocationOn';


function CostDetails( {price}) {
  return (
    <Card elevation={6}>
      <CardMedia
        style={{height: 150, overflow: 'auto'}}
        title={price.provider}
      >
        <CardContent>
          <Typography gutterBottom variant="subtitle2">Surgery Type: {price.surgery_type ? price.surgery_type : "N/A"}</Typography>
          <Typography gutterBottom variant="subtitle2">Area: {price.surgery_type ? price.area : "N/A"}</Typography>
          <Typography gutterBottom variant="subtitle2">Time: {price.time ? price.time : "N/A"}</Typography>
          <Typography gutterBottom variant="subtitle2">Cost: {price.cost ? price.cost : "N/A"}</Typography>
          <Typography gutterBottom variant="subtitle2">Provider: {price.provider ? price.provider : "N/A"}</Typography>
        </CardContent>

      </CardMedia>
    </Card>
  )
}

export default CostDetails;