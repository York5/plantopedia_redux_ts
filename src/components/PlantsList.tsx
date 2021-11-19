import { Grid } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPlants } from '../actions/PlantsActions';
import { RootStore } from '../Store';
import PlantCard from './PlantCard';

const PlantsList: React.FC = () => {
  const dispatch = useDispatch();
  const plantsState = useSelector((state: RootStore) => state.plants);
  const plants = plantsState.plants;

  useEffect(() => {
    dispatch(GetPlants());
  }, []);

  return (
    <Grid container spacing={3} justifyContent="center">
      {plants ? (
        <Grid container spacing={3} justifyContent="center">
          {plants.map((plant) => (
            <Grid item key={plant.id} justifyContent="center">
              <PlantCard plant={plant} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <h1 style={{ color: '#fff' }}>...loading</h1>
        </>
      )}
    </Grid>
  );
};

export default PlantsList;
