import React, { useRef, useState } from 'react';
import { Button, FormGroup, Grid, Input, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { TextareaAutosize } from '@mui/core';
import { useDispatch } from 'react-redux';
import { AddNewPlant, GetPlants } from '../actions/PlantsActions';
import { useNavigate } from 'react-router';

const AddPlant: React.FC = () => {
  const [plant, setPlant] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (plant && Object.keys(plant).length === 0 && Object.getPrototypeOf(plant) === Object.prototype) {
      alert('You must fill all the lines');
    } else {
      dispatch(AddNewPlant(plant));
      navigate('/');
      dispatch(GetPlants());
    }
  };

  const handleChange = (event: any) => {
    console.log(event.target.value);
    let obj = {
      ...plant,
      [event.target.name]: event.target.value,
    };
    setPlant(obj);
  };
  console.log(plant);

  return (
    <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
      <Paper variant="outlined">
        <Box p={3}>
          <FormGroup>
            <h3>Add New Plant</h3>

            <Input placeholder="Name" name="name" onChange={(event) => handleChange(event)} />
            <Input placeholder="Type" name="type" onChange={(event) => handleChange(event)} />
            <TextareaAutosize name="description" placeholder="Description" onChange={(event) => handleChange(event)} />
            <Input placeholder="Image URL" name="image" onChange={(event) => handleChange(event)} />

            <Button variant="contained" sx={{ backgroundColor: '#658962', marginTop: '20px' }} onClick={handleSubmit}>
              Add Plant
            </Button>
          </FormGroup>
        </Box>
      </Paper>
    </Grid>
  );
};

export default AddPlant;
