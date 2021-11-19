import React, { useEffect, useRef, useState } from 'react';
import { Button, FormGroup, Grid, Input, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { TextareaAutosize } from '@mui/core';
import { EditNewPlant, GetOneProduct } from '../actions/PlantsActions';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../Store';
import { SettingsApplications } from '@mui/icons-material';

const EditPlant: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const plantsState = useSelector((state: RootStore) => state.plants);
  const PlantsDetails = plantsState.plantDetails;
  const [plant, setPlant] = useState({ ...PlantsDetails });
  console.log(plantsState);

  useEffect(() => {
    dispatch(GetOneProduct(id));
  }, []);

  useEffect(() => {
    console.log(PlantsDetails);
    setPlant({ ...PlantsDetails });
  }, [PlantsDetails]);

  const handleInp = (e: any) => {
    console.log(plant);
    let obj = {
      ...plant,
      [e.target.name]: e.target.value,
    };
    setPlant(obj);
  };

  const handleSaveChanges = () => {
    if (plant && Object.keys(plant).length === 0 && Object.getPrototypeOf(plant) === Object.prototype) {
      alert('You must fill all the lines');
    } else {
      dispatch(EditNewPlant(plant.id, plant));
      navigate('/');
    }
  };

  return (
    <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
      <Paper variant="outlined">
        <Box p={3}>
          <FormGroup>
            <h3>Edit New Plant</h3>
            <Input placeholder="Name" name="name" value={plant.name} onChange={(e) => handleInp(e)} />
            <Input placeholder="Type" name="type" value={plant.type} onChange={(e) => handleInp(e)} />
            <TextareaAutosize
              name="description"
              value={plant.description}
              placeholder="Description"
              onChange={(e) => handleInp(e)}
            />
            <Input placeholder="Image URL" value={plant.image} name="image" onChange={(e) => handleInp(e)} />

            <Button
              variant="contained"
              sx={{ backgroundColor: '#658962', marginTop: '20px' }}
              onClick={() => handleSaveChanges()}
            >
              Save Edits
            </Button>
          </FormGroup>
        </Box>
      </Paper>
    </Grid>
  );
};

export default EditPlant;
