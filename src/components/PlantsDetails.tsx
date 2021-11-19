import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Typography from 'material-ui/styles/typography';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { GetOneProduct } from '../actions/PlantsActions';
import { RootStore } from '../Store';

const PlantsDetails: React.FC = () => {
  const dispatch = useDispatch();
  const plantsState = useSelector((state: RootStore) => state.plants);
  const PlantsDetails = plantsState.plantDetails;
  console.log(plantsState, 'State');
  console.log(PlantsDetails);

  const { id } = useParams();

  useEffect(() => {
    console.log('use effect', id);
    dispatch(GetOneProduct(id));
  }, []);

  return (
    <Grid container>
      {PlantsDetails ? (
        <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={8}>
          <Grid item md={4}>
            <Paper variant="outlined" sx={{ backgroundColor: '#658962' }}>
              <Box p={3}>
                <img src={PlantsDetails.image} alt="details" width="100%" height="auto" />
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper sx={{ textAlign: 'left', padding: '30px', backgroundColor: '#658962' }}>
              <p>
                <b>Name:</b> {PlantsDetails.name}
              </p>
              <p>
                <b>Type:</b> {PlantsDetails.type}
              </p>
              <p>
                <b>Description:</b> {PlantsDetails.description}
              </p>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <h1 style={{ color: '#fff' }}>Loading...</h1>
      )}
    </Grid>
  );
};

export default PlantsDetails;
