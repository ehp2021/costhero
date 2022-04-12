import React, {useState} from "react";
import {Box, 
  Grid, 
  FilledInput,
  Button, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  CircularProgress
} from "@material-ui/core";
import FormHelperText from '@mui/material/FormHelperText';
import {Close as CloseIcon} from "@material-ui/icons";
import './PostNew.css';


const initialState = {
  area: "",
  surgery_type: "",
  time: "",
  cost: "",
  free_touch_up_policy: "",
  prescription_prior: "",
  provider: "",
  uncategorized: "",
  email: "",
}

function PostNew(props) {
  const [loading, setLoading] = useState(false);
  const [priceDetails, setPriceDetails] = useState(initialState)

  const handleChange = (e) => {
    // e.persist(); 
    // e.stopPropagation() 
    setPriceDetails((oldState) => ({ 
      ...oldState, 
      [e.target.name]: e.target.value, 
    }));
  };
 

  const handleSubmit = async () => {
    setLoading(true);
    await props.postPrice(priceDetails);
    closeModal();
  }


  //clear the state when you close the modal
  const closeModal = () => {
    setPriceDetails(initialState);
    setLoading(false);
    props.closeModal();
  }

  // console.log(priceDetails,"price working?")

  return (
    <Dialog open={props.newPriceModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post Your Lasik Cost
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>

{/* ROW 1 */}
          <Grid item xs={6}>
            <FilledInput 
              onChange={(e)=> {
                e.persist();
                handleChange(e)}
              }
              name="area"
              value={priceDetails.area}
              autoComplete="off"
              placeholder="City, State, Country *"
              disableUnderline 
              fullWidth
              required="true"
            />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
              onChange={(e)=> {
                e.persist();
                handleChange(e)}
              }
              placeholder="Surgery Type *"
              name="surgery_type"
              value={priceDetails.surgery_type}
              disableUnderline 
              fullWidth
              required="true"
            />
          </Grid>
{/* ROW 2 */}
          <Grid item xs={6}>
            <FilledInput 
              onChange={(e)=> {
                e.persist();
                handleChange(e)}
              }
              name="time"
              value={priceDetails.time}
              placeholder="Date Of Lasik Procedure"
              disableUnderline 
              fullWidth
            />
            <FormHelperText>i.e. 4/1/2020</FormHelperText>
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
              onChange={(e)=> {
                e.persist();
                handleChange(e)}
              }
              name="cost"
              value={priceDetails.cost}
              placeholder="Lasik Cost *"
              disableUnderline 
              fullWidth
              required="true"
            />
            <FormHelperText>Please include the currency i.e. $4300</FormHelperText>
          </Grid>

{/* ROW 3 */}
          <Grid item xs={6}>
            <FilledInput 
              onChange={(e)=> {
                e.persist();
                handleChange(e)}
              }
              name="free_touch_up_policy"
              value={priceDetails.free_touch_up_policy}
              placeholder="Touch Up Policy (If Any)"
              disableUnderline 
              fullWidth
            />
            <FormHelperText>If your provider provided a free touch-up policy, please explain; otherwise, write "None"</FormHelperText>
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
              onChange={(e)=> {
                e.persist();
                handleChange(e)}
              }
              name="prescription_prior"
              value={priceDetails.prescription_prior}
              placeholder="Your Prescription Prior To Lasik"
              disableUnderline 
              fullWidth
            />
            <FormHelperText>i.e. -3.0, -5.0</FormHelperText>
          </Grid>

{/* ROW 4 */}
          <Grid item xs={6}>
            <FilledInput 
              onChange={(e)=> {
                e.persist();
                handleChange(e)}
              }
              name="provider"
              value={priceDetails.provider}
              placeholder="Doctor Or Practice Name *"
              disableUnderline 
              fullWidth
              required="true"
            />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
              onChange={(e)=> {
                e.persist();
                handleChange(e)}
              }
              name="uncategorized"
              value={priceDetails.uncategorized}
              placeholder="Optional Comments"
              disableUnderline 
              fullWidth
            />
            <FormHelperText>Any other comments on your eyes post-Lasik or the experience</FormHelperText>
          </Grid>


{/* ROW 5 */}
          <Grid item xs={12}>
          <FilledInput 
              onChange={(e)=> {
                e.persist();
                handleChange(e)}
              }
              name="email"
              value={priceDetails.email}
              placeholder="Your Email"
              disableUnderline 
              fullWidth
            />
            <FormHelperText>Please provide your email in case we need to clarify any details about your submission</FormHelperText>
          </Grid>

        </Grid>
      </DialogContent>
      <DialogActions>
        <Box color="red" width="100%" display="flex" justifyContent="space-between">
          <Typography>* Required fields</Typography>
          <Button 
            onClick={handleSubmit}
            variant="contained" 
            disableElevation
            color="primary"
            disabled={loading}
            >
              {loading ? (
                <CircularProgress color="secondary" size={22}/> 
              ) : (
                "Post"
              )
              }
            
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default PostNew;