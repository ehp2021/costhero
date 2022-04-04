import React from "react";
import {Box, Grid, Typography, Button} from "@material-ui/core";

function PriceCard(props) {
  return (
    <Box m={2} p={2} sx={{ border: 1, borderColor: 'grey.500', borderRadius: 3 }}>
      <Grid container>
        <Grid item xs>
          <Typography fontWeight="bold" variant="subtitle1">hi</Typography>
          <Typography variant="subtitle1">hi 2</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}